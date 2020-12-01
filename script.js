let items = ["Rock", "Paper", "Scissors"];
function computerPlay() {
  return items[Math.floor(Math.random() * items.length)];
}



function game() {

  for (let i = 1; i <= 5; i++) {

    function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `${playerSelection} and ${computerSelection} are same its a tie!`
  }

  else if (playerSelection === "Rock" && computerSelection === "Paper") {
    return `You lose! ${computerSelection} beats ${playerSelection}`
  }

  else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    return `You won! ${playerSelection} beats ${computerSelection}`
  }

  else if (playerSelection === "Paper" && computerSelection === "Rock") {
    return `You won! ${playerSelection} covers ${computerSelection}`
  }

  else if (playerSelection === "Paper" && computerSelection === "Scissors") {
    return `You lose! ${computerSelection} cuts ${playerSelection}`
  }

  else if (playerSelection === "Scissors" && computerSelection === "Rock") {
    return `You lose! ${computerSelection} can't cut ${playerSelection}`
  }

  else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    return `You won! ${playerSelection} cuts ${computerSelection}`
  }
}
console.log(`${i} Round`)
  const playerSelection = window.prompt("Enter Rock or Paper or Scissors");
  const computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));
  }  
}

game(); 


