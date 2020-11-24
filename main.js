
var canvas = new fabric.Canvas("myCanvas");

player_x = 10;
player_y = 10;

block_width = 30;
block_height = 30;

var player_object = "";
var block_object = "";

function player_updated()
{
    fabric.Image.fromURL("Stark.jpg",function(Img){
player_object = Img;

player_object.scaleToWidth(150);
player_object.scaleToHeight(140);
player_object.set({
top:player_y,
left:player_x
});
canvas.add(player_object);
    });
}

function new_image(get_image)
{
fabric.Image.fromURL(get_image,function(Img)
{
block_object = Img;

block_object.scaleToWidth(block_width);
block_object.scaleToHeight(block_height);
block_object.set({
top:player_y,
left:player_x
});

canvas.add(block_object);
});

}

window.addEventListener("keydown",mykeydown);

function mykeydown(e){

keyPressed = e.keyCode;
console.log(keyPressed);
if(e.shiftKey == true && keyPressed == "80")
{
    console.log("p and shift press together");
    block_width = block_width + 10 ;
block_height = block_height +10;
document.getElementById("current_width").innerHTML = block_width;
document.getElementById("current_height").innerHTML = block_height;
}
if(e.shiftKey == true && keyPressed == "77")
{
    console.log("m and shift press together");
    block_width = block_width - 10 ;
block_height = block_height - 10;
document.getElementById("current_width").innerHTML = block_width;
document.getElementById("current_height").innerHTML = block_height; 
}
if(keyPressed == "38")
{
    up();
    console.log("up");
}

if(keyPressed == "37")
{
    left();
    console.log("left");

}
if(keyPressed == "39")
{

    right();
    console.log("right");
}
if(keyPressed == "40")
{
    down();
    console.log("down");
}

if(keyPressed == "87")
{
    new_image("wall.jpg");
    console.log("W is pressed");
}
if(keyPressed == "67")
{
    new_image("cloud.jpg");
    console.log("C is pressed");
}
if(keyPressed == "68")
{
    new_image("dark_green.png");
    console.log("D is pressed");
}
if(keyPressed == "71")
{
    new_image("ground.png");
    console.log("G is pressed");
}
if(keyPressed == "76")
{
    new_image("light_green.png");
    console.log("L is pressed");
}
if(keyPressed == "82")
{
    new_image("roof.jpg");
    console.log("R is pressed");
}
if(keyPressed == "84")
{
    new_image("trunk.jpg");
    console.log("T is pressed");
}
if(keyPressed == "85")
{
    new_image("unique.png");
    console.log("R is pressed");
}
if(keyPressed == "89")
{
    new_image("yellow_wall.png");
    console.log("Y is pressed");
}
}

function up()
{
if(player_y > 0)
{
player_y = player_y - block_height;
console.log("Block_height = "+ block_height);
console.log("when up pressed = ","x = "+block_width,"y = "+block_height);
canvas.remove(player_object);
player_updated();
}
}


function down()
{
if(player_y <= 500)
{
player_y = player_y + block_height;
console.log("Block_height = "+ block_height);
console.log("when down pressed = ","x = "+block_width,"y = "+block_height);
canvas.remove(player_object);
player_updated();
}
}

function left()
{
if(player_x > 0)
{
player_x = player_x - block_width;
console.log("Block_height = "+ block_width);
console.log("when left pressed = ","x = "+block_width,"y = "+block_height);
canvas.remove(player_object);
player_updated();
}
}

function right()
{
if(player_x <= 850)
{
player_x = player_x + block_width;
console.log("Block_height = "+ block_width);
console.log("when right pressed = ","x = "+block_width,"y = "+block_height);
canvas.remove(player_object);
player_updated();
}
}


