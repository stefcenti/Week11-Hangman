/******
/* Letter.js controls whether or not a letter appears as a 
/* "_" or as itself on-screen.
/*/

//Start of Letter object code

function letter(actualLetter) {
	//atributes
	this.letter = actualLetter;
	this.charDisplayed = " _ "; // blank until correct

	//methods
	// If the character entered is equal to this letter then
	// set the character displayed equal to the letter and
	// return true.  Otherwise, leave the charDisplayed blank.
	this.isEqual = function(charGuessed){
		console.log("letter.isEqual()");

		if (charGuessed === this.letter) {
			this.charDisplayed = this.letter;
			return true;
		}

		return false;
	}

	this.display = function() {
		console.log(this.charDisplayed);
	}

	this.log = function() {
		console.log(this.charDisplayed + ", " +
					this.letter);
	}
}

module.exports = letter;
//var l = new letter('W');
//l.log();