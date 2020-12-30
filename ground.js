class ground{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.x=x;
        this.y=y;
        this.width=width
        this.height=height;
        this.ground=Bodies.rectangle(x,y,width,height,options)
        World.add(world,this.ground)
    }
    display(){
        var pos= this.ground.position
        rectMode(CENTER)
        fill("red")
        rect(pos.x,pos.y,this.width,this.height)
    }
}