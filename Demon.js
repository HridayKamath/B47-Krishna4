/*class Demon extends BaseClass{
  constructor(x,y,height,angle){
    super(x,y,60,height,angle);
    this.image = loadImage("sprites/rakshas3.png");
    Matter.Body.setAngle(this.body, angle);
  }
}*/

class Demon {
  constructor(x, y,r) {

      var options ={
          restitution:0.4,
          friction: 0,
          isStatic:false
      }
      this.r=r;
    
      this.body = Bodies.circle(x, y, this.r,options);   
      this.image = loadImage("sprites/rakshas3.png");    
      this.color=color(10);
      World.add(world, this.body);

  }
  display() {

      var pos = this.body.position;
      

      push();
      translate(pos.x, pos.y);
     
      imageMode(CENTER);
      image(this.image, pos.x, pos.y, 60,60);
      
      pop();
  }

};