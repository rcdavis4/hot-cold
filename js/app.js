$(document).ready(function() {

  var numOfGuesses = 0;



  /*--- prevents reloading when submiting input ---*/
  $("form").submit(function(event) {
    event.preventDefault();
  });

  /*--- create random number 1 -100 ---*/
  function secretNumber() {
    var randomNum = Math.floor(Math.random() * 100) + 1;

    return randomNum;
  }

  /*--- reset for new game ---*/
  function userGuess() {

    /*--- Get value of input field and validate ---*/
    $("#guessButton").click(function() {

      var userNum = $("#userGuess").val();

      if (userNum >= 1 && userNum <= 100 && !isNaN(userNum)) {
        /*--- append each guess to list section --*/
        $("#guessList").append("<li>" + userNum + "</li>");
        /*--- add 1 to number of guesses --*/
        $("#count").text(++numOfGuesses);
        /*--- void out input field for next guess ---*/
        $("#userGuess").val("");
      }
      else {
        /*--- error message ---*/
        $("#feedback").text("Pick a number 1 through 100");
        /*--- void out input field for next guess ---*/
        $("#userGuess").val("");
      }

      return userNum;
    });
  }

  /*--- game play ---*/
  function gamePlay(secretNum) {

    var correct = false;

    while (numOfGuesses < 7 && correct) {
      if (userGuess === secretNum) {
        $("#feedback").text("You Guessed Right!!");
      }
    }
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
  }


	
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
    newGame();
  });



  var secretNum = secretNumber();
  console.log("secret num: " + secretNum);

  gamePlay(secretNum);



}); // end document.ready



