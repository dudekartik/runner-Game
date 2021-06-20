var runner
var obstacle
var platform
var bullet
var coin
var ground

function setup() {
  createCanvas(displayWidth,displayHeight-50);
  runner = createSprite(100, displayHeight-130, 50, 50);
  ground = createSprite(displayWidth/2,displayHeight-100,displayWidth,10)

}

function draw() {
  background(0,0,0); 
  runner.collide(ground)

  if(keyDown("space")){
    runner.velocityY=-10
  }
  if(keyWentDown("s")){
    createBullet()
  }
  runner.velocityY=runner.velocityY+0.8
  console.log(runner.velocityY)
  drawSprites();
}

function createBullet(){
  bullet=createSprite(runner.x,runner.y,20,5)
  bullet.velocityX=20
}