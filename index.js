var Word = require("./Word.js");
var inquirer = require("inquirer");

var randWordList = ["router", "pencil","computer","love","genius","antidisestablishmentarianism",
    "democrat", "republican", "Trump", "Obama", "macbook",
    "couch","barbell","dancer","weights","random","snuffleupagus",
    "raining", "sunny", "Philidelphia", "Washington"];
var randWord = randWordList[Math.floor(Math.random() * randWordList.length)];
var word = new Word(randWord);

function init() {
    inquirer
        .prompt({
            name: "letter",
            type: "input",
            message: "What letter would you like to guess?\n" + word.getString() + "\n"
        })
        .then(function(answer) {
            word.checkLetters(answer.letter);
            console.log(word.getString());
            if (word.getString() === randWord) {
                console.log("The word is " + randWord + ". You win!");
            } else {
                init();
            }
        })
}

init();

