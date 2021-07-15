var sea 
var seaImage;
var ship
var shipImage;

function preload(){
  //loading imagea of sea and ship.
seaImage=loadImage("sea.png")
shipImage=loadImage("ship-1.png","ship-2.png")
}

function setup(){
  //creating canvas
  createCanvas(1000,600);
  //creating sea ,giving scale to sea.
  sea=createSprite(400,400,200,200)
sea.scale=0.5;
//creating ship , adding image to ship,giving scale to ship.
ship=createSprite(400,400,100,100)
ship.addImage(shipImage);
ship.scale=0.5;
//giving velocity to sea.
sea.velocityX=-2
}

function draw() {
  background("blue");
 drawSprites();
 //giving if condition to repeat sea background.
 if(sea.x<0){
sea.x=sea.width/2;
}
//repeating sea image.
sea.addImage(seaImage);
}