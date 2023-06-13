const gameInfo = document.querySelector("#game-info");

function checkScore() {
    const allSquares = document.querySelectorAll(".board-square");


    const winningPattern = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]
    ];

    /*Circle Wins Condition*/
    winningPattern.forEach(array => {
        const circleWins = array.every(cell =>
            allSquares[cell].firstChild?.classList.contains('circle'))


        if (circleWins) {
            gameInfo.textContent = "Circle Wins!";
            allSquares.forEach(square => square.replaceWith(square.cloneNode(true)))
            return 0
        }
    });


    /*Cross  Wins Condition*/
    winningPattern.forEach(array => {
        const crossWins = array.every(cell =>
            allSquares[cell].firstChild?.classList.contains('cross'))


        if (crossWins) {
            gameInfo.textContent = "Cross Wins!";
            allSquares.forEach(square => square.replaceWith(square.cloneNode(true)))
            return 0
        }
    });


    /*Tie Wins Condition*/
    const tie = Array.from(allSquares).every(cell => cell.children.length !== 0);
    if (tie) {
        gameInfo.textContent = "It is a Tie!";
        allSquares.forEach(square => square.replaceWith(square.cloneNode(true)))
        return 0
    }

}
export default checkScore;