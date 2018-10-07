function Letter(letter) {

    this._letter = letter; //private
    this._guessed = false; //private

    this.status = function () {
        if (this._guessed) {
            return this._letter;
        } else {
            return "_";
        }
    };
    this.checkGuess = function (c) {
        if (c === this._letter) {
            this._guessed = true;
        }
    };
};

module.exports = Letter;