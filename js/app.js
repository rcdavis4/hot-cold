
var numOfGuesses;

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

  /*--- Get value of input field --*/
  $("#guessButton").click(function(){
    var guess = $("#userGuess").val();
    console.log("your guess: " + guess);

    $("#guessList").append("<li>" + guess + "</li>");
    console.log("your list: " + $("#guessList").text());
  })


}); // end document.ready
