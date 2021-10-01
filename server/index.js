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

// app.use("/register", require("./routes/users/postUser"));
app.use(checkAuthHeaderSetUser);
app.use("/auth", auth);

// app.use(checkAuthHeaderSetUserUnAuthorized);

app.use("/", serveStatic(path.join(__dirname, "../webui/dist")));

// this * route is to serve project on different page routes except root `/`
app.get(/.*/, function (req, res) {
  res.sendFile(path.join(__dirname, "../webui/dist/index.html"));
});

app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
module.exports = app;
