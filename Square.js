class Square{
    constructor(x,y){
     var options={
        "restitution":0.8,
        "friction":1.0,
        "density":1.0
     }
     this.body=Bodies.rectangle(x,y,50,50,options);
     this.width=50;
     this.height=50;
     World.add(world,this.body);
    }
    display(){
      var pos=this.body.position;
      
      push();
      fill("white");
      stroke("green");
      strokeWeight(3);
      rectMode(CENTER);
      rect(pos.x,pos.y,50,50);
      pop();
    }
}