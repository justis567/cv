
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperSprite,paperIMG
var ground,groundIMG
var log,log2,log3

function preload()
{
	paperSprite=loadImage("paper.png")  
	log=loadImage("dustbingreen.png")

}

function setup() {
	createCanvas(1600, 700);

paperSprite=createSprite(200,550,50,50)
paperSprite.shapeColor="white"
paperSprite.addImage(paperIMG)

ground = createSprite(200,680,2800,30)
ground.shapeColor="yellow"

log=createSprite(830,650,200,20)
	log.shapeColor="blue"
	log.addImage(logIMG)



	log2=createSprite(width/2.2,height-90,20)
	log2.shapeColor="blue"

	log3=createSprite(width/1.7,height-90,20)
	log3.shapeColor="blue"

	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  


log.display()
log2.display()
log3.display()
  paperSprite.display()
  drawSprites();
 
}



