
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload(){

    polygonImg=loadImage("polygon.png")
}
function setup() {
	createCanvas(800, 700);
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground= new Ground(350,500,300,20)
    polygon = Bodies.rectangle(100,300,30,30)
    World.add(world,polygon)
    sling=new Slingshot(polygon,{x:100,y:290})
    box1=new Box(260,470,30,40)
    box2=new Box(290,470,30,40)
    box3=new Box(320,470,30,40)
    box4=new Box(350,470,30,40)
    box5=new Box(380,470,30,40)
    box6=new Box(410,470,30,40)
    box7=new Box(440,470,30,40)
    // second level
    box8=new Box(290,430,30,40)
    box9=new Box(320,430,30,40)
    box10=new Box(350,430,30,40)
    box11=new Box(380,430,30,40)
    box12=new Box(410,430,30,40)

    // third level
    box13=new Box(320,390,30,40)
    box14=new Box(350,390,30,40)
    box15=new Box(380,390,30,40)

    // last level
    box16=new Box(350,350,30,40)
    Engine.run(engine);
}
function draw() {
    rectMode(CENTER);
    background(0);

ground.display();
imageMode(CENTER)
image(polygonImg,polygon.position.x,polygon.position.y,50,50)
sling.display();
fill("lightblue")
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
fill("pink")
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
fill("cyan")
box13.display();
box14.display();
box15.display();
fill("gray")
box16.display();
textSize(15)
text ("Drag the hexagonal Block and release it to launch it towards the blocks. Press space for second shot! ",30,30)
    drawSprites();
 
}

function mouseDragged()
{
	Matter.Body.setPosition(polygon, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	sling.fly();
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(polygon, {x:100, y:290}) 
	  sling.attach(polygon);
	}
  }