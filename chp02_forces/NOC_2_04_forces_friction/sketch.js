// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

var movers = [];

function setup() {
  createCanvas(640, 360);
  for (var i = 0; i < 20; i++) {
    movers[i] = new Mover(random(1, 4), random(width), 0);
  }
}

function draw() {
  background(51);
  
  for (var i = 0; i < movers.length; i++) {
    var wind = createVector(0.01, 0);
    var gravity = createVector(0, 0.1*movers[i].mass);

    var c = 0.01;
    var normal = 1;
    var frictionMag = c * normal;
    var friction = movers[i].velocity.get();
    friction.mult(-1);
    friction.normalize();
    friction.mult(frictionMag);


    movers[i].applyForce(friction);
    movers[i].applyForce(wind);
    movers[i].applyForce(gravity);
    movers[i].update();
    movers[i].display();
    movers[i].checkEdges();
  }
}