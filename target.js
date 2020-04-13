class Target{
    constructor(x, y, width, height){
        var options = {
            restitution:0.9,
            friction:1.0,
            density:0.5
        }
        this.body = this.Bodies.rectangle(x, y, width, height, options);
        this.width = 10;
        this.height = 5;  

        World.add(world, this.body);
    }

    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("red");
        rect(pos.x, pos.y, this.width, this.height);
    }
}