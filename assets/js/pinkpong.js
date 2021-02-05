//PINK GAMES - PINK PONG

//Select the canvas
const canvas = document.getElementById("pinkpong");
//Get context of canvas (methods & properites)
const context = canvas.getContext("2d");

//The rectangle's color, size and position
function drawRect(x, y, w, h, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
}
//The circle's color, size and position
function drawCircle(x, y, r, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI*2, false);
    ctx.closePath();
    ctx.fill();
}

//The text's position and color
function drawText(text, x, y, color) {
    ctx.fillStyle = color;
    ctx.font = "80px fantasy";
    ctx.fillText(text, x, y);
}

//Paddles for the player and the computer
const user = {
    x: 0,
    y: canvas.height/2 - 100/2,
    width: 10,
    height: 100,
    color: "#FF00AB",
    score: 0
}

const com = {
    x: canvas.width - 10,
    y: canvas.height/2 - 100/2,
    width: 10,
    height: 100,
    color: "#FF00AB",
    score: 0
}

//The net
const net = {
    x: canvas.width/2 - 2/2,
    y: 0,
    height: 10,
    width: 2,
    color: "#FF00AB", 
}
//Draw the net
function drawNet(){
    for(let i = 0; i <= canvas.height; i+=15){
        drawRect(net.x, net.y + i, net.width, net.height, net.color);
    }
}

//The ball
const ball = {
    x: canvas.width/2,
    y: canvas.height/2,
    radius : 10,
    velocityX : 5,
    velocityY : 5,
    speed : 5,
    color : "#FF00AB"
}

//Render the game
function render() {
//Draw the canvas (court)
drawRect(0, 0, canvas.width, canvas.height, "#FC8BD7");    
// Draw the players score
drawText(user.score, canvas.width/4, canvas.height/5, "#FF00AB");
//Draw the computers score
drawText(com.score, 3*canvas.width/4, canvas.height/5, "#FF00AB");
//Draw the net
drawNet();
//Draw players paddle
drawRect(user.x, user.y, user.width, user.height, user.color);
//Draw computers paddle
drawRect(com.x, com.y, com.width, com.height, com.color);
// Draw the ball
drawCircle(ball.x, ball.y, ball.radius, ball.color);

}
//Call the render
function game() {
    update();
    render();
}
//50 frames per second
const framesPerSecond = 50;
//Call game 50 times every second
setInterval(game, 1000/framesPerSecond);