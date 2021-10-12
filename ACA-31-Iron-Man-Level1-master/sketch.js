var bg, backgroundImg;
var ironmanImage;
var ironman;

function preload() {
  backgroundImg = loadImage("images/bg.jpg");
  ironmanImage = loadImage("images/iron.png");
    
}

function setup() {
  createCanvas(1000, 600);
  bg = createSprite(580,300);
  bg.addImage(backgroundImg);
  bg.scale=2;
  ironman = createSprite(200, 505, 20, 50);
  ironman.addImage(ironmanImage);
  ironman.scale= 0.3;
  
}

function draw() {
  if (keyDown("up")) {
    ironman.velocityY = -10;  }
    ironman.velocityY=ironman.velocityY+ 0.5;
    if (keyDown("left")) {
      ironman.x = ironman.x - 5;
    }
    if (keyDown("right")) {
      ironman.x = ironman.x + 5;
    }
    drawSprites();
   
}

