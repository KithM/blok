var angle = 0;
var rotationSpeed = 0.01;
var cubeSize = 200;

function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(200);
  noStroke();

  // Rotate the cube
  rotateX(angle);
  rotateY(angle * 1.3);
  rotateZ(angle * 0.7);
  angle += rotationSpeed;

  // Draw the cube
  fill(255, 0, 0);
  box(cubeSize);

  // Allow user to manipulate the cube
  if (mouseIsPressed) {
    var dx = mouseX - width/2;
    var dy = mouseY - height/2;
    rotateY(-dx * 0.01);
    rotateX(dy * 0.01);
  }
}
