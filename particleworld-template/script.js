let particles = [];
let particlesFire = [];
let MAX_PARTICLES = 10; 
let GRAVITY = 0.1; 

function setup() {
  createCanvas(600, 400);
  
  for (let i = 0; i < MAX_PARTICLES; i++) {
    addParticle();
  }
}


function explode(x, y) {
  let col=color(random(255),random(255),random(255));
  for (let i = 0; i < 40; i++) {
    particlesFire.push(new Fireworks(x, y,col));
  }
}
function draw() {
  background(0, 10);

  
  while (particles.length < MAX_PARTICLES) {
    addParticle();
  }


  for (let i = particles.length - 1; i >= 0; i--) {
    let p = particles[i];
    p.update();
    p.edges();
    p.show();

  
    if (p.lifespan <= 0) {
      particles.splice(i, 1);
    } else {

      for (let j = i - 1; j >= 0; j--) {
        if (i != j && p.intersects(particles[j])) {
          particles.splice(i, 1);
          explode(p.x, p.y);
          break;
        }
      }
    }
  }
  

  for (let i = particlesFire.length - 1; i >= 0; i--) {
    let p = particlesFire[i];
    p.update();
    p.show();

    
    if (p.lifespan <= 0) {
      particlesFire.splice(i, 1);
    }
  }
}


function addParticle() {
  let x = random(width);
  let y = random(height);
  particles.push(new Particle(x, y));
}


class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vx = random(-2, 2);
    this.vy = random(-2, 2);
    this.lifespan = 255;
    this.dec = random(0.5, 3);
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    // this.vy += GRAVITY;  
    this.lifespan -= this.dec; 
  }

  edges() {
    if (this.x <= 0 || this.x >= width) this.vx *= -1;
    if (this.y <= 0 || this.y >= height) this.vy *= -1;
  }

  show() {
    noStroke();
    fill(255, this.lifespan);
    ellipse(this.x, this.y, map(this.lifespan, 255, 0, 5, 20));
  }
  
  intersects(other) {
    return dist(this.x, this.y, other.x, other.y) < 20;
  }
}
class Fireworks {
  constructor(x, y,col) {
    this.x = x;
    this.y = y;
    this.vx = random(-3, 3);
    this.vy = random(-3, 0); 
    this.lifespan = 200;
    this.col=col;
  }

  update() {
    this.vx *= 0.99; 
    this.vy += GRAVITY; 
    this.x += this.vx;
    this.y += this.vy;
    this.lifespan -= 4;
  }

  show() {
    noStroke();
    fill(this.col, this.lifespan);
    ellipse(this.x, this.y, 3);
  }
}
