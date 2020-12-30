class tree{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.x=x;
        this.y=y;
        this.width=width
        this.height=height;
        this.tree=Bodies.rectangle(x,y,width,height,options)
        World.add(world,this.tree)
        this.image=loadImage("Plucking Mangoes/tree.png")
    }
    display(){
        var pos= this.tree.position
        rectMode(CENTER)
        image(this.image,pos.x,pos.y,this.width,this.height)
    }
}