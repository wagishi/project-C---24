
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200,400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(100, 300, 10);

	ground = new Ground(600,350, 1200, 20);
	
	rect1 = new Dustbin(600, 290, 20, 100);
	rect2 = new Dustbin(700, 330, 180, 20);
	rect3 = new Dustbin(800, 290, 20, 100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);

  paper.display();

  ground.display();

  rect1.display();
  rect2.display();
  rect3.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW) {
	  Matter.Body.applyForce(paper.body, paper.body.position,
		 {x:15, y: -15})
	}
  }



