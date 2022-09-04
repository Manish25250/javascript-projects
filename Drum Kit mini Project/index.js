
// Detecting Button press
 var drumbtn = document.querySelectorAll(".drum")

 for (var i=0; i<drumbtn.length; i++){
   drumbtn[i].addEventListener("click", function () {

     var buttonName = this.innerHTML;
     buttonAnimation(buttonName);
     makesound(buttonName);
  });
 }

// Detecting Keyboard Press
 document.addEventListener("keydown", function(abcd) {

   buttonAnimation(abcd.key);
   makesound(abcd.key);
 })

// Sound Function
 function makesound(key) {

   switch (key) {
     case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
     case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
     case "s":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
     case "d":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;
     case "j":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;
     case "k":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;
     case "l":
        var kick = new Audio("sounds/kick_bass.mp3");
        kick.play();
        console.log(key);
        break;
     default: console.log(buttonName);

   }
 }

function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed")
  }, 100);
}
