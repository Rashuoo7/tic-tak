import checkScore from "./checkScore";
import setGameInfo from "./setGameInfo";

function Game() {
    let body = document.querySelector('body');
    let board = document.createElement('div');
    board.classList.add('main-board');
    this.chance = "circle";
    this.gameInfo = document.querySelector("#game-info");
    if(this.gameInfo !== null){this.gameInfo.textContent = "It's " + this.chance + "'s Chance."}
    const controls = document.querySelector("#controls");
    let self = this;

    Object.defineProperty(this, 'board', {
        get: function() {return board}
    })

    this.makeBoard = function (){
        body.prepend(board);
        console.log(this.chance)
        /* Creating 9 Boxes */
        for( let i = 0;i<9;i++){
            let cellElement = document.createElement('div');
            cellElement.classList.add('board-square');
            cellElement.addEventListener('click', this.addChoice)
            body.querySelector('.main-board').append(cellElement)
        }

        return body.querySelector('.main-board');
    }

    this.addChoice = function (e) {

        if (e.target.children.length === 0 && e.target.classList[0] !== 'circle' && e.target.classList[0] !== 'cross') {
            const goDisplay = document.createElement('div');
            goDisplay.classList.add(self.chance);
            e.target.append(goDisplay);
            self.chance = self.chance === "circle" ? "cross" : "circle";
            setGameInfo("It's " + self.chance + "'s chance.")
            checkScore();
        }
    }

    this.addResetButton = function(){
        const resetButton = document.createElement('div');
        resetButton.classList.add('reset-button');
        resetButton.addEventListener('click', this.resetBoard);
        resetButton.textContent = 'Reset Board';
        controls.append(resetButton);
    }

    this.resetBoard = function () {
        location.reload();
    }

}
export default Game;