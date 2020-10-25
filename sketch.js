
var monkey , monkey_running, ground;
var banana ,bananaImage, obstacle, obstacleImage, bananagroup;
var FoodGroup, obstaclegroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
  bananagroup = new Group();
  obstaclegroup = new Group();
  
  score = 0;
}



function setup() {
  createCanvas(600,600)
  
  monkey = createSprite(100,400);
  monkey.addAnimation("m_running", monkey_running);  
  monkey.scale = 0.2;
}


function draw() {
  background(255);
  
  ground = createSprite(300,464,1200,10);
  
  if(World.frameCount % 80 == 0) {
    obst();
    bana();
  }
  
  monkey.collide(ground);
  monkey.velocityY = monkey.velocityY+1.2
  
    if(keyWentDown("space")&&monkey.y > 397) {
      monkey.velocityY = -18
    }
  
  if(monkey.isTouching(bananagroup)) {
    bananagroup.destroyEach();
    score = score+1;
  }
  
  if(monkey.isTouching(obstaclegroup)) {
    gameState = "end";
  }
  
  drawSprites();
textSize(20);
text("Score: "+score, 450,50);
}

function obst() {
obstacle = createSprite(700,430);
obstacle.addImage("obs", obstacleImage); 
obstacle.velocityX = -9;
obstacle.scale = 0.2;
obstacle.lifetime = 150;
obstaclegroup.add(obstacle);
}

function bana() {
banana = createSprite(700,random(180,340));
banana.addImage("ban", bananaImage); 
banana.velocityX = -9;
banana.scale = 0.1;
banana.lifetime = 150;
bananagroup.add(banana);
}





