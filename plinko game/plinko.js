class Plinko{
    constructor(x,y,r){
var options={
    restitution:0.4,
    isStatic:true

             }

      this.r=r;
      
      this.body=Bodies.circle(x,y,this.r,options);
     // this.color=color(random(0,255),random(0,255),random(0,255));
      World.add(world,this.body);

    }
    display(){
   
   var pos=this.body.position;
   var angle=this.body.angle;

   push();
   translate(pos.x,pos.y);
   rotate(angle);
   noStroke();
  // FileList(this.color);
   ellipseMode(RADIUS);
   ellipse(0,0,this,r,this.r);
   pop()
   for (var j=40;j<=innerWidth;j=j+50)
{
  plinko.push(new Plinko(j,75));

}
for (var j =15;j<=width-10;j=j+50)
{
  plinko.push(new Plinko(j,175))
}






    }
}