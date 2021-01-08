const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var engine, world;
var particle=[];
var plinko=[];
var division=[];
var divisionHeight=100;



function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;

  
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,height,1200,20);
  division=new Division(350,250,20,100);

}

function draw() {
  background(0)
  Engine.update(engine);
  
  
  for (var j =0; j<=innerWidth;j=j+80){
    division.push(new Division(j,height-divisionHeight/2,10,divisionHeight));
  }
  

for (var j=40;j<=innerWidth;j=j+50)
{
  plinko.push(new Plinko(j,75));

}



for (var j =15;j<=width-10;j=j+50)
{
  plinko.push(new Plinko(j,175))
}



if(frameCount%60===0)
{
 particle.push(new Particle(random (width/2-10,width/2+10),10,10));

}











ground.display();


  drawSprites();
}