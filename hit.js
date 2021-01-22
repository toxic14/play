class SlingShot{
    constructor(bodyA,pointB){
    var options = {
    bodyA:bodyA,
    pointB:pointB,
    length:4,
    stiffness:0.04
    }
    this.pointB=pointB;
    this.Sling=Matter.Constraint.create(options)
    World.add(world,this.Sling);
    
    }
    display(){
    
        if(this.Sling.bodyA){
    
        var posA=this.Sling.bodyA.position;
        var posB=this.pointB;
    
        push()
        line(posA.x,posA.y,posB.x,posB.y)
        pop()
        }
    }

    fly(){
    
        this.Sling.bodyA=null;
    
    }

attach(obj){
    
    this.Sling.bodyA=obj;

}
}
