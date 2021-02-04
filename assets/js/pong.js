// Pink Pong Game

//Class to hold x-& y-positions
class Vec {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
}

// Data structure for rectangles, width and height, position
class Rect {
    constructor(w, h) {
        this.pos = new Vec;
        this.size = new Vec(w, h);
    }
}

//The ball
class Ball extends Rect {
    constructor() {
        super(10, 10)
        this.vel = new Vec;
    }
}

//Select the canvas & get context of canvas
const canvas = document.getElementById("pong");

const context = canvas.getContext("2d"); //Method & properties

//New ball
const ball = new Ball;
//Test to change position of ball
ball.pos.x = 200;
ball.pos.y = 50;

//Animate the ball

//PinkPong-field
context.fillStyle = "#FB8CD8";
context.fillRect(0, 0, canvas.width, canvas.height);

// PinkPong ball
context.fillStyle = "#FA05A9";
//Paint ball
context.fillRect(ball.pos.x, ball.pos.y, ball.size.x, ball.size.y);

