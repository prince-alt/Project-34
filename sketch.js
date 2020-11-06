const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bobdiameter,bobx,boby;
var p1,p2,p3,p4,p5;
var r1,r2,r3,r4,r5;

function preload() {
    
}

function setup(){

    var canvas = createCanvas(1200,700);

    bobdiameter = 80;
    bobx = width/2;
    boby = height/10 + 400;

    engine = Engine.create();
    world = engine.world;

    p1 = new pendulum(bobx,boby,"pink");
    p2 = new pendulum(bobx+bobdiameter*2,boby,"pink");
    p3 = new pendulum(bobx+bobdiameter*4,boby,"pink");
    p4 = new pendulum(bobx-bobdiameter*2,boby,"pink");
    p5 = new pendulum(bobx-bobdiameter*4,boby,"pink");

    r1 = new sling(p1.body,{x:bobx,y:boby-400});
    r2 = new sling(p2.body,{x:bobx+bobdiameter*2,y:boby-400});
    r3 = new sling(p3.body,{x:bobx+bobdiameter*4,y:boby-400});
    r4 = new sling(p4.body,{x:bobx-bobdiameter*2,y:boby-400});
    r5 = new sling(p5.body,{x:bobx-bobdiameter*4,y:boby-400});
  

}

function draw(){

    background("teal");
    
    Engine.update(engine);

    p1.display();
    p2.display();
    p3.display();
    p4.display();
    p5.display();

    r1.display();
    r2.display();
    r3.display();
    r4.display();
    r5.display();
    
}

function mouseDragged(){
    
        Matter.Body.setPosition(p5.body, {x: mouseX , y: mouseY});
        //Matter.Body.setPosition(p4.body, {x: mouseX , y: mouseY});
        //Matter.Body.setPosition(p3.body, {x: mouseX , y: mouseY});
       //Matter.Body.setPosition(p2.body, {x: mouseX , y: mouseY});
       // Matter.Body.setPosition(p1.body, {x: mouseX , y: mouseY});
    
}





