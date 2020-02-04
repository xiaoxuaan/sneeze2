let choo;
let ahh;

let corona = 0;

function setup() {
  createCanvas(400, 400);
  
  choo = loadImage ("images/tim_choo.JPG");
  ahh = loadImage ("images/tim_ah.JPG");
  
  soundFormats('wav');
  sneeze = loadSound('images/2sneeze1.wav');

}


function draw() {
   translate(width / 1, height / 40);
   rotate(PI / 180 * 90);
   imageMode(CENTER);

  
  if (corona == 1){
    image (choo,width/2, height/2,400,400);
  }else{
    image (ahh,width/2, height/2,400,400);
  }
  
} 
  function on(){
    corona = 1;
    print("Ah Choo!")
  }
    
  function off(){
    corona = 0;
    print("Watch out for the CoronaVirus!")
  }
 
  function mousePressed(){
    on();sneeze.play();
  }
  
  function mouseReleased(){
    off();
  }

function touchStarted(){
    on();sneeze.play();
  }
  
  function touchReleased(){
    off();
  }