/******
/* Contains all of the methods which will check the letters 
/* guessed versus the random word selected.var 
/*/

letter = require('./letter.js');

//Given a word to guess, this will initialize
// the current word and the word to be displayed
function word(currentWord, debug=true) {
	if (debug) { console.log("word()"); }

	//attributes
	this.debug = debug;
	this.currentWord = new Array(currentWord.length); // something like '_ _ A _ _ L _'
	this.length = currentWord.length;

	for (var i = 0; i < this.length; i++){
		this.currentWord[i] = new letter(currentWord[i], debug);
	}

	// methods
	// Checks if the letter guessed is in the current word
	// and updates the word to display and displays it.
	// Returns a count of how many times the letter was found
	this.hasLetter = function(letter) {
		if (this.debug) { console.log("word.hasLetter()") };

		var count = 0;

		for (var i=0; i<this.length; i++) {
			if (this.currentWord[i].isEqual(letter)) {
				count++;
			}
		}			

		return count;
	}

	this.display = function() {
		if (this.debug) { console.log("word.display()"); }

		displayWord = "\n";
		for(var i=0; i<this.length; i++) {
			displayWord += this.currentWord[i].charDisplayed;
		}

		console.log(displayWord);
	}

	this.log = function() {
		console.log("word.currentWord: ");
		for (var i=0; i < this.length; i++) {
			this.currentWord[i].log();
		}
	}
}

module.exports = word;

// Function for Testing the Word Object Indpendently from the game.
function testWord() {
	var testEntries = [
		"12W45O78RD",	// Correct in 6 guesses
		"123456R78901",	// Incorrect - only 1 correct letter
		"112233445566WORD",	// Correct, test duplicate letters
	];

	var guessesAllowed = 10;

	for (var i=0; i<testEntries.length; i++) {
		var w = new word("WORD");
		w.log();

		var currEntry = testEntries[i];
		var guessCount = 0;

		// Check if any of the letters entered match
		for (var j=0; j<currEntry.length && guessCount<guessesAllowed; j++) {
			if (w.hasLetter(currEntry[j]) == 0) {
				// Bad Guess, increase guessCount
				guessCount++;
			}
		}

		console.log("Test Guesses: " + currEntry);
		console.log("Guess Count: " + guessCount);
//		console.log("Correct Letter Count: " + correctCount);
		console.log("Displayed Word: "); w.display();
	}
}

//testWord();