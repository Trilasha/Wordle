let userScore=0;
let computerScore=0;
const userScore_span=document.getElementById("user-score");
const computerScore_span=document.getElementById("computer-score");
const scoreBoard_div=document.querySelector(".score-board");
const result_p=document.querySelector(".result > p");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissors_div=document.getElementById("s");


function getComputerChoice() {
    const choices =['r', 'p', 's'];
    const randomNumber=Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function convertToWord(letter){
    if (letter == "r") return "Rock";
    if (letter == "p") return "Paper";
    return "Scissors";
}



function win(userChoice,computerChoice)
{
    userScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    result_p.innerHTML=`${convertToWord(userChoice)}(user) beats ${convertToWord(computerChoice)}(comp)...You won:) `;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function() {document.getElementById(userChoice).classList.remove('green-glow')}, 500);
}


function lose(userChoice, computerChoice){
    computerScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    result_p.innerHTML=`${convertToWord(computerChoice)}(comp) beats ${convertToWord(userChoice)}(user)...You lost:( `;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function() {document.getElementById(userChoice).classList.remove('red-glow')}, 500);
}

function draw(userChoice, computerChoice){
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    result_p.innerHTML=` Both chose ${convertToWord(userChoice)}...It's a DRAW ;) `;
    document.getElementById(userChoice).classList.add('yellow-glow');
    setTimeout(function() {document.getElementById(userChoice).classList.remove('yellow-glow')}, 500);
}


function game(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice,computerChoice);
            console.log("USER WINS.");
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice,computerChoice);
            console.log("USER LOSES. ");
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice,computerChoice);
            console.log("Its a DRAW. ");
            break;

    }
}


function main(){
    rock_div.addEventListener('click', function(){
    game("r");
    })

    paper_div.addEventListener('click', function(){
    game("p");
    })

    scissors_div.addEventListener('click', function(){
    game("s");
    })
}

main();