
function setup() {
  createCanvas(windowWidth, windowHeight);
  document.addEventListener("contextmenu", event => event.preventDefault())
}
function draw() {
  // to remove borders;
  noStroke()
  // mouse Pressed;
  if (mouseIsPressed) {
    // Left Click for Circle;
   if (mouseButton === LEFT) {
    fill(random(225), random(225), random(225), random(225));
    ellipseMode(CENTER);
    ellipse(mouseX, mouseY, 50, 50);
  }
// Right Click for rect;
  if (mouseButton === RIGHT) {
   fill(random(225), random(225), random(225), random(225));
   rectMode(CENTER);
   rect(mouseX, mouseY, 50, 50);
   }
// Center or wheel click for triangle;
 if (mouseButton === CENTER) {
    fill((random(225)), (random(225)), (random(225)), (random(225)));
    triangle(mouseX-50, mouseY+50, mouseX, mouseY, mouseX+50, mouseY+50);
 }
   print(mouseButton);
 }
// Key Pressed;
  if (keyIsPressed) {
    if (keyCode === ENTER){
      background(random(225));
    }

  }

}
