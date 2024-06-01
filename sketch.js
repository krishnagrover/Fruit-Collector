var back_img
var database
var gameState=0
var allPlayers
var score=0
var player,form,game
var players,player1,player2
var fruits,fruitGroup
var fruit1_img,fruit2_img,fruit3_img,fruit4_img,fruit5_img
var player_img
var player1_score=0
var player2_score=0
var playerCount=0
var obstacles,obstacleImg,obstacleGroup

function preload(){
    back_img=loadImage("jungle.jpg")
    player_img=loadImage("basket2.png")
    fruit1_img=loadImage("apple2.png")
    fruit2_img=loadImage("banana2.png")
    fruit3_img=loadImage("melon2.png")
    fruit4_img=loadImage("orange2.png")
    fruit5_img=loadImage("pineapple2.png")
    fruitGroup=new  Group()
    obstacleImg=loadImage("mushroom.png")
}
 function setup(){
    database=firebase.database()
createCanvas(1000,600)
game=new Game()
game.getState()
game.start()
 }
  function draw(){
    background(back_img)
    if(playerCount===2){
    game.update(1)
    }

    if(gameState===1){
      clear()
      game.play()
    }

    if(gameState===2){
      game.end()
    }
  }