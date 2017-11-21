// Hangman game !


var spiceArray = ["posh", "ginger", "sporty", "baby", "scary", "zigazig ha", "if you wanna be my lover", "spice world"];

var selectedWord = "";
var letterInSelectedWord = [];
var numberBlanks = 0;
var showBlankorLetters = [];
var answerArray = [];

var wins = 0;
var losses = 0;
var guessCount = 12;



function startGame () {
	answerArray	= [];
	guessCount = 12;
	showBlankorLetters = [];

	selectedWord = spiceArray[Math.floor(Math.random() * spiceArray.length)];
	letterInSelectedWord = selectedWord.split("");
	numberBlanks = letterInSelectedWord.length;
	console.log(selectedWord);
	console.log(numberBlanks);    //  <-- missing a ; ????

	for(var i = 0; i < numberBlanks; i++) {
		showBlankorLetters.push("_");
	}
	console.log(showBlankorLetters);
	document.getElementById("show-letter").innherHTML = showBlankorLetters.join(" ");
	document.getElementById("guess-counter").innherHTML = guessCount;

}

function letterChecker(letter) {

	// allows you to pick the same wrong letter multiple times?

	var letterInSelectedWord = false;

	for(var i = 0; i < numberBlanks; i++) {
		if(selectedWord[i] === letter) {
			letterInSelectedWord = true;
		}
	}

	if(letterInSelectedWord) {
		for(i = 0; i <numberBlanks; i++) {
			if(selectedWord[i] === letter) {
				showBlankorLetters[i] = letter;
			}
		}
	}
	else{
		guessCount --;
		answerArray.push(letter)
	}
}

function gameOver() {

	document.getElementById('show-letter').innerHTML = showBlankorLetters.join(" ");
	document.getElementById('guess-counter').innerHTML = guessCount;
	document.getElementById('wrong-letter').innerHTML = answerArray.join(" ");

	if(letterInSelectedWord.join(" ") === showBlankorLetters.join(" ")) {
		wins++;
		alert("You win at Spice Hangman!");    //  <-- Do somethine more interesting!
		document.getElementById('win-counter').innerHTML = wins;
		startGame();
	}
	else if(guessCount === 0) {
		document.getElementById('loss-counter').innerHTML = losses ++;
		alert("You lose - no more guesses! Sad Spice!");
		startGame();
	}

}

startGame();
document.onkeyup = function(event) {
	var letterGuess = String.fromCharCode(event.keyCode).toLowerCase();
	letterChecker(letterGuess)
	gameOver();
}







// OTHER STUFF I TRIED......


// 	s = answerArray.join(" ");
// 	document.getElementById("answer").innerHTML = s;

// function letterGuess () {
// 	var letter = document.getElementById("letter").value;

// 		if (letter.length > 0) {
// 			for (var i = 0; i <spiceArray.length; i++) {
// 				if (randoSelect[i] === letter) {
// 					answerArray[i] = letter;
// 				}
// 			}
// 		guessCount--;
// 		document.getElementById("guess-counter").innherHTML = "Guesses Remaining: " +- guessCount;
// 		document.getElementById("answer").innerHTML = answerArray.join(" ");

// 		}	


	


// Blank lines to pop up?? from fridge example....

// for (var i = 0; i <letters.length; i ++){
// 	var letterBlnks = $("<button>");
// 	letterBlnks.addClass("letterBlnks");
// 	letterBlnks.attr(letters[i]);
// 	$("#blanks").append(letterBlnks);
// }

// $(".letterBlnks").on("click", function() {
// 	var blankLine = $("<div>");
// 	blankLine.addClass("lineStyle");
// 	blankLine.text($(this).attr("show-line"));
// 	$("display").append(blankLine);
// })


// // Inner Html - how do we get the blanks on here do we need to have another argument shadow spiceArray?

// 	var html = 
// 		"<h3>Current word: " + randoSelect + "</h3>"
// 		// "<h3>Guesses Remaining: " - guessCount + "</h3>"
// 		"<h3>Wins: " + wins + "</h3>"
// 		// "<h3>Letters Guessed: " + userGuess + "</h3>"

// 	document.querySelector("#game").innerHTML = html;


	


