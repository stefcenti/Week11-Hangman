/******
/* Should contain all of the methods which will check 
/* the letters guessed versus the random word selected.
/*/
/*
var rw = require('./game.js');

function word() {
//	var randWord = new randomWord();
//	var randWord = "This is a test";
	console.log(rw);
	var randWord = rw.game.getWord();
	var guessword = new Array(randWord.length);

	for (var i = 0; i < randWord.length; i++){
		guessword[i] = '_';
	}

	console.log(randWord);
	console.log(guessword);
}

w = new word();
*/


//Start of Letter object code

function letter (actualLetter) {

	this.isDisplayed = false;
	this.blank = "_";
	this.letter = actualLetter;

	this.log = function() {
		console.log(this.blank + ", " +
					this.letter);
	}

	this.display = function() {
		console.log(this.isDisplayed ? this.letter : this.blank);
	}
}

module.exports = letter;
//var l = new letter('W');
//l.log();