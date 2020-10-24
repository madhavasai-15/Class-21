var fixedRect, movingRect;
var object1, object2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  fixedRect.velocityY = -4;
  movingRect = createSprite(600,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  movingRect.velocityY = 4;

  object1 = createSprite(200, 300, 50, 50);
  object1.velocityX = 3;
  object2 = createSprite(300, 300, 50, 50);
  object2.velocityX = -3;
}

function draw() {
  background(0,0,0);  
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;

  if(isTouching(movingRect, object1)){
    movingRect.shapeColor = "yellow";
    object1.shapeColor = "yellow";
  }
  else{
    movingRect.shapeColor = "blue";
    object1.shapeColor = "blue";
  }

  Bounce(object1, object2);
  Bounce(movingRect, fixedRect);
  
  drawSprites();
}




//return -- keyword which gives back a certain value from a function to the calling function
//return 150;
//return "Madhavasai"
//return g;

/*
ARGUMENTS
  - Real values given to a function while it is being called
  - Takes memory in the storage

PARAMETERS
  - Not real
  - They do not exist -- no memory
  - PLACEHOLDERS for arguments
*/