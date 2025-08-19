// var inpNum = document.getElementById("inpNum");

// function up(){
//   inpNum.stepUp(10)
// }

// function down(){
//   inpNum.stepDown(5);
// }

// // =================================

// var rangeInp = document.getElementById("rangeInp");
// var rangeVal = document.getElementById("rangeVal");

// rangeInp.addEventListener("input", function(){
//   rangeVal.innerHTML = rangeInp.value;

// })


// // function test(){
// //   console.log(typeof inpNum.valueAsNumber);

// // }


// // =======================================

// var volumeInp = document.getElementById("volumeInp");
// var timeInp = document.getElementById("timeInp");
// var speed = document.getElementById("speedSelect");
// var audio = document.querySelector("audio");

// function playAud(){
//   audio.play();
// }
// function pauseAud(){
//   audio.pause();
// }
// function stopAud(){
//   audio.load();
//   audio.pause();
// }
// function muteAud(){

//   audio.muted = ! audio.muted ;
// }


// function test(){
//   console.log(audio.volume);

// }

// volumeInp.addEventListener("input", function(){
//   audio.volume = volumeInp.value;
// })

// timeInp.addEventListener("input", function(){
//   audio.currentTime = timeInp.value;
// })

// audio.addEventListener("timeupdate", function(){
//   timeInp.value = audio.currentTime ;
// })

// speed.addEventListener("change", function(){

//   audio.playbackRate = speed.value;
// })



// window.onload = function(){
//   // console.log(audio.duration);
//   timeInp.max =  audio.duration
// }



// ==================== animation ===========================


var preloader = document.getElementsByClassName("preloader")[0];
window.onload = function () {
  setTimeout(
    function () {
      preloader.style.transition = "opacity 300ms"
      preloader.style.opacity = 0;
      setTimeout(function () {
        preloader.style.display = "none"

      }, 1000)
    }, 1000)
}


// ===================================

var header = document.getElementsByClassName("header")[0];

var offers = document.getElementsByClassName("offer");


window.onscroll = function () {
  if (scrollY > 440) {
    header.classList.add("fixed-bar");
    offers[0].style.animation = "fadeInUp 1.5s forwards";
    offers[1].style.animation = "fadeInUp 1.5s .4s forwards";
    offers[2].style.animation = "fadeInUp 1.5s .8s forwards";
  }
  else {
    header.classList.remove("fixed-bar");

  }
}