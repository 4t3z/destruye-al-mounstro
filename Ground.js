class Ground{
    constructor(x,y){
        var options={
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,700,10,options);
        this.width=width;
        this.height=10;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;

        push();
        fill("brown");
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,10);
        pop();
    }
}