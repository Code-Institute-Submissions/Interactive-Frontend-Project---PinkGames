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



