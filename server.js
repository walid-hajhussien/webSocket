var express = require("express");
var socket = require("socket.io");

// App Setup
var app = express();

// Server listen Port
var server = app.listen(4000, () => {
  console.log("App listening on port 4000!");
});

app.use(express.static("public"));

//socket config
var io = socket(server);

// every client will have his own socket
io.on("connection", socket => {
  console.log("socket connection has made", socket.id);
});
