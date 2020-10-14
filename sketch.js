// namespacing - optional
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
// things which never changes

var engine,world;
var object1;

function setup() {
  var canvas = createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  // JSON
  //  var name = { index: value };
  var object_option  = {
    isStatic:true
  }


  // creation - physical object
  object1= Bodies.rectangle(200,100,50,50,object_option);
  // add world - syntax
  World.add(world,object1);

  console.log(object1);
  console.log(object1.type);
  console.log(object1.position.x);

}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(object1.position.x,object1.position.y,50,50);
}