
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var roof1,bobObject1,bobObject2,bobObject3,bobObject4,bobObject5,rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
    bobObject1 = new Bob(300,500,30);
    bobObject2 = new Bob(330,500,30);
    bobObject3 = new Bob(360,500,30);
    bobObject4 = new Bob(390,500,30);
    bobObject5 = new Bob(420,500,30);
roof1 = new Roof(375,350,300,70);
roof2 = new Roof(400,650,800,50);
rope1 = new Rope(bobObject1.body,roof1.body,-70,0);
rope2 = new Rope(bobObject2.body,roof1.body,-40,0);
rope3 = new Rope(bobObject3.body,roof1.body,-10,0);
rope4 = new Rope(bobObject4.body,roof1.body,20,0);
rope5 = new Rope(bobObject5.body,roof1.body,50,0);

	Engine.run(engine);
  
}


function draw() {
  
  background(210,327,489);
  Engine.update(engine);
  roof1.display();
  roof2.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});
  }
}