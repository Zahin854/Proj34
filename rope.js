class Sling{
    constructor(bodyA,pointB)
    {
        
        var option= {
            bodyA:bodyA,
            pointB:pointB,
        angularStiffness:1,
           stiffness:1,
           length:220
        }
        
        this.pointB=pointB;
        this.rope= Constraint.create(option)
        World.add(world,this.rope) 
    }
    display(){
      if(this.rope.bodyA){
        var pointA=this.rope.bodyA.position
        var pointB=this.pointB
        push();
        strokeWeight(3.5);
        line(pointB.x,pointB.y,pointA.x,pointA.y)
      pop();
    }
}
}