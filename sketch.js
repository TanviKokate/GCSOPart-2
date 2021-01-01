var car, wall;
var speed, weight;

function setup() {
  createCanvas(800,400);
  speed = random(55 , 90);
  weight = random(400 ,720);
  
  car  = createSprite(50, 200, 40, 40);
  car.velocityX = speed;
  car.shapeColor = "white";
  
  wall = createSprite(720, 200, 50, height/2);
  wall.shapeColor = color(86, 16, 10);
}

function draw() {
  background(100, 10, 180);  
  if (wall.x - car.x < (car.width + wall.width)/2){
     car.velocityX = 0;
     var deformation = 0.5*weight*speed*speed/22509;
     if (deformation > 180){
       car.shapeColor = color(255, 0, 0);
     }
     if (deformation < 180 && deformation > 100){
       car.shapeColor = color(230, 230, 0);
     }
     if (deformation < 100){
       car.shapeColor = color(0, 255, 0);
     }
  }
  drawSprites();
}