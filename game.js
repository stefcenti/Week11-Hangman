/*
Object: 
	game
Attributes:
	wordList // list of words to choose from 
	guessesAllowed // number of guesses allowed
	guessesSoFar // number of guesses taken for this game
	guesses // string of letters guessed
	word 	// word object to handle guesses and updates of the
			// word to be displayed
Methods:
	game(guessesAllowed) 	// Constructor to init attributes. 
							// Set current Word to a random word
							// in the word list
	play() 	// Play this game until the player uses up the number of 
			// guesses allowed
	takeAGuess() // Prompt User for a new letter to guess.  Call
				 // word.guessAletter() with the letter entered
				 // Returns true if found, otherwise false
*/
var word = require('./word.js');

function game(guessesAllowed) {
	//attributes
	this.guessesAllowed = guessesAllowed;
	this.guessesSoFar = 0;
	this.guesses = "";

	this.wordlist = ["javascript", "nodejs", "mysql", "mongodb", 
		"webdesign", "coder"];

	var random = Math.floor((Math.random()*(this.wordlist.length-1)));

	this.word = new word(this.wordlist[random]); 

	//methods
	this.play = function() { 
		console.log("game.play()");
		while (this.guessesAllowed > 0) {
			this.takeAGuess();
		}
	}

	this.takeAGuess = function() {
		console.log("game.takeAGuess()");
		// Prompt user to enter a letter
		var letterGuessed = "A"; // Hard code for now.

		// If letter has already been guessed, return

		// Letter has not been guessed yet.  Call
		// word.guess() to compare the guess with the 
		// current word and to update the displayed word.
		if (this.word.hasLetter(letterGuessed) == false) {
			// Wrong guess, decrement the number of guesses allowed
			this.guessesAllowed--;
		}
	}

	this.log = function() {
		console.log("game.guessesAllowed: " + this.guessesAllowed);
		console.log("game.guessesSoFar: " + this.guessesSoFar);
		console.log("game.guesses: ", this.guesses);

		this.word.log();
	}
}

module.exports = game;
var g = new game(10);
g.log();
g.play();
g.log();