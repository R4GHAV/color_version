function play() {
    if (document.querySelector("#video1").paused) {
        document.getElementById("mybtn1").style.opacity = "0";
        document.querySelector("#video1").play();
      } else {
        document.getElementById("mybtn1").style.opacity = "0.7";
        document.querySelector("#video1").pause();
      }
}

document.querySelector("#video1").onended = function() {
    document.getElementById("mybtn1").style.opacity = "0.7";
};

function play1() {
    if (document.querySelector("#video2").paused) {
        document.getElementById("mybtn2").style.opacity = "0";
        document.querySelector("#video2").play();
      } else {
        document.getElementById("mybtn2").style.opacity = "0.7";
        document.querySelector("#video2").pause();
      }
}

document.querySelector("#video2").onended = function() {
    document.getElementById("mybtn2").style.opacity = "0.7";
};

