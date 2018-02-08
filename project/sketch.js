function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  textSize(45);
  noStroke();
}

function mouseClicked() {
  fill(random(225), random(225), random(225), random(225));
  rect(random(0, width),random(0, height),random(100),random(100));
}

function keyPressed(){
  fill(random(225), random(225), random(225), random(225));
  ellipse(random(0, width),random(0, height),random(100),random(100));
}

function deviceShaken() {
  fill(0)
  text("word",random(0, width) , random(0, height));
}
