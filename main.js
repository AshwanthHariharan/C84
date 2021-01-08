var canvas = document.getElementById("myCanvas");

var ctx = canvas.getContext("2d");

var nasa_images_array = ["Nasa_1.jpg","Nasa_2.jpg","Nasa_3.jpg","Nasa_4jpg.jpg"];

var random = Math.floor(Math.random()*4)

console.log(random);

var background_image = nasa_images_array[random];;

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

function uploadBackground() {

    ctx.drawImage(background_imageTag,0,0,canvas.width,canvas.height);

}

function uploadRover() {

    ctx.drawImage(rover_imageTag,rover_x,rover_y,rover_width,rover_height);

}

window.addEventListener("keydown",my_keydown);

function my_keydown(e) {

    keypressed = e.keyCode;

    console.log(keypressed);

    if(keypressed=='38') {

        up();

        console.log("up");

    }

    if(keypressed=='40') {

        down();

        console.log("down");

    }

    if(keypressed=='37') {

        left();

        console.log("left");

    }

    if(keypressed=='39') {

       right();

        console.log("right");

    }

}

function up() {

if(rover_y >=0) {

rover_y = rover_y - 10;

console.log(rover_y,rover_x);

uploadBackground();

uploadRover();

}

}

function down() {

    if(rover_y <=500) {
    
    rover_y = rover_y + 10;
    
    console.log(rover_y,rover_x);
    
    uploadBackground();
    
    uploadRover();
    
    }
    
}

function left() {

    if(rover_x >=0) {
    
    rover_x = rover_x - 10;
    
    console.log(rover_x,rover_y);
    
    uploadBackground();
    
    uploadRover();
    
    }
    
}

function right() {

    if(rover_x <=700) {
    
    rover_x = rover_x + 10;
    
    console.log(rover_x,rover_y);
    
    uploadBackground();
    
    uploadRover();
    
    }
    
}