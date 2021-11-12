var shark
var fish
var score=0
var ocean
var sharkImg
var oceanImg
var fishImg
var redfish
var redfishImg
var goldfish
var goldfishImg
var box
var boxImg
var gamestate=end
var endImg
var end
function preload() {
oceanImg = loadImage("Ocean.jpg")
sharkImg = loadImage("shark.png")
fishImg = loadImage("fish.png")
redfishImg = loadImage("redfish.png")
goldfishImg = loadImage("goldfish.png")
boxImg = loadImage("box.png")
endImg = loadImage("GameOver.png")
}
function setup() {
createCanvas(400,400)
ocean = createSprite(400,400,400,400)
shark = createSprite(80,160,20,50);
redfish = createSprite(300,200)
goldfish = createSprite(300,300)
fish = createSprite(300,100)
shark.addImage(sharkImg)
ocean.addImage(oceanImg)
redfish.addImage(redfishImg)
goldfish.addImage(goldfishImg)
//box.addImage(boxImg)
fish.addImage(fishImg)
//box.addImage(boxImg)
ocean.scale=2
shark.scale=0.25
goldfish.velocityX=-4
ocean.velocityX=-2
redfish.velocityX=-3
goldfish.velocityX=-4
fish.velocityX=-2
redfish.scale=0.2
goldfish.scale=0.3
fish.scale=0.2
}
function draw() {
background("white")
drawSprites()
var select_sprites = Math.round(random(1,4)); 
if (frameCount % 150 == 0) 
{
  var select_sprites = Math.round(random(1,4)); 

   if (select_sprites == 1) 
  { 
    createFish(); 
  } 
  else if (select_sprites == 2)
  {
    createGoldfish();
    }
  else if(select_sprites==3)
    { 
     createRedFish();
     } 

    else if (select_sprites == 4) 
 {
    createBox(); 
  } 
}
function createFish() {
  fish=createSprite(300,100);
  fish.addImage(fishImg)
  fish.y = Math.round(random(10,400))
  fish.lifetime = 200
  fish.scale=0.2
  fish.velocityX=-2
   }
function createGoldfish() {
goldfish=createSprite(300,300)
goldfish.addImage(goldfishImg)
goldfish.y = Math.round(random(10,400))
goldfish.lifetime = 200
goldfish.scale = 0.3
goldfish.velocityX=-4
}
function createRedFish() {
redfish=createSprite(300,200)
redfish.addImage(redfishImg)
redfish.y = Math.round(random(10,400))
redfish.lifetime = 200
redfish.scale = 0.3
redfish.velocityX=-4
}
function createBox() {
box=createSprite(300,350)
box.addImage(boxImg)
box.y = Math.round(random(10,400))
box.lifetime = 200
box.scale = 0.5
box.velocityX=-4
}
function gameOver() {
end=createSprite(200,200)
end.addImage(endImg)
}
if(box.isTouching(shark)) {
gameOver()
text("Click r to restart") 
}








if(keyDown("up")){
shark.y=shark.y+-5
}
if(keyDown("down")) {
shark.y=shark.y+5
}
text("Score:"+score,320,20)
if(ocean.x < 0 ){
    ocean.x = width/2;
  
  }

  if(shark.isTouching(fish)) {
    fish.destroy(shark)
    score=score+1
  }
 if(shark.isTouching(redfish)) {
   redfish.destroy(shark)
   score=score+3
 }
if(shark.isTouching(goldfish)) {
  goldfish.destroy(shark)
  score=score+5
}










}


