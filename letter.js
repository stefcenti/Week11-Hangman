/****Control whether or not a letter appears as a "_" 
/* or as itself on-screen.
*/

var rw = require('./game.js');

function letter() {
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

w = new letter();