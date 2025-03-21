let particles = [];
const GRAVITY = 0.1;


function setup() {
  createCanvas(800, 600);
  setupDebugConsole();
  background(0,0,0);
}

function draw(){
  background(0,0,0,20);
  //add if()
  if(mouseIsPressed){
    let p = new Particle(mouseX, mouseY)
    particles.push(p)
  }

  for(let i = particles.length -1;i >= 0;i--){
    particles[i].update();
    particles[i].display();
    if (particles[i].shouldDie()) {
      particles.splice(i, 1);//removes element at index i
    }
  }
}

class Particle {
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.xVelocity = Math.random()*5 - 2.5;
    this.yVelocity = -2 - Math.random()*2 - .5;
  }
  update(){
    this.x += this.xVelocity;
    this.y += this.yVelocity;
    this.yVelocity += GRAVITY;
  }
  display(){ 
    fill(0,255,0); 
    noStroke();
    ellipse(this.x, this.y, 15);
  }

  shouldDie(){
    return this.y > 650;
  }
}  