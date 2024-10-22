var pTag = document.getElementById("wonToss");
var player = document.getElementById("Won");
var Dise1 = document.getElementById("dice1");
var Dise2 = document.getElementById("dice2");
var roll1 = document.getElementById("roll1");
var roll2 = document.getElementById("roll2");
var btnP1toss = document.getElementById("Tvalue1");
var btnP2toss = document.getElementById("Tvalue2");
var Toss = document.getElementById("Toss");
var pl = document.getElementById("pl");
var anoterP_Div = document.getElementById("before");
var anoterP = document.getElementById("anotherP");
var anoterP1 = document.getElementById("anotherP1");
var mainDiv = document.getElementById("main");
var result1 = document.getElementById("result1");
var result2 = document.getElementById("result2");
var playAgain = document.getElementById("playAg");

// input head and tail for player 1
var player1;
var player2;
player1 = prompt("choose the value : Head / Tail");
while (player1.toLowerCase() !== "head" && player1.toLowerCase() !== "tail") {
  player1 = prompt("Invalid choice! choose the value : Head / Tail");
}

//  inner Text to show who choose H/T
if (player1.toLowerCase() == "head") {
  btnP1toss.innerText = "Head";
  btnP2toss.innerText = "Tail";
  player2 = "tail";
}
if (player1.toLowerCase() == "tail") {
  btnP1toss.innerText = "Tail";
  btnP2toss.innerText = "Head";
  player2 = "head";
}
//  random no generator
function randomNum(num) {
  var rand = Math.floor(Math.random() * num);
  return rand;
}
// toss function
var turn;
function toss() {
  var ran = randomNum(2);
  mainDiv.setAttribute("id", "main1");
  // 0==head
  if (ran == 0) {
    Toss.innerText = "Head";
    if (player1 === "head") {
      pl.innerText = "Player 1's turn";
      turn = "Player 1";
    }
    if (player2 === "head") {
      pl.innerText = "Player 2's turn";
      turn = "Player 2";
    }
  }
  // 1==tail
  if (ran == 1) {
    Toss.innerText = "Tail";
    if (player1 === "tail") {
      pl.innerText = "Player 1's turn";
      turn = "Player 1";
    }
    if (player2 === "tail") {
      pl.innerText = "Player 2's turn";
      turn = "Player 2";
    }
  }
  Toss.setAttribute("disabled", "true");
}
var count = 0;
var done = true;
function rollDice(num) {
  var getDice = randomNum(6) + 1;
  if (num == 1) {
    Dise1.innerText = getDice;
    Dise1.setAttribute("id", "dice12");
    if (done == false) {
      roll1.setAttribute("disabled", "true");
    }
  }
  if (num == 2) {
    Dise2.innerText = getDice;
    Dise2.setAttribute("id", "dice23");
    if (done == true) {
      anoterP.setAttribute("id", "anotherP2");
    }
    if (done == false) {
      roll2.setAttribute("disabled", "true");
    }
  }
  if (Dise1.innerText == 6 && Dise2.innerText == 6) {
    alert("Congratulations! " + turn + " won");
  }
  if (count == 1) {
    result1.innerText = turn + " you lose";
    if (Dise1.innerText == 6 && Dise2.innerText == 6) {
      result1.innerText = turn + " you win";
    }
  }
  if (count == 3) {
    result2.innerText = turn + " you lose";
    if (Dise1.innerText == 6 && Dise2.innerText == 6) {
      result2.innerText = turn + " you win";
    }
    playAgain.setAttribute("id", "playAg1");
  }
  count++;
}
function anotherP() {
  anoterP_Div.setAttribute("id", "after");
  if (pl.innerText == "Player 1's turn") {
    anoterP1.innerText = "Player 2's turn";
    turn = "Player 2";
  }
  if (pl.innerText == "Player 2's turn") {
    anoterP1.innerText = "Player 1's turn";
    turn = "Player 1";
  }
  anoterP.setAttribute("id", "anotherP");
  anoterP1.setAttribute("id", "anotherP3");
  done = false;
}

// toss: which player will play after toss
// function toss(){

// }

// function toss(){
//   return Math.floor(Math.random()*2);
//   }

// toss--------------------------------------------------------->

// if(tossValue==0 ){ // head
//   if(player1==="head"){
//     pl2.setAttribute("disabled", "true");
//     pTag.innerText="player 1 won the toss ";
//     p="player 1"}
//   if(player2==="head"){
//     pl1.setAttribute("disabled", "true");
//     pTag.innerText="player 2 won the toss ";
//     p="player 2"}
//   }

//  if(tossValue==1){ // tail
//   if(player1==="tail"){
//     pl2.setAttribute("disabled", "true");
//     pTag.innerText="player 1 won the toss ";
//     p="player 1"}
//   if(player2==="tail"){
//     pl1.setAttribute("disabled", "true");
//     pTag.innerText="player 2 won the toss ";
//     p="player 2"}
//   }

//  if(player1=="head"){
//   btnP1toss.innerText="Head";
//   btnP2toss.innerText="Tail";
//  }else{
//   btnP1toss.innerText="Tail";
//   btnP2toss.innerText="Head";

//  }
// functions---------------------------------------------------->

// function getDiceNumber(getvalue){
//     value=Math.floor(Math.random()*7);
//      if(getvalue==1){
//          Dise1.innerText=value;
//         }
//         if(getvalue==2){
//           Dise2.innerText=value;
//         }
//         if(Dise1.innerText==6 && Dise2.innerText==6){
//           player.innerText=p+" won the game!"
//         }
//   }
