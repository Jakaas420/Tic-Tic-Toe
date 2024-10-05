let btn = document.getElementsByClassName("btn");
let messege = document.getElementById("messege");
let curruntPlayer = "X";
let winner = false;
let winChance = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function checkBtn(el) {
  if (!winner && el.innerHTML == "") {
    curruntPlayer = curruntPlayer == "X" ? "O" : "X";
    el.innerHTML = curruntPlayer;
    console.log("hello");
  }
  if (checkWinner(curruntPlayer)) {
    winner = true;
    messege.innerHTML = `${curruntPlayer}  is Winner !!`;
  } else {
    if (checkDraw()) {
      messege.innerHTML = "Match Draw !!";
    }
  }
}

function checkWinner(curruntPlayer) {
  for (i = 0; i < winChance.length; i++) {
    let [a, b, c] = winChance[i];
    if (
      btn[a].innerHTML == curruntPlayer &&
      btn[b].innerHTML == curruntPlayer &&
      btn[c].innerHTML == curruntPlayer
    ) {
      return true;
    }
  }
  return false;
}

function checkDraw() {
  for (i = 0; i < btn.length; i++) {
    if (btn[i].innerHTML === "") {
      return false;
    }
  }
  return true;
}
function restartBtn() {
  messege.innerHTML = "Start New Game";
  for (i = 0; i < btn.length; i++) {
    btn[i].innerHTML = "";
  }
}
