$(document).ready(function() {


/*--- GLOBALS ---*/
  var secretNum;
  var numOfGuesses = 0;


/*--- SELECTORS ---*/
  var $feedback     = $("#feedback");
  var $overlay      = $(".overlay");
  var $userGuess    = $("#userGuess");
  var $guessList    = $("#guessList");
  var $count        = $("#count");
  var $guessButton  = $("#guessButton");
  var $document     = $(document);


/*--- FUNCTIONS ---*/
	/*--- generate random secret number ---*/
  function secretNumber() {
    secretNum = Math.floor(Math.random() * 100) + 1;
  }
  /*--- disables input field and button after correct guess ---*/
  function disableInput() {
    $userGuess.prop('disabled', true)
    $guessButton.prop('disabled', true);
  }
  /*--- reenables input and button functionality ---*/
  function enableInput() {
    $userGuess.prop('disabled', false)
    $guessButton.prop('disabled', false);
  }
  /*--- displays out of guesses message and calls disableInput ---*/
  function outOfGuesses() {
    $feedback.text("You Are Out Of Guesses.");
    disableInput();
  }
  /*--- game play taking in guess and secretNum ---*/
  function gamePlay(guess, numOfGuess) {

    var correct = false;
    /*--- get absolute value to make all comparisons positive*/
    var diff = Math.abs(guess - secretNum);

    /*--- test for correct and limit number of guesses ---*/
    if (numOfGuesses < 8) {
      /*--- test for proximity to secret number ---*/
      if (guess === secretNum) {
        correct = true;
      }
      else if (diff < 5) {
        $feedback.text("You Are Smoking!");
      }
      else if (diff < 10) {
        $feedback.text("You Are Hot");
      }
      else if (diff < 20) {
        $feedback.text("You Are Warm");
      }
      else if (diff < 30) {
        $feedback.text("You Are Cool");
      }
      else if (diff < 40) {
        $feedback.text("You Are Cold");
      }
      else {
        $feedback.text("You Are Freezing!");
      }
    }

    /*--- either correct guess, or out of guesses ---*/
    if (correct) {
      $feedback.text("You Guessed Right!!");
      disableInput();
    }
    else if (numOfGuesses > 7) {
      outOfGuesses();
    }
  }
  /*--- enter key press triggers button click ---*/
  var enterKey = function (event) {
    if (event.which == 13) {
      $guessButton.click();
    }
  }


/*--- EVENTS ---*/
  /*--- prevents reloading when submiting input ---*/
  $("form").submit(function(event) {
    event.preventDefault();
  });
  /*--- autofocuses cursor into input field ---*/
  $userGuess.focus();
  /*--- display information modal box ---*/
 	$('.modal-trigger').leanModal({
		dismissible: true, // Modal can be dismissed by clicking outside of the modal
		opacity: .5, // Opacity of modal background
		in_duration: 300, // Transition in duration
		out_duration: 200, // Transition out duration
	});
  /*--- hide information modal box ---*/
  $("a.close").click(function(){
    $overlay.fadeOut(1000);
  });
  /*--- refresh fields for new game ---*/
  $(".new").click(function() {
    // set number of guesses to 0
    numOfGuesses = 0;

    // create a new secret number
    secretNumber();

    // reset users guess value
    $userGuess.val("");

    // reset choice list to no choices
    $guessList.empty();

    // reset count
    $count.text(numOfGuesses);

    // reset feedback message
    $feedback.text("Make your Guess!");

    // takes away disable function
    enableInput();

  });
  /*--- gets value of user input and validates; returns user number ---*/
  $guessButton.click(function() {

    /*--- autofocuses cursor into input field ---*/
    $userGuess.focus();

    /*-- get input and convert to number; call gameplay --*/
    var playersGuess = Number($userGuess.val());

    if (playersGuess >= 1 && playersGuess <= 100) {
      numOfGuesses++;
      /*--- append each guess to list section --*/
      $guessList.append("<li>" + playersGuess + "</li>");
      /*--- add 1 to number of guesses --*/
      $count.text(numOfGuesses);

      /*--- call game play function passing in validated user number ---*/
      gamePlay(playersGuess, numOfGuesses);
    }

    else {
      /*--- error message ---*/
      $feedback.text("Pick a number 1 through 100");
    }

    /*--- void out input field for next guess ---*/
      $userGuess.val("");
  });
  /*--- keyup event calls enterKey function ---*/
  $document.keyup(enterKey);


/*--- FUNCTION CALLS ---*/
  secretNumber();
  console.log(secretNum);


}); // end document.ready
