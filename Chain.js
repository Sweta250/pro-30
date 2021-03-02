class Chain{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:1
        }
        this.chain=Constraint.create(options);
        this.pointB=pointB;
World.add(world,this.chain);
    }
    attach(bodyA){
this.chain.bodyA=bodyA;
    }
    fly(){
        this.chain.bodyA=null;
    }

    display(){
        if(this.chain.bodyA){
            var pointA= this.chain.bodyA.position;
            var pointB= this.pointB;
            strokeWeight(4);
            stroke(234,123,34);
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }

    }
}