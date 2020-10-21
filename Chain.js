class Chain{
    constructor(bodyA,bodyB){
        var constraint_options={
            bodyA:bird.body,
            bodyB:log6.body,
            stiffness:0.04,
            lenght:10
        }
        this.chain = Constraint.create(constraint_options);
        World.add(world,this.chain);
    }
    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        strokeWeight(4);
        stroke("black");
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}