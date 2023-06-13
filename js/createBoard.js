import addChoice from "./addChoice.js";

/*Creating Board Elements*/
function createBoard(gameBoard) {
        const cellElements = document.querySelectorAll('.board-square')
        cellElements.forEach( cell =>
            cell.addEventListener('click', addChoice
            ))

    return gameBoard;
    }

export default createBoard;