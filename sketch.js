
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground,dustbin1,dustbin2,dustbin3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper1(50,300,20);
	ground = new Ground(200,690,1200,20)
	dustbin1 = new DustBin(700,640,20,75);
	dustbin2 = new DustBin(650,670,75,20);
	dustbin3 = new DustBin(600,640,20,75);
	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background(0);
  paper.display();															
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Body.applyForce(paper.body,paper.body.position,{x:15,y:-15})
	}
}


