import p5 from 'p5';

export default function sketch(p){
//instantiating my variables
let particles = [];
let particleAmount = 10;

//creating canvas and pushing particle constructor to array
p.setup = function() {
  p.createCanvas(window.innerWidth, window.innerHeight);
  for(let i = 0; i < particleAmount; i++){
    particles[i] = new Particle(i*35); 
  }
}

//looping through particles array, once particle lifespan is over
//create new particle generation
p.draw = function() {
  p.background(255);
  
   for(let i = 0; i < particles.length; i++){
    particles[i].display();
    particles[i].update();
     if(particles[i].lifespanOver()){
      for(let j = 0; j < particleAmount; j++){
        particles[j] = new Particle(j*35);
      }
    } 
  }   
}

//if windows is resized change the width and height
//TODO: restart animation when the window is resized
p.windowResized = function(){
    p.resizeCanvas(window.innerWidth, window.innerHeight)
    for(let i = 0; i < particleAmount; i++){
      particles[i] = new Particle(i*35); 
    }
}

//create constructor
function Particle(angle) {
  this.position = p.createVector(p.width/2, p.height/2);
  this.velocity = p.createVector(0, 0);
  this.acceleration = p5.Vector.fromAngle(p.radians(angle), 0.015);
  this.size = 80;
  
  this.lifespan = 255;

  
  this.update = function(){
    this.position.add(this.velocity);
    this.velocity.add(this.acceleration);
    this.lifespan-=0.75;
  }
  
  this.lifespanOver = function() {
    if(this.lifespan <= 0){
       return true;
    } else {
      return false;
    }
  }
  
  this.display = function() {
    p.fill(85, 85, 85, 75);
    p.noStroke();
    p.ellipse(this.position.x, this.position.y, this.size, this.size);
  }
  
}
}