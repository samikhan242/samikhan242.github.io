let x = random(0, width);
let y = random(0, height);
let randomEllipseColor;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
// refrest rate
  frameRate (970);


  // that's a background that has been use as a rect because i want to create a fade out effect
  rect(0,0,windowWidth,windowHeight);

  // display random color
  fill(random(255), random(255), random(255));

  mouseDraw();
}


function mouseDraw(){
    // If mouse Is Pressed
    if (mouseIsPressed){
      // once mouse button left or right is click it will print or display the text or ellipse
      if (mouseButton === LEFT){
        // display text called hello with with paper
        fill(0);
        textSize(32);
        text("Hello", mouseX, mouseY);
        fill(255, 255, 255, 51);
      }
      if (mouseButton === RIGHT){
        // display ellipse with white wallpaper
        fill(0);
        ellipse(mouseX, mouseY, random(0,100), random(0,100));
        stroke(100);
        fill(255, 255, 255, 51);
      }
    }
    print(mouseButton);
}
