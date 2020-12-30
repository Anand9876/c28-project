class boy{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.boy=Bodies.rectangle(x,y,width,height,options)
        World.add(world,this.boy)
        this.image=loadImage("Plucking Mangoes/boy.png")
    }
    display(){
        var pos=this.boy.position
        rectMode(CENTER)
        image(this.image,pos.x,pos.y,this.width,this.height)
    }
}