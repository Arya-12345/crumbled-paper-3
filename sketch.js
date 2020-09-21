
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1,ground1,paper1;

function preload()
{
	dustbinImage = loadImage('dustbingreen.png');
	paperImage = loadImage('paper.png');

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1 = new Paper(100,250,30);
	ground1 = new Ground(420,640,800,20);
	dustbin1 = new Dustbin(1000,330,200,200);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0,0,0);
  ground.display();
  paper.display();
  image(dustbinImage,1000,330,200,200);
  image(paperImage,100,250,30);
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body, paper1.body.position,{x:85,y:-85});
	}
}


function mouseDragged(){
	matter.body.setposition(paper.body,{x:mouseX , y:mouseY});
}

function mouseReleased(){
	fly();
}