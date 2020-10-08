const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies 
var engine, world, ground, ball;

function setup() {
  createCanvas(400,400);
 engine = Engine.create();
 world = engine.world;
 var option = {
   isStatic:true
 }
 ground = Bodies.rectangle(100,390,250,20,option);
 var opt = {
   'restitution': 1.0
 }

 ball = Bodies.circle(130,160,25,opt);
 World.add(world, ground);
 World.add(world, ball);
}

function draw() {
  background(0);  
  Engine.update(engine);
 rectMode(CENTER);
 fill("green");
rect(ground.position.x,ground.position.y,250,20);  
ellipseMode(RADIUS)
fill("yellow");
ellipse(ball.position.x,ball.position.y,25);
}