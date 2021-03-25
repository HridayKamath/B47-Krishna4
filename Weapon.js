/*class Weapon extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/weapon5.png");
  }

};*/

/*class Weapon {
  constructor(x, y) {
      var options = {
          restitution: 1,
          friction: 0,
          isStatic:true
      }
      this.r = 10;
      this.body = Bodies.circle(x, y, this.r, options);
      
      World.add(world, this.body);
  }
  display() {

      var pos = this.body.position;
      var angle = this.body.angle;

      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      noStroke();
      fill("white");
      ellipseMode(RADIUS);
      ellipse(0,0,this.r,this.r);
      pop();
  }

};*/

class Weapon {
  constructor(x, y,r) {

      var options ={
          restitution:0.4,
          friction: 0,
          isStatic:false
      }
      this.r=r;
    
      this.body = Bodies.circle(x, y, this.r,options);   

      
      this.image = loadImage("sprites/weapon5.png");    
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