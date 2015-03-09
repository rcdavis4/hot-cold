<<<<<<< HEAD
=======
$(document).ready(function() {

  var numOfGuesses = 0;



  /*--- create random number 1-100 ---*/
  function secretNumber() {
    var randomNum = Math.floor(Math.random() * 100) + 1;

    return randomNum;
  }

  /*--- get and validate user input ---*/
//  function userGuess() {
//
//    /*-- get input and convert to number --*/
//    var userNum = Number($("#userGuess").val());
//
//    if (userNum >= 1 && userNum <= 100 && !isNaN(userNum)) {
//      /*--- append each guess to list section --*/
//      $("#guessList").append("<li>" + userNum + "</li>");
//      /*--- add 1 to number of guesses --*/
//      $("#count").text(++numOfGuesses);
//      /*--- void out input field for next guess ---*/
//      $("#userGuess").val("");
//    }
//    else {
//      /*--- error message ---*/
//      $("#feedback").text("Pick a number 1 through 100");
//      /*--- void out input field for next guess ---*/
//      $("#userGuess").val("");
//    }
//  }

  /*--- game play taking in guess and secretNum ---*/
  function gamePlay(guess) {
//    var correct;
    /*--- test for proximity to secret number ---*/
    if (guess == secretNum) {
      $("#feedback").text("You Guessed Right!!");
//        correct = true;
    }
    else if ((guess - secretNum) < 5) {
      $("#feedback").text("You Smoking!");
    }
    else if ((guess - secretNum) < 10) {
      $("#feedback").text("You Are Hot");
    }
    else if ((guess - secretNum) < 20) {
      $("#feedback").text("You Are Warm");
    }
    else if ((guess - secretNum) < 30) {
      $("#feedback").text("You Are Cool");
    }
    else if ((guess - secretNum) < 40) {
      $("#feedback").text("You Are Cold");
    }
    else {
      $("#feedback").text("You Are Freezing!");
    }

    /*--- either correct guess or run out of guesses ---*/
//    if (correct) {
//      $("#feedback").text("You Guessed Right!!");
//    } else {
//      $("#feedback").text("You Are Out Of Guesses");
//    }
  }

  /*--- reset for new game ---*/
  function newGame() {
//      document.location.reload(true);

      // set number of guesses to 0
      numOfGuesses = 0;

      // create a new secret number
      secretNum = secretNumber();

      // reset users guess value
      $("#userGuess").val("");

      // reset choice list to no choices
      $("#guessList").empty();

      // reset count
      $("#count").text(numOfGuesses);

      // reset feedback message
//      $("#feedback").();
  }
>>>>>>> events

var numOfGuesses;

<<<<<<< HEAD
/*--- Create random number 1 -100 ---*/
var secretNumber = Math.floor(Math.random() * 100) + 1;
console.log('secret number: ' + secretNumber);

function newGame() {
  // set number of guesses to 0
    numOfGuesses = 0;
    console.log('guesses: ' + numOfGuesses);

    // create a new secret number
    secretNumber = Math.floor(Math.random() * 100) + 1;
    console.log('secret number: ' + secretNumber);

    // reset users guess value
    $("#userGuess").val("");
    console.log($("#userGuess").val());

    // reset choice list to no choices
    $("#guessList").empty();
}


$(document).ready(function(){
=======
>>>>>>> events
	
  /*--- prevents reloading when submiting input ---*/
  $("form").submit(function(event) {
    event.preventDefault();
  });

  /*--- display information modal box ---*/
  $(".what").click(function(){
    $(".overlay").fadeIn(1000);
  });

  /*--- hide information modal box ---*/
  $("a.close").click(function(){
    $(".overlay").fadeOut(1000);
  });

<<<<<<< HEAD
  /*--- Start a new game ---*/
  $(".new").click(function() {
    newGame();
  });

  /*--- Get value of input field --*/
  $("#guessButton").click(function(){
    var guess = $("#userGuess").val();
    console.log("your guess: " + guess);
=======
  /*--- refresh fields for new game ---*/
  $(".new").click(function() {
    newGame();
  });

  /*--- gets value of user input and validates; returns user number ---*/
  $("#guessButton").click(function() {

    /*-- get input and convert to number --*/
    var userNum = Number($("#userGuess").val());

    if (userNum >= 1 && userNum <= 100 && !isNaN(userNum)) {
      numOfGuesses++;
      /*--- append each guess to list section --*/
      $("#guessList").append("<li>" + userNum + "</li>");
      /*--- add 1 to number of guesses --*/
      $("#count").text(numOfGuesses);
      /*--- void out input field for next guess ---*/
      $("#userGuess").val("");

      /*--- call game play function passing in validated user number ---*/
      gamePlay(userNum);
    }

    else {
      /*--- error message ---*/
      $("#feedback").text("Pick a number 1 through 100");
      /*--- void out input field for next guess ---*/
      $("#userGuess").val("");
    }
  });




  var secretNum = secretNumber();
  console.log("outside secret num: " + secretNum);

 
>>>>>>> events

    $("#guessList").append("<li>" + guess + "</li>");
    console.log("your list: " + $("#guessList").text());
  })


}); // end document.ready
