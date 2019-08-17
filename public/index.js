$(function() {
        //Connect to the socket
        var socket = io();

        socket.on("connect", function() {
          console.log("Connected!");
        });

        //Listen for server
        socket.on("click_count", function(value) {
          $("#counter").html(value); //Set counter value
        });

        //Sends button click to server
        $("#btn_click").click(function() {
          socket.emit("clicked");
        });
      });

//disable enter
document.addEventListener("keydown", function(e) {
  if (e.which == 13) {
    e.preventDefault();
    return false;
  }
  if (e.which == 83) {
    document.getElementById("audiOtto").play();
  }
});

function makeItDing() {
  var audio = document.getElementById("audio");
  if (audio.paused) {
    audio.play();
  } else {
    audio.currentTime = 0;
  }
}

document.addEventListener("touchstart", function() {}, true);
