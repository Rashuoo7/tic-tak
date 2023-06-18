// query utilities:
import {
    getByLabelText,
    getByText,
    getByTestId,
    queryByTestId,
    waitFor,
} from '@testing-library/dom'
import setGameInfo from "../js/setGameInfo";
import Game from "../js/Game";


test('test board', async () => {
    let game = new Game();
    let board = game.makeBoard();
    expect(board.classList.contains('main-board'));
    expect(board.children.item(1) .classList.contains('board-square')).toBeTruthy();
    expect(board.childElementCount).toBe(9);

})