const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg;
var chakra, slingShot;

var score;

var weapons = [];
var demons = [];

function preload() {
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    score = 0;
    ground = new Ground(600,height,1200,20);
    

    pot1 = new Pot(700,320,70,70);

    box2 = new Pot(920,320,70,70);
   

   // demon1 = new Demon(810,260,300, PI/2);

    box3 = new Pot(700,240,70,70);
    box4 = new Pot(920,240,70,70);
   

    log3 =  new Weapon(810,180,300, PI/2);

    box5 = new Pot(810,160,70,70);
    log4 = new Demon(760,120,150, PI/7);
    log5 = new Demon(870,120,150, -PI/7);

    chakra = new SudarshanChakra(200,10);

    log6 = new Demon(230,180,80, PI/2);
    slingshot = new SlingShot(chakra.body,{x:200, y:50});



    
    

    
}
 


function draw(){
    
    background("skyblue");
    
    Engine.update(engine);
    textSize(15);
    text("SCORE: " +score,50,50);
    strokeWeight(4);


    

    pot1.display();
    box2.display();
    ground.display();
    
    //demon1.display();

    box3.display();
    box4.display();
    
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    chakra.display();

    
    
    slingshot.display(); 
    
    if(frameCount%100===0){
       weapons.push(new Weapon(random(300, 200), 10,10));
        score++;
      }
    
     for (var j = 0; j < weapons.length; j++) {
      
        weapons[j].display();
      }

      if(frameCount%100===0){
        demons.push(new Demon(random(300, 200), 10,10));
         score++;
       }
     
      for (var k = 0; k< demons.length; k++) {
       
         demons[k].display();
       }

      // detectCollision(chakra,weapons);

   
}

function mouseDragged(){
    Matter.Body.setPosition(chakra.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
    
}

function detectCollision(chakra,weapons){

    weaponsBodyPosition = weapons.body.position;
     chakraBodyPosition = chakra.body.position;
     
     var distance = dist(chakraBodyPosition.x, chakraBodyPosition.y, weaponsBodyPosition.x, weaponsBodyPosition.y);
     if(distance<=weapons.r+chakra.r)
     {
         Matter.Body.setStatic(weapons.body,false);
     }
     
     
     }