class Ball{
	constructor(x,y,r){
	 var options={
		"restitution":0.8,
		"friction":1.0,
		"density":10.0
	 }
	 this.x=x;
	 this.y=y;
	 this.r=r;
	 this.image=loadImage("superhero2.png");
	 this.body = Bodies.circle(this.x,this.y,(this.r-150)/2,options);
	 World.add(world,this.body);
	}
	display(){
	var pos = this.body.position;

	  push();
	  imageMode(CENTER);
	  image(this.image,pos.x,pos.y,this.r,this.r);
	  pop();
	}
 }