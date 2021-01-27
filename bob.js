class Bob{
    constructor(x,y,radius){
var options = {
    isStatic: false,
    restitution: 0.3,
    friction: 0.5,
    density: 1.2
}
this.body = Bodies.circle(x,y,radius,options);
this.radius = radius;
World.add(world,this.body);
    }
    display(){
var a = this.body.position;
push();
translate(a.x,a.y);
ellipseMode(CENTER);
ellipse(0,0,this.radius);
pop();
    }
}