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
//debugOn = true;

var inquirer = require('inquirer');
var word = require('./word.js');

function game(guessesAllowed, debug=true) {
	if (debug) { console.log("game()"); }

	//attributes
	this.debug = debug;
	this.guessesAllowed = guessesAllowed;
	this.guesses = 0;
	this.guessesSoFar = "";
	this.correctCount = 0;

	this.wordlist = ["SUPERMAN", "SPIDERMAN", "GREEN ARROW", "CAT WOMAN",
			"AQUAMAN", "WONDER WOMAN", "THE XMEN", "JUSTICE LEAGUE",
			"ANTMAN", "BATMAN", "ROBIN", "DARK KNIGHT", "DEADPOOL",
			"CAPTAIN AMERICA", "IRONMAN", "GREEN LANTERN", "CLARK KENT",
			"BRUCE WAYNE", "BARRY ALLEN", "DIANA", "OLIVER QUEEN",
			"ARROW", "THE FLASH", "HAL JORDAN", "MARVEL COMICS",
			"DC COMICS"];

	var random = Math.floor((Math.random()*(this.wordlist.length-1)));

	this.word = new word(this.wordlist[random], this.debug); 

	//methods

	this.play = function() {
		if (this.debug) { console.log("game.play()") };
        //RUNS INQUIRER AND ASKS THE USER TO ENTER A LETTER.
        //THE VARIABLE input WILL BE ACCESSED INSIDE OF THE .then STATEMENT.
        var self = this;

        inquirer.prompt([{
        type: 'input',
        message: 'ENTER A LETTER!:',
        name: 'letter'
        }]).then(function(input) {
			if (self.debug) { console.log("Then Function From Prompt"); }

			var letter = input.letter.toUpperCase();

            // If the letter has already been guessed, prompt for
            // another letter and return.
			if (self.guessesSoFar.indexOf(letter) >= 0) {
				self.play();
 				return;
 			}

 			// The lettered entered is new so append it to the guesses
 			// made so far.
 			self.guessesSoFar += letter;
	
			var count = self.word.hasLetter(letter);

			self.word.display();

			// Do we have a match? If so, increase correct count
			// If not, increase the number of guesses taken
			if (count > 0) {
 				self.correctCount += count;
			}
			else {
				self.guesses++;
			}

			// Do we have all the correct letters in the word?
			// If so, we won! Otherwise, If we still have guesses
			// available, continue to play.
			// If we don't have any guesses available, we lost :(
         	if (self.correctCount == self.word.length)
           	{
           		if (self.debug) { self.log() };

           		console.log("You Won!");
           	}
           	else if (self.guesses < self.guessesAllowed){
           		self.play();
           	}
           	else {
           		if (self.debug) { self.log() };

           		console.log("You Lost!");
           	}
         
        });
    }

	this.log = function() {
		console.log("game.guessesAllowed: " + this.guessesAllowed);
		console.log("game.guessesSoFar: " + this.guessesSoFar);
		console.log("game.guesses: ", this.guesses);
		console.log("game.correctCount: ", this.correctCount);
		console.log("word.length: ", this.word.length);

		this.word.log();
	}
}

//module.exports = game;
var g = new game(10, false);
//g.log();
g.play();
//g.log();