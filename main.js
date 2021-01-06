var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var background_image = "mars.jpg";
var rover_x = 10;
var rover_y = 10;
var rover_image = "rover.png";
var rover_width = 100;
var rover_height = 90;

function add() {
    background_imageTag = new Image();
    background_imageTag.onload = uploadBackground;
    background_imageTag.src = background_image;

    rover_imageTag = new Image();
    rover_imageTag.onload = uploadRover;
    rover_imageTag.src = rover_image;
}

function uploadBackground(){
    ctx.drawImage(background_imageTag,0,0,canvas.width,canvas.height);
}

function uploadRover(){
    ctx.drawImage(rover_imageTag,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keypressed = e.keyCode;
    console.log(keypressed);
    if(keypressed=='38'){
        //up();
        console.log("up");
    }

    if(keypressed=='40'){
        //down();
        console.log("down");
    }

    if(keypressed=='37'){
        //left();
        console.log("left");
    }

    if(keypressed=='39'){
       // right();
        console.log("right");
    }
}