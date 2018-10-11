var Word = require("./Word.js");
var inquirer = require("inquirer");

var randWordList = ["router", "pencil", "computer", "love", "genius",
    "democrat", "republican", "trump", "obama", "macbook",
    "couch", "barbell", "dancer", "weights", "random", "snuffleupagus",
    "raining", "sunny", "philidelphia", "washington"];
var randWord = randWordList[Math.floor(Math.random() * randWordList.length)];
var word = new Word(randWord);
var numGuesses = 10;

function init() {
    if (numGuesses > 0) {
        inquirer
            .prompt({
                name: "letter",
                type: "input",
                message: "What letter would you like to guess?\n" + word.getString() + "\n"
            })
            .then(function (answer) {
                answer.letter = answer.letter.toLowerCase();
                if (!isNaN(answer.letter)) {
                    console.log("Not a letter!");
                    init();
                } else if (answer.letter.length > 1) {
                    console.log("One letter inputs only!");
                    init();
                } else if (word.getString() !== randWord) {
                    word.checkLetters(answer.letter);
                    --numGuesses;
                    console.log("You have " + numGuesses + " guesses left.\n");
                    init();
                } else {
                    console.log("The word is " + randWord + ". You win!");
                    return;
                }
            })
    } else {
        console.log("The word is " + randWord + ". You lose :(")
    }

}

init();

