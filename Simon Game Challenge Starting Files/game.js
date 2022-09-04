
var buttonColors = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

var level = 0;


function playSound (name) {
  var myaudio = new Audio("sounds/" + name + ".mp3");
  myaudio.play();
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout( function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100)
}

function nextSequence() {
  var randomNumber = Math.floor(Math.random()*4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

  $("#" + randomChosenColor).fadeOut(100).fadeIn(100);
  playSound(randomChosenColor);

  level++;
  $("#level-title").html("Level " + level);
}

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    // if (gamePattern[userClickedPattern.length - 1] !== userClickedPattern[userClickedPattern.length - 1]) {
    //   $("#level-title").html("GameOver");
    // }
    if (gamePattern.length === userClickedPattern.length) {
      setTimeout(function () {
        userClickedPattern = [];
        nextSequence();
      }, 1000)
    }
  }
  else {
    $("body").addClass("game-over");
    playSound("wrong");
    $("#level-title").html("Game Over, Press Any Key to Restart");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200)
    startOver();
  }
}

function startOver() {
  gamePattern = [];
  level = 0;
  userClickedPattern = [];
}

$(".btn").click(function (event) {

  // var userChosenColor = $(this).attr("id");
  var userChosenColor = event.target.id;
  playSound(userChosenColor);
  animatePress(userChosenColor);
  userClickedPattern.push(userChosenColor)

  checkAnswer(userClickedPattern.length - 1)

})


$(document).keypress(function () {
  if (level === 0) {
    $("#level-title").html("Level " + level);
    nextSequence();
  }
})
