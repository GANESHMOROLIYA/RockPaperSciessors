let userScore=0;
let comScore=0;

const choices=document.querySelectorAll(".choice");
const userScorePara = document.querySelector("#user-scor");
const compScorePara = document.querySelector("#computer-scor");
const msg=document.querySelector("#msg");

const resetBtn = document.querySelector("#reset-btn");


const genComputerChoice=()=>{
    //rock,paper,seasors
    let options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}
const drawGame = ()=>{
    console.log("Game was draw")
     msg.innerText = "Game was Draw. Play again.";
     msg.style.backgroundColor = "#102b09ff";
}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("you win");
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice} `;
        msg.style.backgroundColor = red;
    }else{
        comScore++;
       compScorePara.innerText=comScore;
        console.log("You lose");
        msg.innerText=`You lose. ${compChoice} beats your ${userChoice} `;
         msg.style.backgroundColor = "#550a2dff";
    }
}

const playGame=(userChoice)=>{
     //generate cumputer choice
     const compChoice=genComputerChoice();
     if(userChoice===compChoice){
        //Drow game
        drawGame();
     }else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"? false : true;
        }else if(userChoice=="paper"){
            userWin=compChoice==="scissors"?false:true;
        }else{
             userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
     }
}
choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})
resetBtn.addEventListener("click", () => {
    userScore = 0;
    comScore = 0;
    userScorePara.innerText = userScore;
    compScorePara.innerText = comScore;
    msg.innerText = "Play your move";
    msg.style.backgroundColor = "#081b31";
});