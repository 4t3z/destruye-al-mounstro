const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

function preload(){
  bg=loadImage("gamingbackground1.jpg")
}
function setup(){
  var canvas = createCanvas(700,400);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(250,390,900,10);

  ball = new Ball(250,100,100,100);

  rope = new Rope(ball.body,{x:250,y:100});

  square1 = new Square(350,350,50,50);
  square2 = new Square(350,300,50,50);
  square3 = new Square(350,250,50,50);
  square4 = new Square(350,200,50,50);
  square5 = new Square(350,150,50,50);
  square6 = new Square(400,350,50,50);
  square7 = new Square(400,300,50,50);
  square8 = new Square(400,250,50,50);
  square9 = new Square(400,200,50,50);
  square10 = new Square(400,150,50,50);

  monster = new Mounstro(550,350,150,150);
}
function draw() {
  background(bg);
  Engine.update(engine);

  ground.display();

  ball.display();

  rope.display();

  square1.display();
  square2.display();
  square3.display();
  square4.display();
  square5.display();
  square6.display();
  square7.display();
  square8.display();
  square9.display();
  square10.display();

  monster.display();

  fill("white");
  text("Presiona varias veces espacio para darle fuerza al superheroe",10,20);
}
function keyPressed(){
  if(keyCode === 32){
    Matter.Body.applyForce(ball.body,ball.body.position,
			{x:-100,y:-90});
  }
}