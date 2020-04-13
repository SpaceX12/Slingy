const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1, ground2, ground3;
var bullet;

var gameState = "readyToLaunch";

function setup(){
    var canvas = createCanvas(1100, 450);

    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(1050, 180, 18, 5);
    ground2 = new Ground(1050, 370, 21, 5);
    ground3 = new Ground(20, 370, 30, 5);

    bullet = new Bullet(200, 350);
    sling = new Sling(bullet.body, {x:200, y:350});
}    

function draw(){
    background(255, 255, 255);
    Engine.update(engine);
    
    ground1.display();
    ground2.display();
    ground3.display();

    bullet.display();
     
}

function mouseDragged(){
    if(gameState !== "deployed"){
        Matter.Body.setPosition(bullet.body, {x: mouseX , y: mouseY});
    }
}

function mouseReleased(){
    sling.fly();
    gameState = "deployed";
}

function keyPressed(){
    if(keyCode == 32){
        Matter.Body.setPosistion(bullet.body, {x:200, y:350})
        sling.attach(bullet.body)
        gameState = "readyToLaunch";
    }
} 