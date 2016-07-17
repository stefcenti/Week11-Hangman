# Week-11-Hangman

Usage: node game.js

Dependencies: inquire, ./word.js

Notes: To run, use game.js for now.  Once complete, the prompt will be moved from main.js to game.js  Also, to turn debug on, set debug = true in the call to new game(<num guesses allowed>, <debug>) i.e. new game(10, true);

main.js:  Currently does nothing. Code is commented out.

game.js: Heart of the game right now.  Most of the functionality will be moved to main.js.  Creates a list of words to use and runs the hangman game.

word.js: Given a string, i.e. word, it will convert the string to an array of letters using the letter object. The word object is used to check if the word contains the letter entered by the user. It is also used to display the word with '_' where letters are yet to be guessed.

letter.js: Giving a character, it will set the current character to '_' and the actual character to the character passed in.  When isEqual() is called, if a match is found, the current character will be set equal to the actual character in the string.