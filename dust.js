class Dust {
    constructor (x,y,width,height) {
      var options = {
          isStatic:false,
          restitution:0,
          friction:0.5,
          density:0.5
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("dustbingreen.png")
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle
      push();
      translate(pos.x,pos.y);
      rectMode(CENTER);
      fill("purple");
      rect(this.image,0, 0, this.radius, this.radius);
      pop();
    }
  };
  