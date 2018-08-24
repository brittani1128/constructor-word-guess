
function Letter(character){
    this.character = character;
    
    this.guessCorrect = false;

    this.letterGuessed = function(){
        //if guessCorrect true, returns character
        if (this.guessCorrect){
            return this.character;   
        }
        //if guessCorrect false, returns blank
        else {
            // console.log(this.character, "this is dash");
            return " _ ";
        }
    }
    //checks if letter user guesses is equal to current character of Letter object
    //sets guessCorrect to true if so
    this.check = function(guess){
        if (guess.toLowerCase() === this.character.toLowerCase()){
            this.guessCorrect = true;
   
        } 
        
    }
}

module.exports = Letter;

