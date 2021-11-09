const serveStatic = require("serve-static");
const path = require("path");
const express = require("express");
const cors = require("cors");
const app = express();
const passport = require("passport");
const { checkAuthHeaderSetUser, notFound, errorHandler } = require("./middlewares");

require("dotenv").config();
const auth = require("../server/authentication");

// Middleware
app.use(express.json());
app.use(cors());
app.use(passport.initialize());
app.use(checkAuthHeaderSetUser);
app.use("/auth", auth);

// app.use(checkAuthHeaderSetUserUnAuthorized);

// USERS
app.use("/user/id", require("./routes/users/fetchById"));
app.use("/user/id", require("./routes/users/updateByUserId"));
app.use("/user/filter", require("./routes/users/fetchUserByFilter"));

// BANNERS
app.use("/banners", require("./routes/users/updateBanners"));
app.use("/banners", require("./routes/users/fetchBanners"));

// REQUEST SHOWS
app.use("/requestShow", require("./routes/showRequest/deleteShowRequest"));
app.use("/requestShow", require("./routes/showRequest/getShowRequest"));
app.use("/requestShow", require("./routes/showRequest/postShowRequest"));

// SHOWS
app.use("/show", require("./routes/show/postShow"));
app.use("/show/delete", require("./routes/show/delete"));
app.use("/show/dropdown", require("./routes/show/fetchShowDropdown"));
app.use("/show/display", require("./routes/show/fetchDisplayShows"));
app.use("/show", require("./routes/show/fetchById"));
app.use("/show/filter", require("./routes/show/showBrowseFilter"));
app.use("/show", require("./routes/show/putShow"));

// Actor
app.use("/actor/dropdown", require("./routes/actor/fetchActorsDropdown"));

// Character
app.use("/character/dropdown", require("./routes/character/fetchCharactersDropdown"));

// User Binge Show
app.use("/bingeList", require("./routes/bingeList/insert"));
app.use("/bingeList", require("./routes/bingeList/update"));
app.use("/bingeList", require("./routes/bingeList/delete"));
app.use("/bingeList/filter", require("./routes/bingeList/getListByUserFilter"));
app.use("/bingeList/checkAdd", require("./routes/bingeList/isShowAlreadyAdded"));

// Comments
app.use("/comment", require("./routes/comment/insert"));
app.use("/comment", require("./routes/comment/delete"));
app.use("/comment", require("./routes/comment/update"));
app.use("/comment", require("./routes/comment/fetchById"));

app.use("/", serveStatic(path.join(__dirname, "../webui/dist")));

// this * route is to serve project on different page routes except root `/`
app.get(/.*/, function (req, res) {
  res.sendFile(path.join(__dirname, "../webui/dist/index.html"));
});

app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
module.exports = app;
