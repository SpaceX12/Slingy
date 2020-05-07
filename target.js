class Target{
    constructor(x, y, width, height){
        var options = {
            friction:2.0,
        }
        
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = 20;
        this.height = 30;  

        World.add(world, this.body);
    }

    display(){
        if(this.body.speed < 3){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("red");
        rect(pos.x, pos.y, this.width, this.height);   
        }
        else{
            World.remove(world, this.body);
            push();
            this.Visiblity = this.Visiblity - 5;
            tint(255,this.Visiblity);
            pop();
        }
    }
}