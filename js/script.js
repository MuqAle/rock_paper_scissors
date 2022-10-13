function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    let rockPaperScissor = ['SCISSOR', 'PAPER', 'ROCK'];
    let computerChoice =rockPaperScissor[randomNumber]
    return computerChoice
}


function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toUpperCase()

    if (playerSelection == 'ROCK' && computerSelection == 'SCISSOR' ) {
        return 'You Win! Rock Beats Scissor';
    }
    else if (playerSelection == 'PAPER' && computerSelection == 'ROCK') {
        return 'You Win! Paper Beats Rock';
    }
    else if (playerSelection == 'SCISSOR' && computerSelection == 'PAPER') {
        return 'You Win! Scissor Beats Paper';
    }
    else if (playerSelection == 'SCISSOR' && computerSelection == 'ROCK'){
        return 'You Lose! Rock Beats Scissor';
    }
    else if (playerSelection == 'PAPER' && computerSelection == 'SCISSOR'){
        return 'You Lose! Scissor Beats Paper';
    }
    else if (playerSelection == 'ROCK' && computerSelection == 'PAPER'){
        return 'You Lose! Paper Beats Rock';
    }
    else {return 'Its a Tie!'}
}

 function game(){
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Rock, Paper, Scissor Say Shoo!')
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection))
     }
 }


game()



