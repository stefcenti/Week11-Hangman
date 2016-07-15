exports.game = {
	wordlist: ["javascript", "nodejs", "mysql", "mongodb", 
		"webdesign", "coder"],

	getWord: function() { return this.wordlist[1]; }
}


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
				 // Returns true if found, otherwise
*/