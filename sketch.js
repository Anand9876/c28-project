
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundObject=new ground(400,600,800,20)
	treeObject=new tree(400,200,400,400)
	boyObject=new boy(150,450,200,200)
	stoneObject=new stone(80,230,50,50)
	launcherObject=new launcher(stoneObject,{x:80,y:230})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  groundObject.display();
  treeObject.display();
  boyObject.display();
  stoneObject.display();
  drawSprites();
 
}
/*function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stoneObject.body,{x:235,y:420})
		
	}
}function mouseReleased(){
    stoneObject.fly();
}*/



