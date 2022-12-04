var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  pathImg=loadImage("path.png");
  jakeAnimation=loadAnimation("jake1.png","jake2.png","jake3.png","jake4.png");
}

function setup(){
  createCanvas(400,400);
  path=createSprite(200,200)
  path.addImage("path",pathImg)
  path.velocityY=-3
  path.scale=1.2;

//crear sprite de boy (niño)
  boy=createSprite(200,200,100,100)
  boy.addAnimation("jakeAnimation",jakeAnimation);
  boy.scale=0.7
  
// crear  left Boundary (límite izquierdo)
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible=false;
////establecer visibilidad como false (falso) para límite izquierdo

//crear right Boundary (límite derecho)
rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible=false
//establecer visibilidad como false (falso) para límite izquierdo
}

function draw() {
  background(0);
  path.velocityY = 4;
  boy.x=World.mouseX
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(rightBoundary);
  boy.collide(leftBoundary);
  // colisión de boy con los límites derecho e izquierdo invisibles 
  
  //código para reiniciar el fondo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
