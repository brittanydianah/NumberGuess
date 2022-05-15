let maximum = parseInt(prompt("Enter a maximum number"));
while(!maximum){
    maximum = parseInt(prompt("Enter a valid number"));
}

let luckyNum = Math.floor(Math.random() * maximum + 1)
    console.log(luckyNum);

let guess = prompt('Guess the random number (enter "q" to quit)')


while(guess !== luckyNum){
    if (guess == "q"){console.log("You quit!"); break}
    
    else{
       if (guess < luckyNum){
    guess = (prompt('Number too low. Guess again (enter "q" to quit)'))
    }
    else if (guess > luckyNum){
    guess = (prompt('Number too high. Guess again (enter "q" to quit)'))
    }
    else{
        guess = (prompt('Enter a valid number (enter "q" to quit)'))
    }
  }



}
if(guess == luckyNum){
    console.log("You Win!")
}

// if guess is too low, return "too low guess again." 
// if guess is too high, return "too high guess again"
// if guess is correct, stop prompt and console log "you win"

