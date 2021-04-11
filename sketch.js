var bg,cat,mouse;
var cat1,cat2,mouse1,mouse2,mouse3;

function preload() {
    //load the images here
    cat1 = loadAnimation("images/cat1.png");
    cat2 = loadAnimation("images/cat2.png");
    mouse1 = loadAnimation("images/mouse1.png");
    mouse2 = loadAnimation("images/mouse2.png");
    mouse3 = loadAnimation("images/mouse3.png");
    bg = loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(700,600);
    cat.addAnimation("cat",cat1);
    cat.addAnimation("cat2",cat2);
    cat.scale = 0.2;

    mouse = createSprite(200,600);
    mouse.addAnimation("mouse",mouse2);
    mouse.addAnimation("mouse2",mouse1);
    mouse.addAnimation("mouse3",mouse3);
    mouse.scale = 0.2;
    
    cat.debug = true;
    mouse.debug = true;

    cat.setCollider("rectangle",0,0,200,100);
    mouse.setCollider("rectangle",0,0,50,100);
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.isTouching(mouse)){
      cat.velocityX = 0;
      cat.changeAnimation("cat2",cat2);
      mouse.changeAnimation("mouse2",mouse1);
    }
    drawSprites();
}


function keyPressed(){
  if(keyCode===LEFT_ARROW){
      cat.velocityX = -3;
      mouse.changeAnimation("mouse3",mouse3);
  }
  //For moving and changing animation write code here  


}
