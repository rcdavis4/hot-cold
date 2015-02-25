






$(document).ready(function(){
	
  /*--- Display information modal box ---*/
  $(".what").click(function(){
    $(".overlay").fadeIn(1000);
  });

  /*--- Hide information modal box ---*/
  $("a.close").click(function(){
    $(".overlay").fadeOut(1000);
  });


  var userGuess = getUserGuess();
  console.log('user guess: ' + userGuess);
  console.log('guesses: ' + numOfGuesses);

}); // end document.ready


var numOfGuesses = 0;

function newGame() {
  var count = 0;
}

function getUserGuess() {
  $('#guessButton').click(function() {
    var userGuess = $('#userGuess').val();
    userGuess = Number(userGuess);
    numOfGuesses++;

  return userGuess;
  })
}

