// open the socket connection
var socket = io.connect("http://localhost:4000");

// select the element id
var message = document.getElementById("message");
var handle = document.getElementById("handle");
var btn = document.getElementById("send");
var output = document.getElementById("output");
var feedback = document.getElementById("feedback");

//event listener for click
btn.addEventListener("click", () => {
  // emit take two value name , data
  socket.emit("chatClient", {
    message: message.value,
    handle: handle.value
  });
});

// listen to the emit from server
socket.on("chatServer", data => {
  console.log("server", data);
  output.innerHTML +=
    "<p><strong>" + data.handle + ": </strong>" + data.message + "</p>";
});

// listen for client typing
socket.on("clientTyping", data => {
  feedback.innerHTML = "<p><em>" + data + " is typing a message...</em></p>";
});

//listen for change input
message.addEventListener("keypress", () => {
  socket.emit("startTyping", {
    name: handle.value
  });
});
