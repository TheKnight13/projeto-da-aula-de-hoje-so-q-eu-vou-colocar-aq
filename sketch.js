var animationD;
var animationC;
var dino;
var chao;
function setup(){
  dino = createSprite(100,100,20,20);
 chao = createSprite(10,180,10000,80);
  createCanvas(600,200);

dino.addAnimation("dino correndo mt brabo pq ele é um dino",animationD);
chao.addImage("chao mt brabo pq eu que to colocando",animationC);

dino.scale = 0.5












}

function draw(){
  background("white");
  drawSprites();

}
function preload(){
animationD = loadAnimation("trex1.png","trex3.png","trex4.png");
animationC = loadImage("ground2.png");

}


















