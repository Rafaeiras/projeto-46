var bg,bgImg;
var player, shooterImg, shooter_shooting;
var coracao1, coracao2, coracao3;
var cor1img, cor2img, cor3img;
var zumbi;
var zumbiImg;
var zumbiGroup;

function preload(){
  shooterImg = loadImage('assets/shooter_2.png')
  shooter_shooting = loadImage ('assets/shooter_3.png')  
  bgImg = loadImage('assets/bg.jpeg')
  cor1img = loadImage("assets/heart_1.png")
  cor2img = loadImage("assets/heart_2.png")
  cor3img = loadImage("assets/heart_3.png")
  zumbiImg = loadImage("assets/zombie.png")
}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adicionando a imagem de fundo
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
  bg.addImage (bgImg)
  bg.scale = 1.1
  //criando o sprite do jogador
  player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
  player.addImage (shooterImg)
  player.scale = 0.3
  player.debug = true
  player.setCollider("rectangle",0,0,300,300)

  coracao1 = createSprite(displayWidth-150,40,20,20);
  coracao1.visible = false 
  coracao1.addImage("coracao1",cor1img)
  coracao1.scale = 0.4

  coracao2 = createSprite(displayWidth-100,40,20,20);
  coracao2.visible = false 
  coracao2.addImage("coracao2",cor2img)
  coracao2.scale = 0.4

  coracao3 = createSprite(displayWidth-150,40,20,20);
  coracao3.visible = true
  coracao3.addImage("coracao3",cor3img)
  coracao3.scale = 0.4

  zumbiGroup = new Group()
}

function draw() {
  background(0); 
 //movendo o jogador para cima e para baixo e tornando o jogo compatível com dispositivos móveis usando toques
  if(keyDown("UP_ARROW")||touches.length>0){
    player.y = player.y-30
  }
  if(keyDown("DOWN_ARROW")||touches.length>0){
    player.y = player.y+30
  }
  if(keyDown("LEFT_ARROW")||touches.length>0){
    player.x = player.x-30
  }
  if(keyDown("RIGHT_ARROW")||touches.length>0){
    player.x = player.x+30
  }

  //solte balas e mude a imagem do atirador para a posição de tiro quando a tecla de espaço for pressionada
  if(keyWentDown("space")){
    player.addImage(shooter_shooting) 
  }
  else if(keyWentUp("space")){
    player.addImage(shooterImg)
  }
  
  //o jogador volta à imagem original quando pararmos de pressionar a barra de espaço
  gerarzumbis();
  player.overlap(zumbiGroup, function(collector,collected){
    collected.remove();
  })
  drawSprites();

}
function gerarzumbis(){
if(frameCount%50==0){
zumbi = createSprite(width,random(100,500),40,40)
zumbi.addImage(zumbiImg)
zumbi.scale = 0.15
zumbi.velocityX = -3
zumbi.lifetime = width/3
zumbiGroup.add(zumbi)
zumbi.debug = true
zumbi.setCollider("rectangle",0,0,400,400)
}



}
