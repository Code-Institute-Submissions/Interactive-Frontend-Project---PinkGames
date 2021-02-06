//All required elements
const select = document.querySelector(".select"),
    selectXBtn = select.querySelector(".playerX"),
    selectOBtn = select.querySelector(".playerO");
gameBoard = document.querySelector(".game-board");
allBox = document.querySelectorAll("section span");
players = document.querySelector(".players");

//When window is loaded
window.onload = () => {
    //Onclick attribute on all the squares on the game board (spans)
    for (let i = 0; i < allBox.length; i++) {
        allBox[i].setAttribute("onclick", "clickedBox(this)");
    }

    selectXBtn.onclick = () => {
        //Hide the selected box if playerX button is clicked
        select.classList.add("hide");
        //Will shoe the game board when the playerX button is clicked
        gameBoard.classList.add("show");
    }
    selectOBtn.onclick = () => {
        //Hide the selected box if playerO button is clicked
        select.classList.add("hide");
        //Will shoe the game board when the playerO button is clicked
        gameBoard.classList.add("show");
        //Three class names in the player element
        players.setAttribute("class", "players active player");
    }
}
//Fontawesome icons for X & O
let xIcon = "fas fa-times";
let oIcon = "far fa-circle";

function clickedBox(element) {

    if (players.classList.contains("player")) {
        //Adding the 'circle-icon' to the O-player
        element.innerHTML = `<i class="${oIcon}"></i>`;
        //Adding the 'times-icon' to the X-player
    } else {
        element.innerHTML = `<i class="${xIcon}"></i>`;
    }

};