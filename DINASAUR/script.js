"use strict";
var dino = document.querySelector(".dino");
var obs = document.querySelector(".obs");
var boxdino = dino.getBoundingClientRect();
var boxobs = obs.getBoundingClientRect();
let high = 0,sc = 0;
var timer3;

function play() {
  if (!obs.classList.contains("moveobs")) {
    timer3 = window.setInterval(function () {
      sc++;
      document.querySelector(".score").textContent ="SC:" + sc + "   HI:" + high;
    }, 500);
    obs.style.display = "block";
    document.querySelector(".cloud").style.display = "block";
    document.querySelector(".base").classList.add("movebase");
    obs.classList.add("moveobs");
    }
    else {
    if (!dino.classList.contains("movedino")) {
      dino.classList.add("movedino");
      var timer = window.setInterval(function () {
        window.clearInterval(timer);
        dino.classList.remove("movedino");
      }, 600);
    }
  }
}

document.getElementsByTagName("body").ontouchstart = play;
document.body.addEventListener("keydown", function (event) {
  if (event.code == "Space" || "") {
    play();
  }
});

var timer2 = window.setInterval(function () {
  let obsleft = parseInt(window.getComputedStyle(obs).getPropertyValue("left"));
  let obsTop = parseInt(window.getComputedStyle(obs).getPropertyValue("top"))-20;
  let dinobottom = parseInt(
    window.getComputedStyle(dino).getPropertyValue("top")
  );
  dinobottom += dino.clientWidth;
  let dinoright = parseInt(
    window.getComputedStyle(dino).getPropertyValue("left")
  );
  dinoright += dino.clientWidth;
  let obsright = obsleft + obs.clientWidth-20;
  let dinoleft = parseInt(
    window.getComputedStyle(dino).getPropertyValue("left")
  );
  if (dinobottom > obsTop && dinoright > obsleft && obsright >= dinoleft) {
    alert("OUT! your score=" + sc);
    obs.style.display = "none";

    obs.classList.remove("moveobs");
    if (high < sc) {
      high = sc;
    }
    sc = 0;
    document.querySelector(".score").textContent = "SC:" + sc + "   HI:" + high;
    document.querySelector(".cloud").style.display = "none";
    document.querySelector(".base").classList.remove("movebase");

    window.clearInterval(timer3);
  }
}, 50);
