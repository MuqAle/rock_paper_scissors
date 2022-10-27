const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorBtn = document.querySelector(".scissor");
const results = document.querySelector('.results');
const buttons = document.querySelectorAll('button');
const score = document.querySelector('.score');
const playAgain = document.querySelector('.play-again');
const playAgainBtn = document.createElement("button")
const image = document.createElement('img');
image.style.height = '350px';
image.style.width ='550px';
image.style.objectFit = 'cover';

const outcome = document.querySelector('.outcome');
playAgainBtn.textContent = 'Play Again!';


let playerSelection;
let playerScore = 0;
let computerScore = 0;


function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    let rockPaperScissor = ['SCISSOR', 'PAPER', 'ROCK'];
    let computerChoice = rockPaperScissor[randomNumber];
    return computerChoice;
};

rockBtn.addEventListener('click', () => {
    game('rock');
});

paperBtn.addEventListener('click', () => {
    game('paper');
});

scissorBtn.addEventListener('click', () =>{
    game('scissor');
});



function playRound(playerSelection, computerSelection){
      
    playerSelection = playerSelection.toUpperCase()
    

    if (playerSelection == 'ROCK' && computerSelection == 'SCISSOR' ) {
        playerScore += 1;
        results.textContent = 'You win! Rock beats scissors!';
        image.src = 'imgs/rock_vs_scissor.svg';

    }
    else if (playerSelection == 'PAPER' && computerSelection == 'ROCK') {
        playerScore +=1;
        results.textContent = 'You win! Paper beats rock!';
        image.src = 'imgs/paper_vs_rock.svg';
    }
    else if (playerSelection == 'SCISSOR' && computerSelection == 'PAPER') {
        playerScore +=1;
        results.textContent = 'You win! Scissor beats paper';
        image.src = 'imgs/scissor_vs_paper.svg';
    }
    else if (playerSelection == 'SCISSOR' && computerSelection == 'ROCK'){
        computerScore += 1;
        results.textContent = 'You lose! Rock beats scissor';
        image.src = 'imgs/scissor_vs_rock.svg';
    }
    else if (playerSelection == 'PAPER' && computerSelection == 'SCISSOR'){
        computerScore += 1;
        results.textContent = 'You lose! Scissor beats paper';
        image.src = 'imgs/paper_vs_scissor.svg';
    }
    else if (playerSelection == 'ROCK' && computerSelection == 'PAPER'){
        computerScore += 1;
        results.textContent = 'You lose! Paper beats rock';
        image.src ='imgs/rock_vs_paper.svg'
    }
    else {
        results.textContent = "It's a tie!";
        image.style.display = 'none'
    }
    outcome.append(image);
};

 function game(playerSelection){
        let computerChoice = getComputerChoice();
        playRound(playerSelection, computerChoice);
        score.textContent = `The score is Player:\n${playerScore} Computer: ${computerScore}`
        if (computerScore == 5){
            results.textContent = 'You lost to the computer! T____T'
            rockBtn.disabled = true;
            paperBtn.disabled = true;
            scissorBtn.disabled = true;
            playAgain.append(playAgainBtn);
        
            playAgainBtn.addEventListener('click', () =>{
                restart()
            });
        } else if(playerScore == 5){
            results.textContent = 'You won against the computer!!!'
            rockBtn.disabled = true;
            paperBtn.disabled = true;
            scissorBtn.disabled = true;
            playAgain.append(playAgainBtn);
        
            playAgainBtn.addEventListener('click', () =>{
                restart()
            });
        }
        else{}
      

    };

    function restart(){
        playerScore = 0;
        computerScore = 0;
        results.textContent = '';
        score.textContent = '';
        rockBtn.disabled = false;
        paperBtn.disabled = false;
        scissorBtn.disabled = false;
        playAgainBtn.remove();
        image.remove();

    };






