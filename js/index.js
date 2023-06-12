
const gameBoard = document.querySelector("#main-board");
const gameInfo = document.querySelector("#game-info");
const controls = document.querySelector("#controls");
const startCells = [
  "", "", "", "", "", "", "", "", "",
];

function createBoard() {
    startCells.forEach((_cell, index) => {
        const cellElement = document.createElement('div');
        cellElement.classList.add('board-square');
        cellElement.setAttribute('id', index);
        cellElement.addEventListener('click', addChoice);
        gameBoard.append(cellElement);
    })

    const resetButton = document.createElement('div');
    resetButton.classList.add('reset-button');
    resetButton.addEventListener('click', resetBoard);
    resetButton.textContent = 'Reset Board';
    controls.append(resetButton);
}


let chance = "circle";
gameInfo.textContent = "Circle chance first";


createBoard();


function addChoice(e) {
  if(e.target.children.length === 0 && e.target.classList[0] !== 'circle' && e.target.classList[0] !== 'cross'){
    const goDisplay = document.createElement('div');
    goDisplay.classList.add(chance);
    e.target.append(goDisplay);
    chance = chance === "circle" ? "cross" : "circle";
    gameInfo.textContent = "It's " + chance +"'s chance.";
    checkScore();
  }
}

function checkScore(){
  const allSquares = document.querySelectorAll(".board-square");
  const winningPattern = [
    [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]
  ];
  winningPattern.forEach(array => {
    const circleWins = array.every(cell =>
        allSquares[cell].firstChild?.classList.contains('circle'))


        if(circleWins) {
          gameInfo.textContent = "Circle Wins!";
          allSquares.forEach(square => square.replaceWith(square.cloneNode(true)))
          return
        }
  });

  winningPattern.forEach(array => {
    const crossWins = array.every(cell =>
        allSquares[cell].firstChild?.classList.contains('cross'))


        if(crossWins) {
          gameInfo.textContent = "Cross Wins!";
          allSquares.forEach(square => square.replaceWith(square.cloneNode(true)))
          return
        }
  });
  
 const tie = Array.from(allSquares).every(cell => cell.children.length !== 0);
 if(tie){
        gameInfo.textContent = "It is a Tie!";
          allSquares.forEach(square => square.replaceWith(square.cloneNode(true)))
          return
 }

}

function resetBoard(){

  location.reload();
}