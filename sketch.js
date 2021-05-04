
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



function preload()
{
	backgroundImage=loadImage("images/3map.png");
	playerimg=loadImage("images/Player.png");
	runnerimg=loadImage("images/Runner.png");
	sniperimg=loadImage("images/Sniper.png");
	guard1img=loadImage("images/Guard1.png");
    guard2img=loadImage("images/Guard 2.png");
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
   player.addImage(playerimg);
   runner.addImage(runnerimg);
   sniper.addImage(sniperimg);
   guard1.addImage(guard1img);
   guard2.addImage(guard2img);
   player.scale=0.5;
   runner.scale=0.5;
   sniper.scale=0.5;
   guard1.scale=0.5;
   guard2.scale=0.5;
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundImage);

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
  drawSprites();
 
}



