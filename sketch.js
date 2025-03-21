let particles = [];
const GRAVITY = 0.1;


function setup() {
  createCanvas(800, 600);
  setupDebugConsole();
  background(0,0,0);
}

function draw(){
  //background uses rgba. setting alpha to 20/255 creates the fading affect
  background(0,0,0,20);
 
  //mouseX, mouseY, mouseIsPressed all supplied by p5.js library
  if(mouseIsPressed){
    let p = new Particle(mouseX, mouseY)
    particles.push(p)
  }

  //loops over your particles to display, move, and remove them
  //backwards to prevent index skipping after deletions
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
    //STEP 4 - CREATE two variables to keep track of velocity. One for x and one for y

    //BONUS STEP - add randomized color by choosing random values r, g, b
  }

  update(){
    //STEP 5 - add velocities to x and y values. 
    //add gravity to the y velocity. 
  }
  display(){ 
    //IF DOING BONUS STEP, use rgb vals here. 
    fill(0,255,0); 
    noStroke();
    ellipse(this.x, this.y, 15);
  }

  shouldDie(){
    //STEP 6 - return true if y is off the screen. 
    return false;
  }
}  