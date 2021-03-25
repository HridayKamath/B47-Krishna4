class Pot extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.lifetime = 10;
    this.image = loadImage("sprites/pot1.png");
  }

};
