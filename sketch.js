var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  ghost = createSprite(300,300,10,10)
  ghost.addImage("ghost",ghostImg);
  ghost.scale= 0.4;
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  
}

function draw() {
  background(200);
  
  if(tower.y > 400){
      tower.y = 300
    }
    if(keyDown("space")){
      ghost.velocityY= -12;
    }
    ghost.velocityY = ghost.velocityY + 0.8;
    spawnDoors();

    drawSprites();
}

function spawnDoors() {
door = createSprite(Math.round(random(100, 500)),0,50,50)
door.velocityY = 3








}
