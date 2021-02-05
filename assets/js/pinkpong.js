//PINK GAMES - PINK PONG

//Select the canvas
const cvs = document.getElementById("pinkpong");
//Get context of canvas (methods & properites)
const ctx = cvs.getContext("2d");

//The user paddle
const user = {
    x: 0,
    y: cvs.height / 2 - 100 / 2,
    width: 20,
    height: 100,
    color: "#FF00AB",
    score: 0
};
//The computer paddle
const com = {
    x: cvs.width - 20,
    y: cvs.height / 2 - 100 / 2,
    width: 20,
    height: 100,
    color: "#FF00AB",
    score: 0
};

//The ball
const ball = {
    x: cvs.width / 2,
    y: cvs.height / 2,
    radius: 10,
    velocityX: 5,
    velocityY: 5,
    speed: 2,
    color: "#FF00AB"
};

//The court
function drawRect(x, y, w, h, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
}

//The ball's color, size and position
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
    ctx.font = "50px impact";
    ctx.fillText(text, x, y);
}

//The net
const net = {
    x: cvs.width / 2 - 1,
    y: 0,
    height: 10,
    width: 10,
    color: "#FF00AB",
};
//Draw the net
function drawNet() {
    for (let i = 0; i <= cvs.height; i += 15) {
        drawRect(net.x, net.y + i, net.width, net.height, net.color);
    }
}

//The movement of the mouse
cvs.addEventListener("mousemove", movePaddle);

function movePaddle(evt) {
    let rect = cvs.getBoundingClientRect();
    user.y = evt.clientY - rect.top - user.height / 2;
}

//Collison (When the ball hits the paddle, b = ball, p = player)
function collision(b, p) {
    p.top = p.y;
    p.bottom = p.y + p.height;
    p.left = p.x;
    p.right = p.x + p.width;

    b.top = b.y - b.radius;
    b.bottom = b.y + b.radius;
    b.left = b.x - b.radius;
    b.right = b.x + b.radius;

    return b.right > p.left && b.bottom > p.top && b.left < p.right && b.top < p.bottom;
}
//Reset game
function resetBall() {
    ball.x = cvs.width / 2;
    ball.y = cvs.height / 2;
    ball.speed = 5;
    ball.velocityX = -ball.velocityX;
}

//Update the game
function update() {
    ball.x += ball.velocityX;
    ball.y += ball.velocityY;

    //AI to control the computer's paddle
    let computerLevel = 0.1;
    com.y += (ball.y - (com.y + com.height / 2)) * computerLevel;

    if (ball.y - ball.radius > cvs.height || ball.y - ball.radius < 0) {
        ball.velocityY = -ball.velocityY;
    }
    //Collision detection of paddle and ball
    let player = (ball.x < cvs.width / 2) ? user : com;
    //If ball hits paddle
    if (collision(ball, player)) {
        //Where the ball hits the paddle
        let collidePoint = ball.y - (player.y + player.height / 2);
        colidePoint = collidePoint / (player.height / 2);
        //Angle in radian
        let angleRad = (Math.PI / 4) * collidePoint;
        //Change direction of ball
        let direction = (ball.x < cvs.width / 2) ? 1 : -1;
        ball.velocityX = direction * ball.speed * Math.cos(angleRad);
        ball.velocityY = ball.speed * Math.sin(angleRad);
        //Increase speed of ball when collide with paddle
        ball.speed += 0.1;
    }
    //Update score
    if (ball.x - ball.radius < 0) {
        com.score++;
        resetBall();
    } else if (ball.x + ball.radius > cvs.width) {
        user.score++;
        resetBall();
    }
}

//Render the game
function render() {
    //Draw the canvas (court)
    drawRect(0, 0, cvs.width, cvs.height, "#FC8BD7");
    //Draw the net
    drawNet();
    // Draw the players score
    drawText(user.score, cvs.width / 4, cvs.height / 5, "#FF00AB");
    //Draw the computers score
    drawText(com.score, 3 * cvs.width / 4, cvs.height / 5, "#FF00AB");
    //Draw players paddle
    drawRect(user.x, user.y, user.width, user.height, user.color);
    //Draw computers paddle
    drawRect(com.x, com.y, com.width, com.height, com.color);
    // Draw the ball
    drawCircle(ball.x, ball.y, ball.radius, ball.color);
}

//Call the game
function game() {
    update();
    render();
}
//50 frames per second
const framesPerSecond = 50;
//Call game 50 times every second
setInterval(game, 1000 / framesPerSecond);