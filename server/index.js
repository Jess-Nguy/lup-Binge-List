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

//  REQUEST SHOWS
app.use("/requestShow", require("./routes/showRequest/deleteShowRequest"));
app.use("/requestShow", require("./routes/showRequest/getShowRequest"));
app.use("/requestShow", require("./routes/showRequest/postShowRequest"));

// SHOWS
app.use("/show", require("./routes/show/postShow"));
app.use("/show/dropdown", require("./routes/show/fetchShowDropdown"));
app.use("/show/display", require("./routes/show/fetchDisplayShows"));
// app.use("/show", require("./routes/show/putShow"));

// Show Relations
app.use("/showRelation", require("./routes/showRelation/postShowRelation"));

// Actor
app.use("/actor/dropdown", require("./routes/actor/fetchActorsDropdown"));

// Character
app.use("/character/dropdown", require("./routes/character/fetchCharactersDropdown"));

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
