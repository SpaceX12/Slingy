class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }

        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

    attach(body){
        this.rope.bodyA = body;
    }

    fly(){
        this.rope.bodyA = null;
    }

    display(){

        if(this.rope.bodyA && this.pointB ){
            var pointA = this.rope.bodyA.position;

            if(this.pointB){
                var pointB = this.pointB;
            }else{
                console.log("error")
            }

            var x = pointB.x;
            var y = pointB.y;
                        
            
            push();
            stroke(255, 255, 255);
            strokeWeight(10);
            
            if(pointA.x < 220) {
                strokeWeight(7);
                line(pointA.x - 20, pointA.y, pointB.x - 10, pointB.y);
                line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
            }
            else{
                strokeWeight(3);
                line(pointA.x + 25, pointA.y, pointB.x -10, pointB.y);
                line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3);
            }
            
            pop();
        }
    }
    
}