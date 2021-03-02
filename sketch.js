var paper;
var dustbinImg;
var groundImg;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(1200,650);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(300,320,30);

	dustbinImg = new Dust(400,420,15,15);

	groundImg = new Ground(width/2, 630, width,15);
	
  groundImg=createSprite(width/2, 630, width,15);
	groundImg.shapeColor=color("red")
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("orange");
  paper.display();
  groundImg.display();
  dustbinImg.display();
  drawSprites();
 
}


function keyPressed(){
    if(keyCode === UP_ARROW) {
        
      Matter.Body.applyForce(paper.body,paper.body.position,{x:65,y:-65});
 
    }
 }