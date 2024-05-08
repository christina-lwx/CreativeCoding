/*
  Check our the GOAL and the RULES of this exercise at the bottom of this file.
  
  After that, follow these steps before you start coding:

  1. rename the dancer class to reflect your name (line 35).
  2. adjust line 20 to reflect your dancer's name, too.
  3. run the code and see if a square (your dancer) appears on the canvas.
  4. start coding your dancer inside the class that has been prepared for you.
  5. have fun.
*/

let dancer;

function setup() {
  // no adjustments in the setup function needed...
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");

  // ...except to adjust the dancer's name on the next line:
  dancer = new alienDancer(width / 4, height*3 / 4);
}

function draw() {
  // you don't need to make any adjustments inside the draw loop
  background(0);
  drawFloor(); // for reference only

  dancer.update();
  dancer.display();
}

// You only code inside this class.
// Start by giving the dancer your name, e.g. LeonDancer.
class alienDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.scaleFactor = 0.5; 
    this.bodyColor = [220, 210, 140];
    this.strokeColor = [250, 220, 240];
    this.eyeColor = [220, 210, 120];
    this.faceColor = [190,190,240];
    this.shadowColor = [0, 0, 180, 100];
    this.mouthColor = [200, 0, 0, 250];
    this.angle = 0;
    this.easing=0.1;
     
    this.bounceHeight = 0;  
    this.swingWidth = 0; 
    this.bounceSpeed = 0.1;  
    this.swingSpeed = 0.1;  
    this.maxBounceHeight = 40;  
    this.maxSwingWidth = 40;  
    this.angle = 0;  
  }
  update() {
    // update properties here to achieve
    // your dancer's desired moves and behaviour
    this.angle += this.bounceSpeed;
    this.angle=this.angle%100;

    this.bounceHeight = sin(this.angle) * this.maxBounceHeight;
    this.swingWidth = cos(this.angle) * this.maxSwingWidth;
  }
  display() {
    // the push and pop, along with the translate 
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    translate(this.x, this.y);

    // ******** //
    // ⬇️ draw your dancer from here ⬇️



    scale(this.scaleFactor); 

    // Body
    noStroke();
    fill(this.bodyColor);
    ellipse(0, 0+this.bounceHeight, 70, 200); 

    // Arms
    push();
    translate(0,-30+this.bounceHeight);
    rotate(map(this.angle,0,100,-PI/12,PI/12));
    noFill();
    stroke(this.bodyColor);
    strokeWeight(15);
    arc(30, -0+this.bounceHeight, 70, 40, radians(270), 0+radians(400));
    arc(-30, -0+this.bounceHeight, 70, 40, radians(100), 0+radians(350));
    pop();


    // Face
    
    noStroke();
    fill(this.faceColor);
    circle(0,-130+this.bounceHeight,100);
    fill(this.eyeColor);

    arc(-20, -140+this.bounceHeight, 45, 50, radians(300), radians(420));
    arc(10, -140+this.bounceHeight, 45, 50, radians(300), radians(420));
    fill(this.shadowColor);
    arc(-20, -140+this.bounceHeight, 45, 50, radians(280), radians(300));
    arc(10, -140+this.bounceHeight, 45, 50, radians(280), radians(300));

    fill(this.mouthColor);
    rect(-25, -110+this.bounceHeight, 50, 10, 10);

    // Legs  
    noFill();
    stroke(this.strokeColor);
    strokeWeight(10);
    arc(0, 70+this.bounceHeight*0.6, 100, 100, radians(70), radians(110));
    arc(0, 90+this.bounceHeight*0.4, 100, 100, radians(70), radians(110));
    arc(0, 110+this.bounceHeight*0.2, 100, 100, radians(70), radians(110));

    pop();


    // ⬆️ draw your dancer above ⬆️
    // ******** //

    // the next function draws a SQUARE and CROSS
    // to indicate the approximate size and the center point
    // of your dancer.
    // it is using "this" because this function, too, 
    // is a part if your Dancer object.
    // comment it out or delete it eventually.
    // this.drawReferenceShapes()

    pop();
  }
  drawReferenceShapes() {
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);
    rect(-100, -100, 200, 200);
    fill(255);
    stroke(0);
  }
}



/*
GOAL:
The goal is for you to write a class that produces a dancing being/creature/object/thing. In the next class, your dancer along with your peers' dancers will all dance in the same sketch that your instructor will put together. 

RULES:
For this to work you need to follow one rule: 
  - Only put relevant code into your dancer class; your dancer cannot depend on code outside of itself (like global variables or functions defined outside)
  - Your dancer must perform by means of the two essential methods: update and display. Don't add more methods that require to be called from outside (e.g. in the draw loop).
  - Your dancer will always be initialized receiving two arguments: 
    - startX (currently the horizontal center of the canvas)
    - startY (currently the vertical center of the canvas)
  beside these, please don't add more parameters into the constructor function 
  - lastly, to make sure our dancers will harmonize once on the same canvas, please don't make your dancer bigger than 200x200 pixels. 
*/