/****
/* Contains the logic of your app. Running it in Terminal/Bash 
/* will start the game.  The app should end when a player 
/* guesses the correct word or runs out of guesses.

var game = require('./game.js');
var letter = require('./letter.js');
var word = require('./word.js');

/*/

/****
/* Objects: main, game, word, letter

Object: 
	main
Attributes:
	maxGames // total number of games to play
	numWins // total number wins
	prompt // use inquirer.js
Methods:
	welcomePrompt() // Welcome to hangman, show options:
					// New Game, Get Stats, Quit
	start()	// Called When New Game is selected, will create a
			// new game, initialize it, and play until win/loss
	getStats() // Display the current total wins/losses of all the games played.
	quit() // Display the final stats, leave the game.
/*/
/*
var inquirer = require('inquirer');
var game = require('./game.js');

function main(){

	console.log("WELCOME TO SUPERHERO HANGMAN!!");

	this.game = new game(10);

   	inquirer.prompt([{
	    type: 'input',
	    message: 'ENTER A LETTER:',
	    name: 'letter'
    }]).then(function(input) {
    	if (this.debug) { console.log("Then Function From Prompt") };

    	game.play();
    });	
}
*/