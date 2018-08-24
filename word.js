var Letter = require("./letter.js");
// var displayArr;

function Word(currentWord){
    // this.displayArr = displayArr;
    this.currentWord = currentWord;
    this.letters = [];

    this.generateLetters = function(){
        var currentWordArr = this.currentWord.split('');
        for (var i = 0; i < currentWordArr.length; i++){
            var newLetter = new Letter(currentWordArr[i]);
            this.letters.push(newLetter);
        }
    }
    this.display = function(){
        displayArr = [];
        for (var i =0; i < this.letters.length; i++){
            var result = this.letters[i].letterGuessed();
            displayArr.push(result);

        }
        console.log(displayArr);
    }

    this.guess = function(character){
        for (var i = 0; i < this.letters.length;i++){
            this.letters[i].check(character);
            
        }
    }
    this.generateLetters();
    
}

// var newWord = new Word("test");
// newWord.guess('e');
// newWord.guess('t');
// newWord.guess('a');
// newWord.display();

module.exports = Word;