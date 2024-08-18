const boxes = document.querySelectorAll(".box");
// console.log(boxes)
const resultText = document.getElementById("result-text");
const btn = document.getElementById("new-game");
const resultContainer = document.querySelector(".result");
const newGamebtn = document.getElementById("new-game");

player0 = true;
let winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
const disableBoxes = () => {
  boxes.forEach((box) => {
    box.disabled = true;
  });
};
const enableBoxes = () => {
  boxes.forEach((box) => {
    box.disabled = false;
  });
};
const newGame = () => {
  player0 = true;
  enableBoxes();
  resultContainer.classList.add("hide");
  boxes.forEach((box) => {
    box.innerHTML = "";
  });
};

boxes.forEach((box) => {
  // console.log(box)

  box.addEventListener("click", () => {
    if (player0) {
      box.innerHTML = "O";
      player0 = false;
      box.disabled = true;
    } else {
      box.innerHTML = "X";
      player0 = true;
      box.disabled = true;
    }
    winner();
    //    disableBoxes();
  });
});

const winner = () => {
  for (let pattern of winPatterns) {
    pos1 = boxes[pattern[0]];
    pos2 = boxes[pattern[1]];
    pos3 = boxes[pattern[2]];
    // console.log(pos1.innerHTML,pos2,pos3)

    if (pos1.innerHTML != "" && pos2.innerHTML != "" && pos3.innerHTML != "") {
      if (
        pos1.innerHTML === pos2.innerHTML &&
        pos2.innerHTML === pos3.innerHTML
      ) {
        resultText.innerHTML = `Player ${pos1.innerHTML} wins`;
        resultContainer.classList.remove("hide");
        pos1.setAttribute("class", "new");
        pos2.setAttribute("class", "new");
        pos3.setAttribute("class", "new");
        // console.log(pos1)
        disableBoxes();
      }
    }
  }
};

newGamebtn.addEventListener("click", () => {
  newGame();
});
