$(document).ready(function() {

  var numOfGuesses = 0;



  /*--- Create random number 1 -100 ---*/
  function secretNumber() {
    var randomNum = Math.floor(Math.random() * 100) + 1; //abs value

    return randomNum;
  }

  /*--- Reset for new game ---*/
  function userGuess() {

    /*--- Get value of input field and validate ---*/
    $("#guessButton").click(function() {

      var userNum = $("#userGuess").val();

      if (userNum >= 1 && userNum <= 100) {
        var guess = userNum;
      } else {
        $("#feedback").text("Pick a number 1 through 100");
      }

      return guess;
    });
  }

  /*--- Appends input and compares to secret number ---*/
  function gamePlay(secretNum, userGuess) {

    if (userGuess === secretNum) {
       $("#feedback").text("You Guessed Right!!");
    } else {
      /*--- append each guess to list section --*/
      $("#guessList").append("<li>" + userGuess + "</li>");

      /*--- add 1 to number of guesses --*/
      $("#count").text(numOfGuesses++);

      /*--- void out input field for next guess ---*/
      $("#userGuess").val("");
    }
  }

  /*--- Reset for new game ---*/
  function newGame() {
      document.location.reload(true);

      // set number of guesses to 0
//      numOfGuesses = 0;

      // create a new secret number
//      secretNum = secretNumber();

      // reset users guess value
//      $("#userGuess").val("");

      // reset choice list to no choices
//      $("#guessList").empty();

      // reset count
//      $("#count").text(numOfGuesses);
  }



	
  /*--- Display information modal box ---*/
  $(".what").click(function(){
    $(".overlay").fadeIn(1000);
  });

  /*--- Hide information modal box ---*/
  $("a.close").click(function(){
    $(".overlay").fadeOut(1000);
  });

  /*--- Start a new game ---*/
  $(".new").click(function() {
    newGame();
  });



  var secretNum = secretNumber();
  console.log("secret num: " + secretNum);
  var userGuess = userGuess();
  console.log("user guess: " + userGuess);

  gamePlay(secretNum, userGuess);



}); // end document.ready



