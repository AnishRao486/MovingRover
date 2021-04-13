canvas = document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

myRover = "rover.png";

nasa_mars_img_array = ["nasa_image_1.jpeg", "nasa_image_1.jpg","nasa_image_3.jpg", "nasa_image_4.jpg"]
random_number = Math.floor(Math.random()*4);
myMars = nasa_mars_img_array[random_number];
console.log("background image = "+ myMars);
rover_width = 190;
rover_height = 190;
rover_X = 10;
rover_Y = 10;

function add(){
    background_img_Tag = new Image();
    background_img_Tag.onload = uploadBackgroud;
    background_img_Tag.src = myMars;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadRover;
    rover_imgTag.src = myRover;
}

function uploadBackgroud(){
    ctx.drawImage(background_img_Tag, 0, 0, canvas.width, canvas.height);
}

function uploadRover(){
    ctx.drawImage(rover_imgTag, rover_X, rover_Y, rover_width, rover_height);
}

window.addEventListener("keydown" ,myKeydown);
function myKeydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == "38"){
         up();
         console.log("up");

    }

    if (keyPressed=="40"){

        down();
        console.log("down");
    }

    if(keyPressed=="37"){

        left();
        console.log("left");
    }

    if(keyPressed=="39"){
        right();
        console.log("right");
    }
}

function up(){

if (rover_Y >= 0){
rover_Y = rover_Y - 10;
console.log("When up key is pressed, x= "+rover_X+" y= " + rover_Y);
uploadBackgroud();
uploadRover();
}
}
 function down(){
     if(rover_Y<=600){
     rover_Y = rover_Y +10;
     console.log("when down arrow is pressed, x= "+rover_X + " y= "+rover_Y);
     uploadBackgroud();
     uploadRover();
     }
 }

 function right(){
     if(rover_X<= 800){
         rover_X = rover_X + 10;
         console.log("when right arrow is pressed, x= "+rover_X + " y= "+rover_Y)
         uploadBackgroud();
         uploadRover();
     }
 }

 function left(){
if( rover_X>=0){
rover_X = rover_X - 10;
console.log("when left arrow is pressed, x+ "+rover_X+ " y= "+rover_Y)
uploadBackgroud();
uploadRover();
}
    
 }