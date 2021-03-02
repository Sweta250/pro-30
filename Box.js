class Box
{
    constructor(x,y)
    {
        var options={
           restitution: 0.4
        }
        //this.x=x;
        //this.y=y;
        this.width=30
        this.height=40
        this.body=Bodies.rectangle(x,y,30,40,options);
        
    World.add(world,this.body);
    this.V=255
    }
    display(){
        if(this.body.speed<3){
            var pos = this.body.position;
            push();
            translate(pos.x,pos.y)
            rectMode(CENTER);
            //fill("brown");
            rect(0,0,this.width,this.height);
            pop();
            
        }
       else{
           World.remove(world,this.body)
           push()
           this.V=this.V-5
           tint(255,this.V)
           pop()
       }
    }
}