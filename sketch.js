const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var rope;
var fruit;
var fruitLink;

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)

  var fruOpti = {
    density:0.001
  }

  rope = new Rope(7,{x:250,y:25})
  fruit = Matter.Bodies.circle(300,250,20,fruOpti)
  Matter.Composite.add(rope.body,fruit)
  fruitLink = new Link(rope,fruit)
}

function draw() 
{
  background(51);
  ground.show();
  
  Engine.update(engine);
  
  rope.show()
  ellipse(fruit.position.x,fruit.position.y,30)

}
