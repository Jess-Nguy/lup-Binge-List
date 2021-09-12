const serveStatic = require("serve-static");
const path = require("path");
const express = require("express");
const cors = require("cors");
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

app.use("/register", require("./routes/users/postUser"));

app.use("/google", require("./routes/googleAuth/fetchAll"));
app.use("/google/callback", require("./routes/googleAuth/fetchAll"));

app.use("/", serveStatic(path.join(__dirname, "../webui/dist")));

// this * route is to serve project on different page routes except root `/`
app.get(/.*/, function (req, res) {
  res.sendFile(path.join(__dirname, "../webui/dist/index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
