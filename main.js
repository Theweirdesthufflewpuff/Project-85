canvas = document.getElementById('myCanvas');
 ctx = canvas.getContext("2d"); rover_width = 100;
  car_height = 90;
   car_image = "car.png";
    car_x = 500; car_y = 100;
nasa_mars_images_array=["racetrack1.jpg","racetrack2.jpg","racetrack3.jpg"];
random_number=Math.floor(Math.random()*4);
console.log(random_number);
background_image=nasa_mars_images_array[random_number];
console.log("background_image="+background_image);
    function add() { background_imgTag = new Image();

//defining a variable with a new image

 background_imgTag.onload = uploadBackground;
// setting a function, onloading this variable
 background_imgTag.src = background_image;
// load image
 rover_imgTag = new Image();
//defining a variable with a new image
 rover_imgTag.onload = uploadrover;
// setting a function, onloading this variable
 rover_imgTag.src = rover_image;
 // load image
 }
 function uploadBackground() { ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
 }
 function uploadrover() { ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);} 
window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
keypressed=e.keyCode;
console.log(keypressed);
if(keypressed=='38')
{
up();
console.log("up");

}
if(keypressed=='40')
{
down();
console.log("down");

}
if(keypressed=='37')
{
left();
console.log("left");

}
if(keypressed=='39')
{
right();
console.log("right");
}

}
function up()
{
if (rover_y>=0)
{
rover_y=rover_y-10;
console.log("When up arrow is pressed, x = " + rover_x + " | y = " +rover_y);
uploadBackground();
uploadrover();


}
}
function down()
{
if (rover_y>=0)
{
rover_y=rover_y+10;
console.log("When up arrow is pressed, x = " + rover_x + " | y = " +rover_y);
uploadBackground();
uploadrover();


}
}
function left()
{
if (rover_x>=0)
{
rover_x=rover_x-10;
console.log("When up arrow is pressed, x = " + rover_x + " | y = " +rover_y);
uploadBackground();
uploadrover();


}
}
function right()
{
if (rover_x<=700)
{
rover_x=rover_x+10;
console.log("When up arrow is pressed, x = " + rover_x + " | y = " +rover_y);
uploadBackground();
uploadrover();


}
}