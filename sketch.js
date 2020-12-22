const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint
var bobObject1, bobObject2, bobObject3,bobObject4,bobObject5;
var ground,roof
var rope1, rope2, rope3, rope4,rope5


function preload()
{
	
}

function setup() {
	canvas=createCanvas(windowWidth/2,windowHeight/1.5);
	engine = Engine.create();
  world = engine.world;
var canvasmouse=Mouse.create(canvas.elt)
canvasmouse.pixelRatio=pixelDensity();
var options={
  mouse:canvasmouse
};
mConstraint=Mouse.Constraint.create(engine,options);
World.add(world,mConstraint);
   roof= new Ground(width/2,height/4,width/7,20)
   bobD=40
   bobx=width/2
   boby=height/4+500
   bobObject1= new bob(bobx-bobD*2,boby,bobD)
   bobObject2= new bob(bobx-bobD,boby,bobD)
   bobObject3= new bob(bobx,boby,bobD)
   bobObject4= new bob(bobx+bobD,boby,bobD)
   bobObject5= new bob(bobx+bobD*2,boby,bobD)
   rope1=new rope ( bobObject1.body,roof.body,-bobD*2,0)
   rope2=new rope ( bobObject2.body,roof.body,-bobD*1,0)
   rope3=new rope ( bobObject3.body,roof.body,0,0)
   rope4=new rope ( bobObject4.body,roof.body,bobD*1,0)
   rope5=new rope ( bobObject5.body,roof.body,bobD*2,0)
   Engine.run(engine)
  }
  
 
  
function draw() {
  background("white")
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}


function mouseDragged(){
  Matter.Bodies.setPosition(bobObject1.body,{x:mouseX,y:mouseY})
}