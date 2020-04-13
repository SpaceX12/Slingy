const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1, ground2, ground3;
var bullet, box1, box2, box3, box4;

var gameState = "readyToLaunch";

function setup(){
    var canvas = createCanvas(1100, 450);

    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(1020, 180, 108, 10);
    ground2 = new Ground(1020, 370, 110, 10);
    ground3 = new Ground(120, 430, 200, 20);

    bullet = new Bullet(200, 35);
    sling = new Sling(bullet.body, {x:200, y:350});

    box1 = new Target(1019, 375);
    box2 = new Target(1019, 375);
    box3 = new Target(1019, 175);
    box4 = new Target(1019, 165); 
}    

function draw(){
    background(0);
    Engine.update(engine);
    
    ground1.display();
    ground2.display();
    ground3.display();

    bullet.display();
    sling.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
     
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