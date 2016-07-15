/******
/* Should contain all of the methods which will check 
/* the letters guessed versus the random word selected.
/*/

//Start of Letter object code

function letter(actualLetter) {

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