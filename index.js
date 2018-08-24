//DEPENDENCIES =====================================

var Word = require("./word.js")
var inquirer = require("inquirer");
var chalk = require("chalk");


//VARIABLES ==========================================



var wordOptions = ["United States", "Canada", "Mexico", "Argentina","England","Germany","Greece","Thailand","China","Australia","South Africa"];

var newWord;
var randomWord;
// var displayArr = 
var guessesRemaining = 10;
// var guessesSoFar = 0;




//FUNCTIONS ===========================================

//Generates random word from array
function randomWord(){
    var index = Math.floor(Math.random() * wordOptions.length);
    randomWord = wordOptions[index];
    newWord = new Word(randomWord);
    // console.log(newWord.currentWord);
}


//Starts game to begin guessing
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
            // var correct = newWord.letters[i].guessCorrect;
            newWord.letters[i].letterGuessed();
        
        }
        if (randomWord.includes(response.letter)){
            console.log(chalk.bold("\nCorrect!"));
            console.log("Guesses remaining: " + guessesRemaining)

        } else {
            console.log(chalk.bold("\nNope, try again!\n"));
            guessesRemaining--;
            console.log("Guesses remaining: " + guessesRemaining);
        }
        if (guessesRemaining === 0){
            console.log("GAME OVER!");
            return;
            // randomWord();
            // playAgain();  
        }
        // if (!newWord.displayArr().includes(" _ ")){
        //     console.log("You win!");
        // }
        guessLetter();
        
    });

}

// function endGame(){
    
// }

// function playAgain(){
//     inquirer.prompt([{
//         type:"list",
//         name:"play",
//         message:"Do you want to play again?",
//         choices: ["YES", "NO"]
//     }]).then(function(response){
//         if (response.choices === "YES"){
//             randomWord();
//             guessLetter();
//         }
//         else {
//             console.log("Thanks for playing!")
//             return;
//         }
//     });
// };

console.log(chalk.magenta.bold("\nWORD GUESS GAME"));
console.log("You get 10 guesses");
console.log("Hint: countries\n");


randomWord();
guessLetter();
