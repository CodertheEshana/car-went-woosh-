  var car;
  var car2;
  var car3;
  var ground;
  var ground2;
  var ground3;




function setup() {
  createCanvas(1600,450);
  car=createSprite(1500, 50, 40, 10);
  car.shapeColor="blue";
  car2=createSprite(1500, 200, 40, 10);
  car2.shapeColor="red";
  car3=createSprite(1500, 350, 40, 10);
  car3.shapeColor="green";
  ground=createSprite(200, 100, 2900, 10);
  ground2=createSprite(200, 250, 2900, 10);
  ground3=createSprite(200, 400, 2900, 10);

}

function draw() {
  background(125,155,135);  
    car.velocityX=-3;
    car2.velocityX=-3;
    car3.velocityX=-3;  
  drawSprites();
}