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

    get left () {
        return this.pos.x - this.size.x / 2;
    }
    get right () {
        return this.pos.x + this.size.x / 2;
    }
    get top () {
        return this.pos.y - this.size.y / 2;
    }
    get bottom () {
        return this.pos.y + this.size.y / 2;
    }
}

//The ball
class Ball extends Rect {
    constructor() {
        super(10, 10)
        this.vel = new Vec;
    }
}

//Player set-up
class Player extends Rect {
    constructor() {
        super(20, 100);
        this.score = 0;
    }
}

//Wrap animation of ball
class Pong {
    constructor(canvas) {
        this._canvas = canvas;
        this._context = canvas.getContext("2d");

        //New ball
        this.ball = new Ball;

        //Position of ball
        this.ball.pos.x = 100;
        this.ball.pos.y = 50;

        this.ball.vel.x = 100;
        this.ball.vel.y = 100;

        this.players = [
            new Player,
            new Player,
        ]

        //Animation frames
        let lastTime;

        const callback = (millis) => {
            if (lastTime) {
                this.update((millis - lastTime) / 1000);
            }
            lastTime = millis;
            requestAnimationFrame(callback);
        }
        callback();

    }
    draw() {
        //PinkPong-field
        this._context.fillStyle = "#FB8CD8";
        this._context.fillRect(0, 0, this._canvas.width, this._canvas.height);
        //Draw the ball
        this.drawRect(this.ball);
        //Draw players
        this.players.forEach(player => this.drawRect(player));
    }

    drawRect(rect) {
        // PinkPong ball
        this._context.fillStyle = "#FA05A9";
        //Paint ball
        this._context.fillRect(rect.pos.x, rect.pos.y, rect.size.x, rect.size.y);
    }
    //The movement of the ball
    update(dt) {
        this.ball.pos.x += this.ball.vel.x * dt;
        this.ball.pos.y += this.ball.vel.y * dt;

        // Make ball stay within the canvas area
        if (this.ball.left < 0 || this.ball.right > this._canvas.width) {
            this.ball.vel.x = -this.ball.vel.x;
        }
        if (this.ball.top < 0 || this.ball.bottom > this._canvas.height){
            this.ball.vel.y = -this.ball.vel.y;
        }
        //Call draw
        this.draw();
    }
}

//The field & ball
const canvas = document.getElementById("pong");
const pong = new Pong(canvas);

