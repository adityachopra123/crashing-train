const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var coach1, coach2, coach3, coach4, coach5,coach6;

var rock;
var chain1, chain2, chain3, chain4, chain5;
var bg;
var flag;
var sound1,sound2;
function preload() {
    bg=loadImage("images/bg.jpg");
    sound1=loadSound("sound/train_crossing.mp3")
    sound2=loadSound("sound/train.mp3")
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    coach1= new Boggie(150,300,50,50);
    coach2= new Boggie(250,300,50,50);
    coach3= new Boggie(350,300,50,50);
    coach4= new Boggie(450,300,50,50);
    coach5= new Boggie(550,300,50,50);
    coach6= new Boggie(650,300,50,50);
    rock=new Rock(1000,360,80,80);
    chain1=new Chain(coach1.body,coach2.body)
    chain2=new Chain(coach2.body,coach3.body)
    chain3=new Chain(coach3.body,coach4.body)
    chain4=new Chain(coach4.body,coach5.body)
    chain5=new Chain(coach5.body,coach6.body)
}

function draw(){
    
    background(bg);
        
    Engine.update(engine);
    var collision=Matter.SAT.collides(coach6.body,rock.body)
    if(collision.collided){
flag=true

    }
    if(flag){
        textSize(50);
        fill("red");
        text("CRASHED",500,200)
        sound1.play()
    }
    ground.show();
    coach1.show();
    coach2.show();
    coach3.show();
    coach4.show();
    coach5.show();
    coach6.show();
       rock.show();
       chain1.show();
       chain2.show();
       chain3.show();
       chain4.show();
       chain5.show();
}
function keyPressed(){
    if(keyCode===RIGHT_ARROW){
       Matter.Body.applyForce(coach6.body, coach6.body.position, {x: 1, y : 0});
       sound2.play()
    }
}
