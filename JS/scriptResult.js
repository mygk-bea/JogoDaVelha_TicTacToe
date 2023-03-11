function checkWinnerResult(x, y){
  if(x == 3 || y == 3) {
    resetBoard();
    scoreValueX++;
    scoreX.innerHTML = scoreValueX;
    return true;
  } else if(x == -3 || y == -3) {
    resetBoard();
    scoreValueO++;
    scoreO.innerHTML = scoreValueO;
    return true;
  }
}

function winnerResult() {
  let lineSum, columnSum, mainDiag, secondDiag;
  let checkLimitScore = false;

  for(let i=0; i<3; i++) {
    lineSum    = board[i][0] + board[i][1] + board[i][2];
    columnSum  = board[0][i] + board[1][i] + board[2][i];

    if(checkWinnerResult(lineSum, columnSum)) {
      checkLimitScore = true;
      return true;
    }
  }

  if(!checkLimitScore) {
    mainDiag   = board[0][0] + board[1][1] + board[2][2];
    secondDiag = board[0][2] + board[1][1] + board[2][0];

    if(checkWinnerResult(mainDiag, secondDiag)) {
      return true;
    }
  }
}

function drawResult() {
  if(filledField >= 9) {
    resetBoard();
    scoreValueTie++;
    scoreTie.innerHTML = scoreValueTie;
  }
}