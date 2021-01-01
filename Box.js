class Box
{
	constructor(x,y,w,h)
	{
		var options={
			restituion:0.3			
			}
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var groundPos=this.body.position;		
            var angle=this.body.angle;
			push()
            translate(groundPos.x, groundPos.y);
            rotate (angle)
			rectMode(CENTER)
			strokeWeight(1);
			//fill("lightblue")
			rect(0,0,this.w, this.h);
			pop()
			
	}

}