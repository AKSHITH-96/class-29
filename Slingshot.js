class SlingShot{
    constructor(bodyA, pointB){
        
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();

            stroke(48,22,8);
            
            
        if(pointA.x < 200){
            image(this.sling3,pointA.x-20,pointA.y-10,15,30);
            strokeWeight(5);
            line(pointA.x-20, pointA.y, pointB.x-20, pointB.y);
            line(pointA.x+20,pointA.y, pointB.x+20,pointB.y);      
        }    
        else{
            image(this.sling3,pointA.x+20,pointA.y-10,15,30);
            strokeWeight(8);
            line(pointA.x-20, pointA.y, pointB.x-20, pointB.y);
            line(pointA.x+20,pointA.y, pointB.x+20,pointB.y);   

        }
        pop();
        }
        
        image(this.sling1,200,20);
        image(this.sling2,170,20);
        //image(this.sling1,200,100);
    }
    
}