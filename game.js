/******
/* Randomly selects a word for the player
/*/
/*
Object: 
	game
Attributes:
	debug // flag to turn debug info on/off
	wordList // list of words to choose from 

Methods:
	game(guessesAllowed, debug = true) 	// Constructor to init attributes. 
				// Initialize the list of words to choose from
	getWord() 	// Using a random word from wordlist, return a word object
	log() 		// Print the current values of the attributes	
*/

var word = require('./word.js');

function game(guessesAllowed, debug=true) {
	if (debug) { console.log("game()"); }

	//attributes
	this.debug = debug;

	this.wordlist = ["SUPERMAN", "SPIDERMAN", "GREEN ARROW", "CAT WOMAN",
			"AQUAMAN", "WONDER WOMAN", "THE XMEN", "JUSTICE LEAGUE",
			"ANTMAN", "BATMAN", "ROBIN", "DARK KNIGHT", "DEADPOOL",
			"CAPTAIN AMERICA", "IRONMAN", "GREEN LANTERN", "CLARK KENT",
			"BRUCE WAYNE", "BARRY ALLEN", "DIANA", "OLIVER QUEEN",
			"ARROW", "THE FLASH", "HAL JORDAN", "MARVEL COMICS",
			"DC COMICS"];

	//methods
	this.getWord = function() { 
		var random = Math.floor((Math.random()*(this.wordlist.length-1)));

		if (this.debug) { console.log("this.getWord()"); }

		return new word(this.wordlist[random], this.debug); 
	}

	this.log = function() {
		console.log("random index: " + random);
		console.log(this.wordlist);
	}
}

module.exports = game;