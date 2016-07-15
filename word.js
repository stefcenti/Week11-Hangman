var let = require('./letter.js');

//Given a word to guess, this will initialize
// the current word and the word to be displayed
function word(currentWord) {
	//attributes
	this.currentWord = currentWord; // word to guess - may be a word object
	this.displayedWord = new Array(currentWord.length); // something like '_ _ A _ _ L _'

	for (var i = 0; i < currentWord.length; i++){
		this.displayedWord[i] = new let(currentWord[i]);
//		this.displayedWord[i] = currentWord[i];
	}

	// methods
	// Checks if the letter guessed is in the current word
	// and updates the word to display and displays it.
	// Returns true if found, otherwise false
	this.guessALetter = function(letter) {
		console.log("Guess a letter");
	}

	this.log = function() {
		console.log("Current Word: " + this.currentWord);
		console.log("Displayed Word: ");
		for (var i=0; i < this.displayedWord.length; i++) {
			this.displayedWord[i].log();
//			console.log(this.displayedWord);
		}
	}
}

var w = new word("WORD");
w.log();