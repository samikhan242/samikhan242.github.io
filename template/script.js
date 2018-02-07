function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);

  drawStickman(mouseX, mouseY);
  drawStickman(100, 200);
}

function drawStickman(x, y) {
  //body
  line(x, y, x, y+200);

  // head of the stickman
  fill(255, 255, 255);
  ellipse(x, y, 100, 100);

  // hat
  fill(255, 0, 0);
  rect(x-50, y-80, 100, 30);
  rect(x-25, y-130, 50, 50);

  // arms
  line(x-50, y+100, x+50, y+100);

  // legs
  line(x, y+200, x-50, y+250);
  line(x, y+200, x+50, y+250);
}
