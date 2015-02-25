var numOfGuesses = 0;






$(document).ready(function(){
	
  /*--- Display information modal box ---*/
  $(".what").click(function(){
    $(".overlay").fadeIn(1000);
  });

  /*--- Hide information modal box ---*/
  $("a.close").click(function(){
    $(".overlay").fadeOut(1000);
  });

  function getUserGuess() {
  $('#guessButton').click(function() {
    var userInput = $('#userGuess').val();
    userInput = Number(userInput);
    console.log('user input: ' + userInput);
    numOfGuesses++;

    return userInput;
  })
}



  var userGuess = getUserGuess();
  console.log('user guess: ' + userGuess);
//  console.log('guesses: ' + numOfGuesses);

}); // end document.ready



