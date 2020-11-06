class pendulum {

constructor(x,y,color){

var options = {

restitution :1,
friction : 0,
frictionAir : 0.0,
slop : 1,
inertia : Infinity

}

this.body = Bodies.rectangle(x,y,160,160,options);
this.x = x;
this.y = y;
this.color = color;
World.add(world,this.body);

}

display(){

var angle = this.body.angle;
var pos = this.body.position;

push ();
translate(pos.x,pos.y);
rotate (angle);
strokeWeight(7);
stroke("red");
fill (this.color);
ellipse(0,0,160,160);
pop ();

}


}