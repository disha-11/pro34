var dog,happyDog,database,foods,foodstock;
var dogs;
var write;
var ref;
var read;
var food;


function preload()
{
dog=loadImage("images/Dog.png");
happyDog=loadImage("images/happydog.png");
}

function setup() {
  createCanvas(500, 500);
    database=firebase.database();
  dogs=createSprite(250,250,30,30);
  dogs.addImage(dog);
  dogs.scale=0.2;
  ref=database.ref("food").on("value",readstock);

  
}


function draw() {  
background(46,139,87);
if(keyDown(UP_ARROW)){
  writeStock(foods);
  dogs.addImage(happyDog);

}
drawSprites();
textSize(10);
fill ("white");
stroke ("green");
text ("press up arrow to feed the dog",150,150);
text ("foodstock :"+foods,150,170);

}

function readstock(data){
foods=data.val();

}
function writeStock(x){
 
  if(x=0){
x=0;
  }
  else{
    x=x-1;
  }
  database.ref("value").update({
    food:x
   })
}

