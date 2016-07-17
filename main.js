/****
/* Contains the logic of your app. Running it in Terminal/Bash 
/* will start the game.  The app should end when a player 
/* guesses the correct word or runs out of guesses.
/*
Object: 
	main
Attributes:
	debug // flag to turn debug info on/off
	guessesAllowed // number of guesses allowed
	guessesSoFar // list of letter guesses taken for this game
	guesses // number of wrong guesses made (only wrong answers incur a penalty)
	word 	// word object to handle guesses and updates of the
			// word to be displayed
Methods:
	main(guessesAllowed, debug = true) 	// Constructor to init attributes. 
			// Set current Word to a random word
			// in the word list
	play() 	// Play the game until the player uses up the number of 
			// guesses allowed
	log() 	// Print the current values of the attributes
*/

var inquirer = require('inquirer');
var game = require('./game.js');

function main(guessesAllowed, debug=true) {
	if (debug) { console.log("main()"); }

	//attributes
	this.debug = debug;
	this.guessesAllowed = guessesAllowed;
	this.guesses = 0;
	this.guessesSoFar = "";
	this.correctCount = 0;

	this.game = new game(this.guessesAllowed, this.debug);
	this.word = this.game.getWord(); 

	//methods
	console.log("\nWELCOME TO SUPERHERO HANGMAN!!");
	this.word.display();
	console.log("");

	this.play = function() {
		if (this.debug) { console.log("main.play()") };
        //RUNS INQUIRER AND ASKS THE USER TO ENTER A LETTER.
        //THE VARIABLE input WILL BE ACCESSED INSIDE OF THE .then STATEMENT.
        var self = this;

        inquirer.prompt([{
        type: 'input',
        message: 'ENTER A LETTER:',
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
			console.log(self.guessesSoFar + "\n");

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

           		console.log("You Won!\n");
           	}
           	else if (self.guesses < self.guessesAllowed){
           		self.play();
           	}
           	else {
           		if (self.debug) { self.log() };

           		console.log("You Lost!\n");
           	}
         
        });
    }

	this.log = function() {
		console.log("main.guessesAllowed: " + this.guessesAllowed);
		console.log("main.guessesSoFar: " + this.guessesSoFar);
		console.log("main.guesses: ", this.guesses);
		console.log("main.correctCount: ", this.correctCount);
		console.log("main.length: ", this.word.length);

		this.game.log();
		this.word.log();
	}
}

var m = new main(10, false);

m.play();