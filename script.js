


let humanScore = 0;
let botScore = 0;
let humanChoice = 0;
let botChoice = 0;


alert("This is RPS game");
let bool = true;

while(bool == true){
botChoice = randomIntFromInterval(1,3);
humanChoice = prompt("This is RPS\n1.Rock\n2.Paper\n3.Scissor\n"+ "Human Score: " + humanScore + "\nBot Score: " + botScore +"\nBot Choice: " + botChoice);

if(botChoice == humanChoice){
    alert("draw!");
}

if((humanChoice == 1 && botChoice == 3) || (humanChoice == 2 && botChoice == 1) || (humanChoice == 3 && botChoice == 2)){
    humanWon();
}

else if((botChoice == 1 && humanChoice == 3) || (botChoice == 2 && humanChoice == 1) || (botChoice == 3 && humanChoice == 2)){
    botWon()
}
    

}





function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);}

function message(){

    
}

function humanWon(){
    alert("You Won!");
    humanScore++;
}

function botWon(){
    alert("Bot Won!");
    botScore++;
}