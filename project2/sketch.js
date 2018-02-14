
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  noStroke()
  if (mouseIsPressed) {
   if (mouseButton === LEFT) {
    fill(random(225), random(225), random(225), random(225));
    ellipseMode(CENTER);
    ellipse(mouseX, mouseY, 50, 50);
  }

  if (mouseButton === RIGHT) {
   fill(random(225), random(225), random(225), random(225));
   rectMode(CENTER);
   rect(mouseX, mouseY, 50, 50);
   }

 if (mouseButton === CENTER) {
    fill(random(225), random(225), random(225), random(225));
    triangle(mouseX-50, mouseY+50, mouseX, mouseY, mouseX+50, mouseY+50);
 }
   print(mouseButton);
 }

  if (keyIsPressed) {
    if (keyCode === ENTER){
      background(random(0, 225));
    }
  
  }

}
