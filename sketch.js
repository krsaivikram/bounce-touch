var fixedobj,movingobj;

function setup() {
  createCanvas(800,400);
 fixedobj= createSprite(400, 200, 80, 50);
 movingobj=createSprite(250,200,50,80);
 fixedobj.shapeColor="blue";
 movingobj.shapeColor="blue";
}

function draw() {
  background(0,0,0);
  movingobj.x=World.mouseX;
  movingobj.y=World.mouseY;  
  if(movingobj.x-fixedobj.x<movingobj.width/2+fixedobj.width/2 && 
    fixedobj.x-movingobj.x <movingobj.width/2+fixedobj.width/2 &&
    movingobj.y-fixedobj.y<movingobj.height/2+fixedobj.height/2 && 
    fixedobj.y-movingobj.y <movingobj.height/2+fixedobj.height/2 ){
      fixedobj.shapeColor="green";
 movingobj.shapeColor="green";
    }
    else{
      fixedobj.shapeColor="blue";
 movingobj.shapeColor="blue";
    }
  drawSprites();
}