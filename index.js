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

function doTheDings() {
  countTheDings();
  makeItDing();
}

function countTheDings() {
  if (typeof Storage !== "undefined") {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount) + 1;
    } else {
      localStorage.clickcount = 1;
    }
    document.getElementById("counter").innerHTML = localStorage.clickcount;
  } else {
    document.getElementById("counter").innerHTML =
      "Your browser can't handle the dings";
  }
}

function makeItDing() {
  var audio = document.getElementById("audio");
  if (audio.paused) {
    audio.play();
  } else {
    audio.currentTime = 0;
  }
}

function loadTheDings() {
  if (typeof localStorage.clickcount !== "undefined") {
    document.getElementById("counter").innerHTML = localStorage.clickcount;
  } else {
    document.getElementById("counter").innerHTML =
      "Ding that dinger to start dinging!";
  }
}

document.addEventListener("touchstart", function() {}, true);
