const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,ground2,ground3,ground4,ground5,ground6,block1,block2,block3,block4,block5,block6,block7;
var oct;

function setup() {
	createCanvas(1000, 500);
	engine = Engine.create();
	world = engine.world;
    Engine.run(engine);
    
    oct = new Bay(650,280,30,30);

    ground = new Block(205,300,150,10)
    ground2 = new Block(370,300,100,10)

    ground3 = new Block(500,10,1000,10)
    ground4 = new Block(500,490,1000,10)
    ground5 = new Block(10,10,10,1000)
    ground6 = new Block(990,250,10,1000)

    block1 = new Blockk(160,285,15,20)
    block2 = new Blockk(175,285,15,20)
    block3 = new Blockk(190,285,15,20)
    block4 = new Blockk(205,285,15,20)
    block5 = new Blockk(220,285,15,20)
    block6 = new Blockk(235,285,15,20)
    block7 = new Blockk(250,285,15,20)

    block8 = new Blockk(340,285,15,20)
    block9 = new Blockk(355,285,15,20)
    block10 = new Blockk(370,285,15,20)
    block11 = new Blockk(385,285,15,20)
    block12 = new Blockk(400,285,15,20)

    bloc1 = new Bloc(175,275,15,20)
    bloc2 = new Bloc(190,275,15,20)
    bloc3 = new Bloc(205,275,15,20)
    bloc4 = new Bloc(220,275,15,20)
    bloc5 = new Bloc(235,275,15,20)

    bloc6 = new Bloc(355,275,15,20)
    bloc7 = new Bloc(370,275,15,20)
    bloc8 = new Bloc(385,275,15,20)

    blo1 = new Blocm(190,265,15,20)
    blo2 = new Blocm(205,265,15,20)
    blo3 = new Blocm(220,265,15,20)

    blo4 = new Blocm(370,265,15,20)

    l = new Bl(205,225,15,20)

    thro = new SlingShot(oct.body,{x:650,y:280});

}

function draw() {
    Engine.update(engine);
    background(225);
    textFont("georgia");
    textSize(20)
    text("Please press Space-Bar to play again",160,200);

    thro.display();
    ground.display();
    ground2.display();
    ground3.display();
    ground4.display();
    ground5.display();
    ground6.display();

    oct.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();

    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();

    bloc1.display();
    bloc2.display();
    bloc3.display();
    bloc4.display();
    bloc5.display();

    bloc6.display();
    bloc7.display();
    bloc8.display();

    blo1.display();
    blo2.display();
    blo3.display();

    blo4.display();

    l.display();

}

function mouseDragged(){
    Matter.Body.setPosition(oct.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    thro.fly();
}

function keyPressed(){

    if(keyCode===32){
        Matter.Body.setPosition(oct.body,{x:650,y:280});
        thro.attach(oct.body);
    }
    }