
const rock = 1;
const paper = 2;
const scissor = 3;

let humanScore = 0;
let botScore = 0;
let humanChoice = 0;
let botChoice = 0;
let endGame = 0;

const docHS = document.querySelector("#hs");
const docRS = document.querySelector("#rs");
const middleText = document.querySelector(".middle");
const rockButton = document.querySelector("#rockbtn");
const paperButton = document.querySelector("#paperbtn");
const scissorButton = document.querySelector("#scissorbtn");
const humanSide = document.querySelector("#humanAttack");
const compSide = document.querySelector("#robotAttack");

middleText.textContent = "";
docHS.textContent = "Your Score: " + humanScore;
docRS.textContent = "Comp Score: " + botScore;

if(endGame == 0){
    rockButton.addEventListener("click", () => {
        humanChoice = rock;
        buttonF("./pics/assets2/rock.png",humanSide);
        attack(humanChoice);
        endG();
    });
    paperButton.addEventListener("click", () => {
        humanChoice = paper;
        buttonF("./pics/assets2/paper.png",humanSide);
        attack(humanChoice);
        endG();
    });
    scissorButton.addEventListener("click", () => {
        humanChoice = scissor;
        buttonF("./pics/assets2/scissor.png",humanSide);
        attack(humanChoice);
        endG();
    });
}


// }

function buttonF(link,appendTo){
    
        if(appendTo.hasChildNodes()){
            appendTo.removeChild(appendTo.firstChild);
        }

        let content = document.createElement("img");
        content.setAttribute("src",link);
        content.setAttribute("width","70px");
        content.setAttribute("height","70px");
        appendTo.appendChild(content);
        console.log("Hello");
    
    
}


function endG(){
    if(humanScore == 5 || botScore == 5){

        if(humanScore == 5){
            middleText.textContent = "YOU WON THE GAME!"
            middleText.setAttribute("style","color:antiquewhite; font-weight:800;")
        }
        
        else if(botScore == 5){
            middleText.textContent = "COMP WON THE GAME!"
            middleText.setAttribute("style","color:antiquewhite; font-weight:800;")
        }

        document.getElementById("rockbtn").disabled = true;
        document.getElementById("paperbtn").disabled = true;
        document.getElementById("scissorbtn").disabled = true;

        
    }
    
}



function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}


function humanWon() {

    
    middleText.textContent = "You Won that round!"
    middleText.setAttribute("style","color:antiquewhite; font-weight:800;")
    humanScore++;
    docHS.textContent = "Your Score: " + humanScore;


}

function botWon() {
    middleText.textContent = "Computer Won that round!"
    middleText.setAttribute("style","color:antiquewhite; font-weight:800;")
    botScore++;
    docRS.textContent = "Comp Score: " + botScore;
}

function attack(humanChoice) {

    botChoice = randomIntFromInterval(1, 3);

    if(botChoice == rock){
        buttonF("./pics/assets3/rock.png",compSide);
    }

    else if(botChoice == paper){
        buttonF("./pics/assets3/paper.png",compSide);

    }

    else if(botChoice == scissor){
        buttonF("./pics/assets3/scissors.png",compSide);

    }



    if (botChoice == humanChoice) {
        middleText.setAttribute("style","color:antiquewhite; font-weight:800;")
        middleText.textContent = "draw";
    }

    if ((humanChoice == rock && botChoice == scissor) || (humanChoice == scissor && botChoice == paper) || (humanChoice == paper && botChoice == rock)) {
        humanWon();
    }

    else if ((botChoice == rock && humanChoice == scissor) || (botChoice == scissor && humanChoice == paper) || (botChoice == paper && humanChoice == rock)) {
        botWon()
    }

}

