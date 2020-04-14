class Bullet{
    constructor(x, y, width, height){
      var options = {
        restitution: 0.8,
        friction:0.5,
        density:1.2
      }
      
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = 10;
      this.height = 15;

      World.add(world, this.body);
    }
  
    display() {
      var pos= this.body.position;
      rectMode(CENTER);
      fill(55, 90, 82);
      rect(pos.x, pos.y, this.width, this.height);
    }
}