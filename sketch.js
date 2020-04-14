const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1, ground2, ground3, gun;
var bullet, box1, box2, box3, box4;

var gameState = "readyToLaunch";

function setup(){
    var canvas = createCanvas(1100, 450);

    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(1020, 180, 108, 10);
    ground2 = new Ground(1020, 380, 110, 10);
    ground3 = new Ground(550, 430, 1100, 20);

    bullet = new Bullet(150, 35, 10, 5);
    gun = new Rope(bullet.body, {x:200, y:350});

    box1 = new Target(1019, 379, 20, 50);
    box2 = new Target(1019, 379, 20, 50);
    box3 = new Target(1019, 179, 20, 50);
    box4 = new Target(1019, 179, 20, 50); 
}    

function draw(){
    background(0);
    Engine.update(engine);
    
    ground1.display();
    ground2.display();
    ground3.display();

    bullet.display();
    gun.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();

    text("Use the mouse to drag the bullet and release it to launch", 550, 20);
    text("Press space to reset the bullet", 550, 40);
}

function mouseDragged(){
    if(gameState !== "deployed"){
        Matter.Body.setPosition(bullet.body, {x: mouseX , y: mouseY});
    }
}

function mouseReleased(){
    gun.fly();
    gameState = "deployed";
}

function keyPressed(){
    if(keyCode == 32){
        Matter.Body.setPosition(bullet.body, {x:200, y:350})
        gun.attach(bullet.body)
        gameState = "readyToLaunch";
    }
} 