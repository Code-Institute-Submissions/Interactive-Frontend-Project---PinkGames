//All required elements
const select = document.querySelector(".select"),
selectXBtn = select.querySelector(".playerX"),
selectOBtn = select.querySelector(".playerO");
gameBoard = document.querySelector(".game-board");
allBox = document.querySelectorAll("section span");

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
    }
}

let XIcon = "fas fa-times";
let OIcon = "far fa-circle";

function clickedBox(element) {

}