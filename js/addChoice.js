import checkScore from "./checkScore.js";

const gameInfo = document.querySelector("#game-info");
let chance = "circle";
gameInfo.textContent = "Circle chance first";

/* Add Choices on the Board */
function addChoice(e) {
    if (e.target.children.length === 0 && e.target.classList[0] !== 'circle' && e.target.classList[0] !== 'cross') {
        const goDisplay = document.createElement('div');
        goDisplay.classList.add(chance);
        e.target.append(goDisplay);
        chance = chance === "circle" ? "cross" : "circle";
        gameInfo.textContent = "It's " + chance + "'s chance.";
        checkScore();
    }
}
export default addChoice;