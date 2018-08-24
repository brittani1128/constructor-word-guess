var Word = require("./word.js")
var inquirer = require("inquirer");



var wordOptions = ["United States", "Canada", "Mexico", "Argentina","England","Germany","Greece","Thailand","China","Australia","South Africa"];

var newWord;
function randomWord(){
    var index = Math.floor(Math.random() * wordOptions.length);
    var chosenWord = wordOptions[index];
    newWord = new Word(chosenWord);
    console.log(newWord.currentWord);
}

randomWord();

function guessLetter(){
    newWord.display();

    inquirer.prompt([{
        type:"input",
        name:"letter",
        message:"\nGuess a letter!"
    }]).then(function(response){
        
        //loop through newWord array of letter objects, check if letter guessed equal to letter in array, print letter or blank
        for (var i = 0; i < newWord.letters.length;i++){
            newWord.letters[i].check(response.letter);
            var correct = newWord.letters[i].guessCorrect;
            newWord.letters[i].letterGuessed();
        
        }
        // if (correct === true){
        //     console.log("Correct!");
        // } else {
        //     console.log("\nNope, try again!\n");
        // }
        guessLetter();
    });

}

guessLetter();