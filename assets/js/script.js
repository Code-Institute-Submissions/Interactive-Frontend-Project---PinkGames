// Background music
let bgMusic = document.getElementById("bgMusic");
let icon = document.getElementById("icon");

icon.onclick = function(){
    if(bgMusic.paused){
        bgMusic.play();
        icon.src = "assets/media/music/pause.png";
    }else{
        bgMusic.pause();
        icon.src = "assets/media/music/play.png";
    }
}