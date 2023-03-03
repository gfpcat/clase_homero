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
var fruit,rope;
var fruit_con;

var bg_img;
var food;
var homero_img;
var homero;
var button;

function preload()
{
  bg_img = loadImage('background.png');
  food = loadImage('png-clipart-homer-simpson-donuts-the-simpsons-tapped-out-bart-simpson-coffee-and-doughnuts-bart-simpson-cartoon-magenta.png');
  homero_img = loadImage('homero esperando gif.gif');
}

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;

  button = createImg("cut_button.png");
  button.position(200,30);
  button.size(50,50);
  button.mouseClicked(drop);

  homero = createSprite(250,600,100,100);
  homero.addImage(homero_img);
  homero.scale = 0.4;
  
  ground = new Ground(200,680,600,20);

  rope = new Rope(7,{x:245,y:30});
  fruit = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,fruit);

  fruit_con = new Link(rope,fruit);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  imageMode(CENTER);
  
}

function draw() 
{
  background(51);

  image(bg_img,width/2,height/2,490,690);

  image(food,fruit.position.x,fruit.position.y,70,70);
  rope.show();
  Engine.update(engine);
  ground.show();

  drawSprites();

 
   
}
  function drop(){
    rope.break();
    fruit_con.detach();
    fruit_con = null;
  }