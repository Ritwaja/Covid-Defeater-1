var bg,bgimg;

function preload(){
bgimg=loadImage("bg.jpg");

}

function setup(){
  createCanvas(windowWidth,windowHeight);

  bg=createSprite(650,400);
  bg.addImage(bgimg);
  bg.scale=4.5;
  bg.velocityX=-4;

}

function draw(){
  background(0);

  if(bg.x<600){
     bg.x=windowWidth/2;
  }

  drawSprites();
}