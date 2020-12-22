class Bob {
     constructor(x, y,diameter,color) {
       var options = {
        isStatic:false,
           'restitution':1,
           'friction':0,
           'frictionAir':0.0,
           'slop':1,
           'inertia':Infinity
      
       }
       this.x=x
       this.y=y
       this.diameter=diameter
       this.color=color
       this.body = Bodies.circle(this.x,this.y,this.diameter/2,options);
       
       
       World.add(world, this.body);
     }
     display(){
       var pos =this.body.position;
       var angle = this.body.angle;
       push();
       translate(pos.x, pos.y);
       rotate(angle);
       noStroke();
       fill(this.color);
       ellipse(0,0,60,60)
       pop();
     }
   };