  
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
  createCanvas(600,600);
  spookySound.loop();
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  tower.y=tower.height/2
  
  doorsGroup = new Group();
  climbersGroup = new Group();
  invisibleBlockGroup = new Group();
  
  ghost = createSprite(200,200,50,50);
  ghost.scale = 0.3;
  ghost.addImage("ghost", ghostImg);
}


function draw() {
  background(255);
  
  ghost.velocityX=0

  if (gameState === "play") {
    
    if(keyDown("left")){
  ghost.velocityX=-3
     
    }
    if(keyDown("right")){
  ghost.velocityX=3
      
    }
    if(keyDown("space")){
  ghost.velocityY=-4
      
    }
  
  ghost.velocityY = ghost.velocityY + 0.8;

    if(tower.y>600){
    tower.y=300
    }
    spawnDoors();

  
      //write a code to make climbersGroup collide with ghost change the ghost velocity  
      ghost.collide(climbersGroup)
//write a code to make invisibleBlockGroup collide with ghost destroy the ghost and make gamestate to end.
if(ghost.y>600){
  ghost.destroy()
  gameState="end"
}  

  drawSprites();
}
  if (gameState === "end"){
    background(0)
    stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Game Over", 230,250) 
  }
}

function spawnDoors()
 {
  //write code here to spawn the clouds
  if (frameCount % 240 === 0) {
    //add the random function
   
    var door = createSprite(200, -50);
    door.addImage(doorImg);
   
    var climber = createSprite(200,10);
    climber.addImage(climberImg);
    
 
    
    var invisibleBlock = createSprite(200,15);  
    invisibleBlock.width = climber.width;
    invisibleBlock.height = 2;
    

    //door.addImage(doorImg);
    //climber.addImage(climberImg);
    door.velocityY=1
    climber.velocityY=1
    invisibleBlock=1
    
    //change the depth of the ghost and door
    door.depth=ghost.depth
    ghost.depth=ghost.depth+1

    
    //assign lifetime to the obstacle.lifetime = 300; here  obstacle are door, climber and invisible block


    //add each obstacle to the group obstaclesGroup.add(obstacle);here  obstacle are door, climber and invisible block
    climbersGroup.add(climber)
    //invisibleBlockGroup.add(invisibleBlock)
    //doorsGroup.add(door)
  }
}

