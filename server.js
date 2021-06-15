const express = require("express");
const path = require("path");
const Rollbar = require("rollbar");
const rollbar = new Rollbar({
  accessToken: "34fe08ef13184a76b5699e7cee582ad7",
  captureUncaught: true,
  captureUnhandledRejections: true,
});

const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
  rollbar.info("html file served successfully");
});

const port = process.env.PORT || 4444;

app.listen(4444, () => console.log(`running on port: ${port}`));
