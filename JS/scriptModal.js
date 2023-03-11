const modal = document.querySelector(".modal");
const btnStartGame = document.querySelector("#btnStart");
const selectedCharacter = document.getElementsByName("plCharacter");

btnStartGame.addEventListener("click", () => {
  for(let i=0; i<selectedCharacter.length; i++)
    if(selectedCharacter[i].checked) {
      closeModal();
      startGame(board, arInputs);

      (selectedCharacter[0].checked) ? playersTurn = true : playersTurn = false;
      turnUpdate();
    }
});

function openModal() {
  modal.style.display = "flex";
}

function closeModal() {
  modal.style.display = "none";
}

// FAZER FUNCAO DE FECHAR MODAL QUANDO NAO FOR USAR ***************