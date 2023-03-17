var path,mainCyclist;
var playe1,player2,player3;
var pathImg,mainRacerImg,mainRacerImg2;

var oppPink1Img,oppPink2Image;
var oppYellowImg1,oppYellowImg2;
var oppRedImg1,oppRedImg2;
var gameOverImg,cycleBell;

var pinkCG,yellowCG,redCG;

var END =0;
var PLAY =1;

var gamestate = PLAY;

var distance=0;
var gameOver, restart;

function preload(){
  pathImg = loadImage("Road.png");
  mainRacerImg1 = loadAnimation("mainPlayer1","mainPlayer.png");
  mainRacerImg2 = loadAnimation("mainPlayer3.png");

  oppPink1Img = loadAnimation("opponent1.png","opponent2.png");
  oppPink2Img = loadAnimation("opponent1.png","opponent.png");
  
  oppYellow1Img = loadAnimation("opponent4.png","opponent5.png")
  oppYellow2Img = loadAnimation("opponent6.png");

  oppRed1Img = loadAnimation("opponent7.png","opponent8.png");
  oppRed2Img = loadAnimation("opponent9.png");

  cycleBell = loadSound("bell.mp3");
  gameOverImg = loadImage("gameOver.png");
}

function setup(){
createCanvas(1200,300);
//Moving background
path=createSprite(100,150);
path.addImage(pathImg);
pathvelocityX = -5;

//creating boy running
mainCyclist = createSprite(70,150);
mainCyclist.addAnimation("SahilRunning",mainRacerImg1);
mainCyclist.scale=0.07;

//set collider for mainCyclist
mainCyclist.setCollider("rectangle",0,0,40,40);

gameOver = createSprite(650,150);
gameOver.addImage(gameOverImg);
gameOver.scale = 0.8;
gameOver.visible = false;

pinkCG = new Group();
yellowCG = new Group();
redCG = new Group();


}

function draw(){
  background(0);

  drawSprites
  textSize (20);
  Fill(255);
  text("disttance: "+ distance ,900,30);
  
  if(gameState===PLAY){
  
  distance = distance + Math.round(getFrameRate()/50);
  path.pathvelocityX = -(6 + 2*distance/150);

  mainCyclist.y = World.mouseY;

  edges = createEdgeSprite();
  mainCyclist.collide(edges);

  //code to play cycle bell sound
 if(path.x < 0 ){
  path.x = width/2
 }

 //code to play cycle bell sound
 if(keyDown("space")) {
  cycleBell.play(;)
 }

 //creating continous opponent players
 var select_oppPlayer = Math.round(random(1,3));

if (World.frameCounnt % 150 ==0) {
  if (selct_oppPlayer == 1) {
    pinkCyclists();
  } else if (select_oppPlayer == 2) {
    yellowCyclists();
  } else {
    redCyclists();
  }
}

if(pinkCG.isTouching(mainCyclist)){
    gameState = End;
    player1.velocityY = 0
    player1.addAnimation("opponentPlayer1",oppPink2Img):
} 

if(yellowCG.isTouching(mainCyclist)){
    gameState = END;
    player2.velocityY = 0;
    player2.addAnimation("opponentPlayer2",oppYellow2Img);
}

if(redCG.isTouching(mainCyclist)){
    gameState = END;
    player2.velocity = 0
    player2.addAnimation("opponentPlayer2",oppRedImg2);
} 
  }

  }else if (gameState === END) {
    gameOver.visible = true;

    textSize(20);
    fill(255);
    text("Press Up Arrow to Restart the game!", 500,200);

    path.velocityX = 0;
    mainCyclist.velocityY = 0;
    mainCyclist.addAnimation("SahilRunning",mainRacerImg2);

    pinkCG.setVelocityXEach(0);
    pinkCG.setLifetimeEach(-1);

    yellowCG.setVelocityXEach(0);
    yellowCG.setLifetimeEach(-1);

    redG.setVelocityXEach(0);
    redCG.setLifetimeEach(-1);

if(keyDown("UP_ARROW")) {
    reset();
}

}
}


















}















































































































































































































































































































































































































