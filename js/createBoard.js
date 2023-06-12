import addChoice from "./addChoice.js";

const gameBoard = document.querySelector("#main-board");

const startCells = [
    "", "", "", "", "", "", "", "", "",
];
/*Creating Board Elements*/
function createBoard() {
    startCells.forEach((_cell, index) => {
        const cellElement = document.createElement('div');
        cellElement.classList.add('board-square');
        cellElement.setAttribute('id', index);
        cellElement.addEventListener('click', addChoice);
        gameBoard.append(cellElement);
    });
    }

export default createBoard;