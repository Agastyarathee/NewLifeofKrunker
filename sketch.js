
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var backgroundImage;
var player,playerimg;
var runner,runnerimg;
var sniper,sniperimg;
var guard1,guard1img;
var guard2,guard2img;
var bullet,bulletimg;
var bulletGroup,obstaclesGroup;
var diamondimg,diamond;
var cellimg,cell;
var winnerimg,winner;
var endgimg;


function preload()
{
	backgroundImage=loadImage("images/3map.png");
	playerimg=loadImage("images/backplayerview.png");
	runnerimg=loadImage("images/Runner.png");
	sniperimg=loadImage("images/Sniper.png");
	guard1img=loadImage("images/Guard1.png");
    guard2img=loadImage("images/Guard 2.png");
    frontplayerimg=loadImage("images/frontplayerview.png");
    leftplayerimg=loadImage("images/leftplayerview.png");
    rightplayerimg=loadImage("images/rightplayerview.png");
bulletimg=loadImage("images/bullet.png");
cellimg=loadImage("images/cellb2ar.png");
diamondimg=loadImage("images/d.png");
winnerimg=loadImage("images/you win.jpg");
endgimg=loadImage("images/you win.jpg");
}

function setup() {
	createCanvas(1350, 650);


	engine = Engine.create();
	world = engine.world;
 
   player=createSprite(260,540);
   runner=createSprite(180,200);
   sniper=createSprite(350,20);
   guard1=createSprite(1200,200);
   guard2=createSprite(990,200);
   cell=createSprite(1109,190);
   diamond=createSprite(1109,197);
   player.addImage(playerimg);
   runner.addImage(runnerimg);
   sniper.addImage(sniperimg);
   guard1.addImage(guard1img);
   guard2.addImage(guard2img);
   cell.addImage(cellimg);
   diamond.addImage(diamondimg);
   //winner.addAnimation(winnerimg,"text");
   bulletGroup=new Group();
   player.scale=0.4;
   runner.scale=0.5;
   sniper.scale=0.5;
   guard1.scale=0.5;
   guard2.scale=0.5;
   cell.scale=0.37;
   diamond.scale=0.2;
   cell.debug=true;
   //trex.setCollider("rectangle",0,0,250,trex.height);
  //diamond.debug = false;
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundImage);
  if(player.isTouching(cell)){
    cell.visible=false;
    
  }
  if(player.isTouching(diamond)){
    background(winnerimg);
    diamond.visible=false;
    sniper.visible=false;
    guard1.visible=false;
    guard2.visible=false;
    runner.visible=false;
    player.visible=false;
 
    
  }
  
  if(keyDown("w")){
 player.y=player.y-2;

  }
  if(keyDown("s")){
    player.y=player.y+2;
   
     }
     if(keyDown("a")){
      player.x=player.x-2;
     
       }
       if(keyDown("d")){
        player.x=player.x+2;
       
         }
         fill("black");
         text(mouseX + " ," + mouseY,mouseX,mouseY);

  if(player.x===190 || player.y===224){
    player.addImage(rightplayerimg);
   
  }
  else if (player.x=== 514|| player.y===124){
    player.addImage(frontplayerimg);
    
  }
  else if (player.x=== 967 || player.y===294){
    player.addImage(frontplayerimg);
   
  }
  else if (player.x=== 740 || player.y===415){
    player.addImage(frontplayerimg);
   
  }
  else if (player.x=== 773 || player.y===343){
    player.addImage(backplayerview);
   
  }
 
console.log(player.x,player.y);
  drawSprites();
 
}

function keyPressed(){
if(keyCode===32){
  bullet=createSprite(player.x,player.y);
  bullet.addImage(bulletimg);
  bullet.scale=0.1
  bullet.velocityY=-4;
  bulletGroup.add(bullet);
 if(bulletGroup.isTouching(runner)
){
bulletGroup.destroyEach();
runner.visible=false;

}
if(bulletGroup.isTouching(sniper)
){
bulletGroup.destroyEach();
sniper.visible=false;

}
if(bulletGroup.isTouching(guard1)
){
bulletGroup.destroyEach();
guard1.visible=false;

}
if(bulletGroup.isTouching(sniper)
){
bulletGroup.destroyEach();
sniper.visible=false;

}
if(bulletGroup.isTouching(guard2)
){
bulletGroup.destroyEach();
guard2.visible=false;

}

}
}

/*if(obstaclesGroup.isTouching(trex)){
  //gameState = END;
//dieSound.play();
jumpSound.play();
trex.velocityY = -12;
}

}
else if (gameState === END) {
console.log("hey")
gameOver.visible = true;
restart.visible = true;

ground.velocityX = 0;
trex.velocityY = 0

\




function spawnObstacles(){
  if (frameCount % 60 === 0){
    var obstacle = createSprite(400,165,10,40);
    
    
     
     }
    
             
     obstacle.scale = 0.5;
     obstacle.lifetime = 300;
    
    //add each obstacle to the group
     obstaclesGroup.add(obstacle);
  }
*/