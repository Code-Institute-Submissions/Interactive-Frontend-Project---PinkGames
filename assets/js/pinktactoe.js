//All required elements
const select = document.querySelector(".select"),
    selectXBtn = select.querySelector(".playerX"),
    selectOBtn = select.querySelector(".playerO"),
    gameBoard = document.querySelector(".game-board"),
    allBox = document.querySelectorAll("section span"),
    players = document.querySelector(".players"),
    result = document.querySelector(".result"),
    winnerText = result.querySelector(".winner-text"),
    replayBtn = document.querySelector("button");

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
//Player X
let playerSign = "X";
let runCom = true;

//The player click function
function clickedBox(element) {
    //console.log(element);
    if (players.classList.contains("player")) {
        //If player is O then the sign will change
        playerSign = "O";
        //Adding the 'circle-icon' to the O-player
        element.innerHTML = `<i class="${oIcon}"></i>`;
        players.classList.add("active");
        //If the player select O, then we'll change the playerSign to O
        playerSign = "O";
        element.setAttribute("id", playerSign);
        //Adding the 'times-icon' to the X-player
    } else {
        element.innerHTML = `<i class="${xIcon}"></i>`;
        players.classList.add("active");
        element.setAttribute("id", playerSign);
    }
    //Call the winner of the game
    selectWinner();
    gameBoard.style.pointerEvents = "none";
    //When one 'span' has been selected, it can't be selected again
    element.style.pointerEvents = "none";
    //Random delay in time when the computer player will makes its next move
    let delayTime = ((Math.random() * 2000) + 300).toFixed();
    setTimeout(() => {
        //Calling the computer player function with the delayed time
        com(runCom);
    }, delayTime);
};

//The computer player click function
function com(runCom) {
    //If runcom is tru, then the code can be run
    if (runCom) {
        //If player has the X id, the computer will have the O id
        playerSign = "O";
        //Unselcted box index inside this empty array
        let array = [];
        for (let i = 0; i < allBox.length; i++) {
            //If span has no children
            if (allBox[i].childElementCount == 0) {
                //The span has no children
                array.push(i);
                //console.log(i);
            }
        }
        //Random index from the array that the computer player will use to select a span
        let randomBox = array[Math.floor(Math.random() * array.length)];
        if (array.length > 0) {
            if (players.classList.contains("player")) {
                //Adding the 'times-icon' to the X-player
                allBox[randomBox].innerHTML = `<i class="${xIcon}"></i>`;
                players.classList.remove("active");
                //If the player has the O id, the comuter will have the X id
                playerSign = "X";
                allBox[randomBox].setAttribute("id", playerSign);
                //Adding the 'circle-icon' to the O-player
            } else {
                allBox[randomBox].innerHTML = `<i class="${oIcon}"></i>`;
                players.classList.remove("active");
                allBox[randomBox].setAttribute("id", playerSign);
            }
            //Calling the winner of the game
            selectWinner();
        }
        //After a box has been played it can't be played again
        allBox[randomBox].style.pointerEvents = "none";
        gameBoard.style.pointerEvents = "auto";
        playerSign = "X";
    }
}

//Selectiong the winner
function getId(idname) {
    //Returning the id-name
    return document.querySelector(".box" + idname).id;
}

function checkId(val1, val2, val3, sign) {
    if (getId(val1) == sign && getId(val2) == sign && getId(val3) == sign) {
        return true;
    }
}
function selectWinner() {
    //One of these combination will make a winner
    if (checkId(1, 2, 3, playerSign) ||
        checkId(4, 5, 6, playerSign) ||
        checkId(7, 8, 9, playerSign) ||
        checkId(1, 4, 7, playerSign) ||
        checkId(2, 5, 8, playerSign) ||
        checkId(3, 6, 9, playerSign) ||
        checkId(1, 5, 9, playerSign) ||
        checkId(3, 5, 7, playerSign)) {
        console.log(playerSign + " " + "is the winner");
        //When someone has won the game the runcom will stop running
        runCom = false;
        com(runCom);
        //Delay the result box
        setTimeout(() => {
            gameBoard.classList.remove("show");
            result.classList.add("show");
            //1s delay
        }, 1000);
        //Text announcing the winner
        winnerText.innerHTML = `Player <p>${playerSign}</p> won!`;
    }
}