class Rope{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness: 0.04,
            length: 175
        }
        this.pointB = pointB;
        this.Rope = Constraint.create(options);
        World.add(world,this.Rope);
    }
    attach(body){
        this.Rope.bodyA = body;
    }
    fly(){
        this.Rope.bodyA = null;
    }
    display(){
        if(this.Rope.bodyA){
             var pointA = this.Rope.bodyA.position;
             var pointB = this.pointB;

        push();
        fill("black");
        //line(pointB.x,pointB.y,pointA.x,pointA.y);
        pop();
    }
  }
}