const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box = new Box(800,200,50,50);
    ground = new Ground(200*3,height,1200,20);
    box2 = new Box(600,200,70,50);
    hammer = new Striker(600,200,100,100);
    cir = new Circle(610,200,50);
    circle1 = new Circle(610,200,10);
    circle2 = new Circle(615,200,10);
    circle3 = new Circle(620,200,10);
    circle4 = new Circle(625,200,10);
    circle5 = new Circle(630,200,10);
    circle6 = new Circle(635,200,10);
    circle7 = new Circle(640,200,10);
    circle8 = new Circle(645,200,10);
}

function draw(){
    background("yellow");
    Engine.update(engine);
    ground.display();
    box.display();
    box2.display();
    hammer.display();
    cir.display();
    circle1.display();
    circle2.display();
    circle3.display();
    circle4.display();
    circle5.display();
    circle6.display();
    circle7.display();
    circle8.display();

}