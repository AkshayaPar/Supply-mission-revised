// Creating variables
var helicopterIMG, helicopterSprite;
var packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function preload(){

// Loading the image of the helicopter
helicopterIMG=loadImage("helicopter.png")

// loading the package image 
packageIMG=loadImage("package.png")
}

function setup() {

// Creating the canvas
createCanvas(800, 700);
	
rectMode(CENTER);
	
// Creating sprite for the package
packageSprite=createSprite(width/2, 80, 10,10);
packageSprite.addImage(packageIMG)
packageSprite.scale=0.2

// creating sprite for the helicopter	
helicopterSprite=createSprite(width/2, 200, 10,10);
helicopterSprite.addImage(helicopterIMG)
helicopterSprite.scale=0.6

// Creating sprite for the ground
groundSprite=createSprite(width/2, height-35, width,10);
groundSprite.shapeColor=color(255)

// Creating the engine
engine = Engine.create();
world = engine.world;

// Creating a package body
packageBody = Bodies.circle(width/2 , 200 , 5 , {
restitution:3, 
isStatic:true});
World.add(world, packageBody);

var options = {
isStatic: true,
};
	
//Creating a Ground
ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
World.add(world, ground);


// TO RUN THE PHYSICS ENGINE
Engine.run(engine);
  
}

function draw() {
rectMode(CENTER);

// Setting the background
background(0);
  
packageSprite.x= packageBody.position.x 
packageSprite.y= packageBody.position.y 

// Drawing the sprites
drawSprites();
 
}

function keyPressed() {
 if (keyDown === DOWN_ARROW) {
Matter.Body.setStatic(packageBody, false);
}
}



