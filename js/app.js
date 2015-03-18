$(document).ready(function() {

  var numOfGuesses = 0;
  var secretNum = Math.floor(Math.random() * 100) + 1;
  console.log('secret num: ' + secretNum);

  /*--- game play taking in guess and secretNum ---*/
  function gamePlay(guess) {

    console.log('secret: ' + secretNum);
    var correct = false;
    var diff = Math.abs(guess - secretNum);

    /*--- test for proximity to secret number ---*/
    if (guess === secretNum) {
      correct = true;
    }
    else if (diff < 5) {
      $("#feedback").text("You Are Smoking!");
    }
    else if (diff < 10) {
      $("#feedback").text("You Are Hot");
    }
    else if (diff < 20) {
      $("#feedback").text("You Are Warm");
    }
    else if (diff < 30) {
      $("#feedback").text("You Are Cool");
    }
    else if (diff < 40) {
      $("#feedback").text("You Are Cold");
    }
    else {
      $("#feedback").text("You Are Freezing!");
    }

    /*--- either correct guess or run out of guesses ---*/
    if (correct) {
      $("#feedback").text("You Guessed Right!!");
    }

  }

	
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

  /*--- refresh fields for new game ---*/
  $(".new").click(function() {
    location.reload(false); /* reloads from cache */
  });

  /*--- gets value of user input and validates; returns user number ---*/
  $("#guessButton").click(function() {

    /*-- get input and convert to number; call gameplay --*/
    var playersGuess = Number($("#userGuess").val());

    if (playersGuess >= 1 && playersGuess <= 100) {
      numOfGuesses++;
      /*--- append each guess to list section --*/
      $("#guessList").append("<li>" + playersGuess + "</li>");
      /*--- add 1 to number of guesses --*/
      $("#count").text(numOfGuesses);

      /*--- call game play function passing in validated user number ---*/
      gamePlay(playersGuess);
    }

    else {
      /*--- error message ---*/
      $("#feedback").text("Pick a number 1 through 100");
    }

    /*--- void out input field for next guess ---*/
      $("#userGuess").val("");
  });


}); // end document.ready






/*
- eliminate form message after every guess
- add enter key submission
- while loop for number of guesses
- error reset message for #feedback
- error reset input field #userguess to blank out
- fix new game
*/
