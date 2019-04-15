var express = require("express");

// App Setup
var app = express();

app.use(express.static("public"));

// Server listen Port
var server = app.listen(4000, () => {
  console.log("App listening on port 4000!");
});
