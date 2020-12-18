class Block {
  constructor(x,y,height,width) {
    var options = {
      restitution: 0.8,
      friction: 1.0
    }
    this.x=x;
    this.y=y;
    this.height = height;
    this.width = width;
    this.Visibility = 255
    this.body = Bodies.rectangle(this.x,this.y,this.height,this.width);

    World.add(world,this.body);
  }

  display() {
    console.log(this.body.speed);
    if(this.body.speed < 6) {
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0,0,this.height,this.width);
      pop();
    }

    else{
      World.remove(world,this.body);
      push();
      this.Visibility = this.Visibility-5;
      pop();
    }

  }
}
