
const controls = document.querySelector("#controls");
import resetBoard from "./resetBoard.js";

function resetButton() {

    const resetButton = document.createElement('div');
    resetButton.classList.add('reset-button');
    resetButton.addEventListener('click', resetBoard);
    resetButton.textContent = 'Reset Board';
    controls.append(resetButton);
}

export default resetButton;