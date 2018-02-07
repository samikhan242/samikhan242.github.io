function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  fill("red")
  textSize(45);
}

function mouseClicked() {
  rect(mouseX,mouseY,100,100);
}

function keyPressed(){
  ellipse(mouseX,mouseY,100,100);
}

function deviceShaken() {
  text("word", mouseX, mouseY)
}
