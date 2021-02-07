function playDice() {
    //Get random number
    //Get the dice-image to go with the random number
    let randomNumberOne = Math.floor(Math.random() * 6) + 1; //Beacuse the dice starts at 1
    let randomImageOnePath = "assets/media/pic/pinkdice/dices/" + randomNumberOne + ".png";

    let randomNumberTwo = Math.floor(Math.random() * 6) + 1;
    let randomImageTwoPath = "assets/media/pic/pinkdice/dices/" + randomNumberTwo + ".png";

    let image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", randomImageOnePath);

    let image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src", randomImageTwoPath);

    //Who wins the game
    if (randomNumberOne > randomNumberTwo) {
        document.querySelector("h1").innerHTML = "Player 1 wins!";
    } else if (randomNumberTwo > randomNumberOne) {
        document.querySelector("h1").innerHTML = "Player 2 wins!";
    } else {
        document.querySelector("h1").innerHTML = "It's a draw!";
    }
}

document.querySelector("button").addEventListener("click", playDice);