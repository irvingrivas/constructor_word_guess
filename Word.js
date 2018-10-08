var Letter = require("./Letter.js");

function Word(str) {

    this._string = str;   // private
    this._letterArr = []; // private
    for (let i in this._string) {
        this._letterArr.push(new Letter(this._string.charAt(i)));
    }

    this.getString = function () {
        let tmp = "";
        for (let i in this._letterArr) {
            tmp += this._letterArr[i].status();
        } return tmp;
    };
    this.checkLetters = function (c) {
        for (let i in this._letterArr) {
            this._letterArr[i].checkLetter(c);
        }
    };
};

module.exports = Word;