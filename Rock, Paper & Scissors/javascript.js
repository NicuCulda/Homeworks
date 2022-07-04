console.log(---Rock, Paper & Scissors---);

function userChoice() {
    let random = ["rock", "paper", "scissors"];
    return random[Math.floor(Math.random() * 3)];
}
function computerChoice() {
    let random = ["rock", "paper", "scissors"];
    return random[Math.floor(Math.floor() * 3)];
}

function playRound(userChoice, computerChoice){
    if (userChoice === "rock") {
        if (computerChoice === "rock") {
            return "Draw!";
        } else if (computerChoice === "paper") {
            return "Computer Wins!";
        } else {
            return "User wins!";
        }
    } else if (userChoice === "paper") {
        if (computerChoice === "rock") {
            return "User wins!";
        } else if (computerChoice === "paper") {
            return "Draw!";
        } else {
            return "Computer wins!";
        }
    } else  {
        if (computerChoice === "rock") {
            return "Computer wins!"
        } else if (computerChoice === "paper") {
            return "User wins!";
        } else {
            return "Draw!"; 
        }
    }
}


var userChoice = userChoice();
var computerChoice = computerChoice();
var result = playRound(userChoice, computerChoice)
console.log("user's choice", userChoice);
console.log("computer's choice", computerChoice);
console.log("result is", result);