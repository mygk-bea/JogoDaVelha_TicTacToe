/* TURNO DO JOGADOR */
const turn = document.querySelector(".player__turn");

var playersTurn;
function changeTurn() {
  playersTurn = !playersTurn;
}

function turnUpdate() {
  let player;

  if(playersTurn){
    player ="X";
    turn.style.color = "#E4A501";
  } else {
    player ="O";
    turn.style.color = "#D71414";
  }

  turn.innerHTML = `<span>VEZ DO</span> ${player}`;
  return player;
}