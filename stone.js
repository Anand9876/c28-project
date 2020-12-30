class stone{
    constructor(x,y,width,height){
      var options={
          isStatic:true,
         /* restitution:0,
          friction:1,
          density:1.2*/
      }
      this.x=x;
      this.y=y;
      this.width=width;
      this.height=height;
      this.stone=Bodies.rectangle(x,y,width,height,options)
      World.add(world,this.stone)
      this.image=loadImage("Plucking Mangoes/stone.png")
    }
    display(){
        var pos=this.stone.position
        translate(pos.x,pos.y)
        rectMode(CENTER)
        push();
        image(this.image,pos.x,pos.y,this.width,this.height)
        pop();
    }
}