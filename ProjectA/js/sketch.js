var c = 1; //counter
var c2 = 0; //conter
var c3 = 0;
var len = 40;
var lenU = 40;
var lenD = 40;
var lenL = 40;
var lenR = 40;
var lenEye = 40;

// let message =
  "In order to protect your personal safety, please remember some rules before entering this laboratory:\n1.Please don't look Thaumiel in the eye.\n2.Don't ask, do not ask who Thaumiel is.\n3.Mustn't call the deity by the name of him.\n4.Mustn't wake him up.";let message =
    "In order to protect your personal safety, please remember the rules before entering this laboratory:\n1.	You are 100% safe in the dark, when he is asleep or told “sleep”.\n2.	Do everything you can to resist tentacles taking over your spirit. \n3.	Wake up the Eye of Lylis, and use the up and down, left and right to control the Eye of Lylis to repel them.\n4.	The Eye of Lylis is the origin of evil.";
let displayedLength = 0;
let textSpeed = 1; //
function setup() {
  let canvas = createCanvas(800, 500);
  canvas.id("p5-canvas");
  canvas.parent("p5-canvas-container");
  irisSize = height / 10;
  len = width / 50;
  lenD = width / 50;
  lenU = width / 50;
  lenL = width / 50;
  lenR = width / 50;
  lenEye = width / 80;
  textAlign(CENTER, CENTER);
  //frameRate(30); // 
}
function drawArm() {
  push();
  angleMode(RADIANS);
  c3 = 0;
  noStroke();
  translate(
    width / 2.0 + 0 * noise(c2 * 0.06, 0),
    height / 2.0 + 0 * noise(0, c2 * 0.06)
  );

  //bottom
  push();
  translate(2 * lenD, height / 2);
  rotate(-PI / 2);
  arm(lenD, c, "#4C0033", 1);
  pop();
  push();
  translate(-2 * lenD, height / 2);
  rotate(PI / 2);
  arm(lenD, c + 234, "#4C0033", -1);
  pop();

  push();
  translate(2 * lenD + width / 4, height / 2);
  rotate(-PI / 4);
  arm(lenD, c, "#4C0033", 1);
  pop();
  push();
  translate(2 * lenD - width / 4, height / 2);
  rotate(-PI / 4);
  arm(lenD, c, "#4C0033", 1);
  pop();

  //up
  push();
  translate((3 * lenU) / 2, -height / 2);
  rotate(PI / 2);
  arm(lenU, c + 150, "#422256", 1);
  pop();

  push();
  translate(-lenU, lenU - height / 2);
  rotate(-PI / 4);
  arm(lenU, c + 2960, "#422256", -1);
  pop();

  push();
  translate((3 * lenU) / 2 - width / 4, -height / 2);
  rotate(PI / 4);
  arm(lenU, c + 150, "#422256", 1);
  pop();

  push();
  translate(-lenU + width / 4, lenU - height / 2);
  rotate(-PI / 8);
  arm(lenU, c + 2960, "#422256", -1);
  pop();
  push();
  translate((3 * len) / 2 - width / 2, -height / 2);
  rotate(PI / 3);
  arm(lenU, c + 150, "#422256", 1);
  pop();

  push();
  translate(-lenU + width / 2, lenU - height / 2);
  rotate(-PI / 3);
  arm(lenU, c + 2960, "#422256", -1);
  pop();

  //left
  push();
  translate(lenL - width / 2 - width / 20, (3 * lenL) / 4);
  rotate(-PI / 8);
  arm(lenL, c + 1000, "#422256", 1);
  pop();
  push();
  translate(lenL - width / 2 - width / 20, (3 * lenL) / 4 - height / 4);
  rotate(PI / 4);
  arm(lenL, c + 1000, "#591C21", 1);
  pop();
  push();
  translate(lenL - width / 2 - width / 20, (3 * lenL) / 4 + height / 4);
  rotate(-PI / 4);
  arm(lenL, c + 1000, "#591C21", 1);
  pop();
  push();
  translate(lenL - width / 2 - width / 20, (3 * lenL) / 4 + height / 2);
  rotate(-PI / 3);
  arm(lenL, c + 1000, "#422256", 1);
  pop();
  push();
  translate(lenL + width / 2 - width / 20, (3 * lenL) / 4 + height / 2);
  rotate(-PI / 3);
  arm(lenL, c + 1700, "#422256", 1);
  pop();

  //right
  push();
  translate(-lenR + width / 2 + width / 20, (3 * lenR) / 4);
  rotate(PI / 6);
  arm(lenR, c + 1800, "#341010", -1);
  pop();
  push();
  translate(-lenR + width / 2 + width / 20, (3 * lenR) / 4 - height / 6);
  rotate(PI / 6);
  arm(lenR, c + 2800, "#341010", -1);
  pop();
  push();
  translate(-lenR + width / 2 + width / 20, (3 * lenR) / 4 - height / 3);
  rotate(PI / 6);
  arm(lenR, c + 800, "#341010", -1);
  pop();
  push();
  translate(-lenR + width / 2 + width / 20, (3 * lenR) / 4 + height / 3);
  rotate(PI / 6);
  arm(lenR, c + 1000, "#341010", -1);
  pop();

  c2 = c2 + 0.1;
  pop();
}
function drawEyeArm() {
  push();
  angleMode(RADIANS);
  c3 = 0;
  noStroke();
  translate(
    width / 2.0 + 0 * noise(c2 * 0.06, 0),
    height / 2.0 + 0 * noise(0, c2 * 0.06)
  );

  push();
  translate(2 * lenEye, -lenEye);
  rotate(-PI / 2);
  arm(lenEye, c + 100, "#420516", 1);
  pop();

  push();
  translate(-2 * lenEye, -lenEye);
  rotate(PI / 2);
  arm(lenEye, c + 534, "#420516", -1);
  pop();

  push();
  translate(2 * lenEye, 0);
  rotate(-PI / 4);
  arm(lenEye, c, "#420516", 1);
  pop();

  push();
  translate(-2 * lenEye, 0);
  rotate(PI / 4);
  arm(lenEye, c + 234, "#420516", -1);
  pop();

  push();
  translate((3 * lenEye) / 2, lenEye / 2);
  rotate(-PI / 8);
  arm(lenEye, c + 150, "#420516", 1);
  pop();

  push();
  translate((-3 * lenEye) / 2, lenEye / 2);
  rotate(PI / 8);
  arm(lenEye, c + 10, "#420516", -1);
  pop();

  push();
  translate(lenEye, (3 * lenEye) / 4);
  arm(lenEye, c + 1000, "#420516", 1);
  pop();

  push();
  translate(-lenEye, (3 * lenEye) / 4);
  //rotate(PI);
  arm(lenEye, c + 1800, "#420516", -1);
  pop();

  push();
  translate(lenEye, lenEye);
  rotate(PI / 4);
  arm(lenEye, c + 290, "#420516", 1);
  pop();

  push();
  translate(-lenEye, lenEye);
  rotate(-PI / 4);
  arm(lenEye, c + 2960, "#420516", -1);
  pop();

  push();
  translate(3 * lenEye, lenEye);
  rotate(PI / 4);
  arm(lenEye, c + 290, "#420516", 1);
  pop();

  push();
  translate(-3 * lenEye, lenEye);
  rotate(-PI / 4);
  arm(lenEye, c + 2960, "#420516", -1);
  pop();

  c2 = c2 + 0.1;
  pop();
}
let state = 0;
let state0Counter = 0;
let inputText = ""; 
let eyeFade = 0;
let offsetX = 0;
let offsetY = 0;
let maxOffsetX = 0 / 20;
let maxOffsetY = 0 / 20;
let offsetSpeed = 8;
let timesCounter=0;
function keyPressed() {
  maxOffsetY = width / 80;
  maxOffsetX = width / 80;
  if (key === " " && state == 1) {
    state = 2;
  } else if (keyCode === ENTER || keyCode === RETURN) {
    inputText=inputText.trim();
    if (inputText === "sleep") {
      state = 1;
      irisSize = height / 10;
      len = width / 50;
      lenD = width / 50;
      lenU = width / 50;
      lenL = width / 50;
      lenR = width / 50;
      lenEye = width / 80;
      eyeFade = 0;
      offsetX = 0;
      offsetY = 0;
      offsetSpeed = 5;
    }
    print(inputText);
    inputText = ""; 
  }
  else if (keyCode === BACKSPACE && inputText.length > 0) {
    inputText = inputText.substring(0, inputText.length - 1);
  } else if (keyCode === UP_ARROW) {
    offsetY -= offsetSpeed;
    if (offsetY < -maxOffsetY) {
      offsetY = -maxOffsetY;
    }
  } else if (keyCode === DOWN_ARROW) {
    offsetY += offsetSpeed;
    if (offsetY > maxOffsetY) {
      offsetY = maxOffsetY;
    }
  } else if (keyCode === LEFT_ARROW) {
    offsetX -= offsetSpeed;
    if (offsetX < -maxOffsetX) {
      offsetX = -maxOffsetX;
    }
  } else if (keyCode === RIGHT_ARROW) {
    offsetX += offsetSpeed;
    if (offsetX > maxOffsetX) {
      offsetX = maxOffsetX;
    }
  }
}

function keyTyped() {
  if (keyCode !== ENTER && keyCode !== RETURN && keyCode !== BACKSPACE && key !== " ") {
    inputText += key;
  }
}
function draw() {
  // clear screen
  background(15,20,35);
  if (state == 0) {
    textSize(20);
    fill(255);
    textSpeed = 1;
    if (displayedLength < message.length) {
      displayedLength += textSpeed;
    } else {
      state0Counter++;
      if (state0Counter > 240) {
        state0Counter = 0;
        displayedLength = 0;
        state = 1;
      }
    }

    text(
      message.substring(0, displayedLength),
      0 / 2,
      0 / 2,
      width - 20,
      height - 20
    ); 
  } else if (state == 1) {
    colorMode(RGB);
    angleMode(DEGREES);
    drawArm();
    if (frameCount % 2 == 0) {
      len += 0.1;
      if (len > width / 5) {
        len = width / 5;
      }
      console.log(len);
    }
    fill(255);
    textSize(40);
    if(timesCounter==0){
      text("Press the Space bar to wake me up", width / 2, height / 2);

    }
  } else if (state == 2) {
    timesCounter=1;
    eyeFade += 0.9;
    if (eyeFade >= 255) {
      eyeFade = 255;
    }
    colorMode(RGB);
    angleMode(DEGREES);

    fill(150, 255);
    ellipse(width / 2, height / 2, height / 4, height / 4);
    drawEyeArm();
    angleMode(DEGREES);
    // draw iris
    colorMode(HSB, 255, 255, 255, 255);
    var col = 255;
    var sat = random(132, 224);
    var stepSize = irisSize / 255;
    for (var i = 0; i < 256; i++) {
      fill(col, sat, 255 - i / 2, eyeFade);
      circle(
        width / 2 + offsetX,
        height / 2 + offsetY,
        2 * irisSize - i * stepSize
      );
    }

    push();
    noFill();
    strokeWeight(random(1, 2));
    stroke(15, random(32, 224), 255, 255);
    translate(width / 2 + offsetX * 1, height / 2 + offsetY * 1);
    var inc = random(1, 2);
    for (var a = 0; a < 360; a += inc) {
      rotate(inc);
      beginShape();
      var verLen = 0;
      while (verLen < irisSize) {
        vertex(verLen, random(-4, 4));
        verLen += random(5, 15);
      }
      endShape();
    }
    pop();

    // draw pupil
    noStroke();
    colorMode(RGB);
    fill(0, 255);
    circle(
      width / 2 + offsetX * 2,
      height / 2 + offsetY * 2,
      height / 16 + (height / 16) * noise(frameCount * 0.1)
    );
    fill(0, 255 - eyeFade);
    ellipse(width / 2, height / 2, height / 2, height / 2);
    drawArm();
    if (frameCount % 2 == 0) {
      let sp=0.03;
      if (offsetY > width / 100) {
        lenU -= 1;
        if (lenU < width / 50) {
          lenU = width / 50;
        }
      } else {
        lenU += sp;
        if (lenU > width / 5) {
          lenU = width / 5;
        }
      }

      if (offsetY < -width / 100) {
        lenD -= 1;
        if (lenD < width / 50) {
          lenD = width / 50;
        }
      } else {
        lenD += sp;
        if (lenD > width / 5) {
          lenD = width / 5;
        }
      }

      if (offsetX < -width / 100) {
        lenR -= 1;
        if (lenR < width / 50) {
          lenR = width / 50;
        }
      } else {
        lenR += sp;
        if (lenR > width / 5) {
          lenR = width / 5;
        }
      }

      if (offsetX > width / 100) {
        lenL -= 1;
        if (lenL < width / 50) {
          lenL = width / 50;
        }
      } else {
        lenL += sp;
        if (lenL > width / 5) {
          lenL = width / 5;
        }
      }
      if (eyeFade >= 254) {
        lenEye += sp;
        if (lenEye > width / 15) {
          lenEye = width / 15;
        }
      }
      //console.log(len);
    }
  }
}
function arm(len, c, col, dir) {
  if (len > 1) {
    fill(col);
    noStroke();
    ellipse(0, 0, 2 * len, 2 * len);
    //rotate(map(noise(c * 0.04, c2 * 0.04), 0, 1, PI / 180 * -25 * dir, PI / 180 * 35 * dir));
    rotate(
      map(
        noise((c - c2) * 0.04, 2),
        0,
        1,
        (PI / 180) * -25 * dir,
        (PI / 180) * 35 * dir
      )
    );

    translate((len / 2) * dir, 0);
    len = len * 0.95;
    c = c + 1;
    c3++;
    arm(len, c, col, dir);
    c3--;
    len = len / 0.95;
    c = c - 1;
    fill(60, 50, 50);

    translate((-len / 2) * dir, 0);
    //rotate(-map(noise(c * 0.04, c2 * 0.04), 0, 1, PI / 180 * -25 * dir, PI / 180 * 35 * dir));
    rotate(
      map(
        noise((c - c2) * 0.04, 2),
        0,
        1,
        (PI / 180) * 25 * dir,
        (PI / 180) * -35 * dir
      )
    );

    if (c3 % 2 == 0) {
      ellipse(0, len, len / 2, len / 6);
      //ellipse(0, len / 2, len / 2, len / 4);
    } else {
      if (c3 % 2 != 0) {
        ellipse(0, (3 * len) / 4, len / 2, len / 5);
      }
    }
  }
}

let lapse = 0; // mouse timer
function mousePressed() {
  len += 1;
}
