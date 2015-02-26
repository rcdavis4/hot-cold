
var numOfGuesses;




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
    numOfGuesses = 0;
    secretNumber = math random (1-100) + 1
    input val = undefined;
    choiceList = undefined;
  });

  $("#guessButton").click(function(){
    
  })


}); // end document.ready
