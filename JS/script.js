const arInputs = document.querySelectorAll(".input__field>input");
const board = [];
var filledField = 0;

/* CONSTRUINDO MATRIZ DO TABULEIRO */
function startGame(board, arInputs) {
  let i = 0;
  for(let lin=0; lin<3; lin++) {
    board[lin] = [];
    for(let col=0; col<3; col++) {
      board[lin][col] = 0;

      arInputs[i].value = '';
      i++;
    }
  }
  filledField = 0;

  arInputs.forEach(item => {
    item.disabled = false;
  })
}

/* INSERINDO JOGADAS */
arInputs.forEach(item => {
  item.addEventListener("click", () => {

    if(item.value == 0) {
      item.value = turnUpdate();
      changeTurn();
      turnUpdate();

      (playersTurn) 
      ? item.style.color = "#D71414"
      : item.style.color = "#E4A501";

      filledField++;
    }

    arrayUpdate();
    if(!winnerResult()) {
      drawResult();
    }
  });
});

/* ATUALIZANDO MATRIZ DO TABULEIRO */
function arrayUpdate() {
  let i = 0;
  for(let lin=0; lin<3; lin++)
    for(let col=0; col<3; col++) {
      // Inserindo valores dos inputs (HTML) p/ a matriz (JS)
      if(arInputs[i].value == "X")
        board[lin][col] = 1;
      else if(arInputs[i].value == "O")
        board[lin][col] = -1;

        i++;
    }
}

/* PLACAR */
const scoreX = document.querySelector(".score__x");
const scoreO = document.querySelector(".score__o");
const scoreTie = document.querySelector(".score__ties");

var scoreValueX = 0;
var scoreValueO = 0;
var scoreValueTie = 0;

scoreX.innerHTML = scoreValueX;
scoreO.innerHTML = scoreValueO;
scoreTie.innerHTML = scoreValueTie;

/* REINICIAR  JOGO */
const restart = document.querySelector(".icon__restart");
const modalClosed = document.querySelector(".close__modal");

restart.addEventListener("click", () => {
  openModal();

  modalClosed.addEventListener("click", () => {
    closeModal();
  });

  btnStartGame.addEventListener("click", () => {
    scoreValueX = 0;
    scoreValueO = 0;
    scoreValueTie = 0;
    
    scoreX.innerHTML = scoreValueX;
    scoreO.innerHTML = scoreValueO;
    scoreTie.innerHTML = scoreValueTie;  
  });
});

function resetBoard() {
  arInputs.forEach(item => {
    item.disabled = true; // Desativa o input do campo do tabuleiro
  });
  setTimeout(startGame, 1000, board, arInputs);
}