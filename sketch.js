const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
function setup() {
  createCanvas(400,400);
  engine=Engine.create()
world=engine.world
var options={isStatic:true}
var ballOption={restitution:1.0} 
object=Bodies.rectangle(200,390,200,20,options)
World.add(world,object)
ball=Bodies.circle(200,100,20,ballOption)
World.add(world,ball)
console.log(object)
}

function draw() {
  background(0);
  Engine.update(engine)
  rectMode(CENTER)
  rect(object.position.x,object.position.y,400,20)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
}