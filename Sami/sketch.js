
// Mouse Right click is to draw rect.
//Mouse Left click is to draw ellipse or cricle.
// Mouse Center or wheel click is to draw triangle..
// Press Enter key to pick random background..
// press Shift key to reset the background to white.


function setup() {
  // create canvas aka create window...
  createCanvas(windowWidth, windowHeight);
  // to remove contextmenu ..
  document.addEventListener("contextmenu", event => event.preventDefault());





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
    // defined (no loop!!)
    let value = 225;
    let valueRandom;

    // background color Random...
    if (keyCode === ENTER){
      valueRandom = background(random(value));
  }
  // background white..
  if (keyCode === SHIFT){
    clear();
  }
 }
}
