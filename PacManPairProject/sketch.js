// Akashdeep worked on checkGhost
// Sami worked on keyPressed
// everthing else was done by working together
// To play this game you have to use arrow key's.


let tiles;
let levelBackground;
let platform, coin, box, fly, p1, Red, empty, Blue, Orange, Pink;
let tilesHigh, tilesWide;
let tileWidth, tileHeight;
let levelToLoad;
let lines;
let playerX = 9;
let playerY = 16;
let RedX = 9;
let RedY = 8;
let BlueX = 4;
let BlueY = 1;
let OrangeX = 14;
let OrangeY = 1;
let PinkX = 1;
let PinkY = 20;
function preload() {
  //load level data
  levelToLoad = "assets/levels/0.txt";
  lines = loadStrings(levelToLoad);

  //load background
  levelBackground = loadImage("images/background.png");

  //load tile images
  platform = loadImage("images/Walls.png");
  coin = loadImage("images/food.png");
  box = loadImage("images/boxItem.png");
  p1 = loadImage("images/p1_front.png");
  Red = loadImage("images/Red.png");
  Blue = loadImage("images/Blue.png");
  Orange = loadImage("images/Orange.png");
  Pink = loadImage("images/Pink.png");
  empty = loadImage("images/empty.png");
}

function setup() {
  // keep this a 4:3 ratio, or it will stretch in weird ways
  createCanvas(500, windowHeight);

  tilesHigh = lines.length;
  tilesWide = lines[0].length;

  tileWidth = width / tilesWide;
  tileHeight = height / tilesHigh;

  tiles = createEmpty2dArray(tilesWide, tilesHigh);

  //put values into 2d array of characters
  for (let y = 0; y < tilesHigh; y++) {
    for (let x = 0; x < tilesWide; x++) {
      let tileType = lines[y][x];
      tiles[x][y] = tileType;
    }
  }
}

function draw() {
  display();
  gameTime();
}

function display() {
  image(levelBackground, 0, 0, width, height);

  for (let y = 0; y < tilesHigh; y++) {
    for (let x = 0; x < tilesWide; x++) {
      showTile(tiles[x][y], x, y);
    }
  }
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    // tiles[playerX= playerX -1][playerY] = tiles[9][16];
    // tiles[playerX][playerY] = tiles[0][12];
    if (tiles[playerX-1][playerY]!== "#") {
      tiles[playerX][playerY] = ".";
      tiles[playerX-=1][playerY] = "M";
    }

  }
  if (keyCode === RIGHT_ARROW) {
    if (tiles[playerX+1][playerY]!== "#") {
      tiles[playerX][playerY] = ".";
      tiles[playerX+=1][playerY] = "M";
    }
  }
  if (keyCode === UP_ARROW) {
    if (tiles[playerX][playerY-1]!== "#") {
      tiles[playerX][playerY] = ".";
      tiles[playerX][playerY-= 1] = "M";
    }
  }
  if (keyCode === DOWN_ARROW) {
    if (tiles[playerX][playerY+1]!== "#") {
      tiles[playerX][playerY] = ".";
      tiles[playerX][playerY+= 1] = "M";
    }
  }
}
function gameTime(){
  let timer = 200;
  textSize(30);
  textAlign(CENTER, CENTER);
  if (frameCount % 10 === 0 && timer >= 0) {
    timer --;
    checkGhost();

  }
  checkColli();
  if (timer === 0) {
    textSize(30);
  }
}

function checkColli(){
  if (tiles[playerX][playerY] !== "M" ) {
    background(255);
    textSize(30);
    text("GameOver", width/2, 100);
  }
}

function checkGhost(){
  if (tiles[RedX+1][RedY]!== "#") {
    tiles[RedX][RedY] = ".";
    tiles[RedX+=1][RedY] = "R";
  }
  else if (tiles[RedX-1][RedY]!== "#") {
    tiles[RedX][RedY] = ".";
    tiles[RedX-=6][RedY] = "R";
  }
  if (tiles[BlueX][BlueY+1]!== "#") {
    tiles[BlueX][BlueY] = ".";
    tiles[BlueX][BlueY+=1] = "B";
  }
  else if (tiles[BlueX][BlueY-1]!== "#") {
    tiles[BlueX][BlueY] = ".";
    tiles[BlueX][BlueY-=17] = "B";
  }
  if (tiles[OrangeX][OrangeY+1]!== "#") {
    tiles[OrangeX][OrangeY] = ".";
    tiles[OrangeX][OrangeY+=1] = "O";
  }
  else if (tiles[OrangeX+1][OrangeY]!== "#") {
    tiles[OrangeX][OrangeY] = ".";
    tiles[OrangeX][OrangeY-=17] = "O";
  }
  if (tiles[PinkX+1][PinkY]!== "#") {
    tiles[PinkX][PinkY] = ".";
    tiles[PinkX+=1][PinkY] = "P";
  }
  else if (tiles[PinkX+1][PinkY]=== "#") {
    tiles[PinkX][PinkY] = ".";
    tiles[PinkX-=15][PinkY] = "P";
  }
}



function showTile(location, x, y) {
  if (location === "#") {
    image(platform, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
  else if (location === "C") {
    image(coin, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
  else if (location === "S") {
    image(box, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
  else if (location === "F") {
    image(fly, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
  else if (location === "M") {
    image(p1, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
  else if (location === "R") {
    image(Red, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
  else if (location === "P") {
    image(Pink, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
  else if (location === "B") {
    image(Blue, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
  else if (location === "O") {
    image(Orange, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
  else {
    image(empty, x * tileWidth, y * tileHeight, tileWidth, tileHeight);
  }
}

function createEmpty2dArray(cols, rows) {
  let randomGrid = [];
  for (let x = 0; x < cols; x++) {
    randomGrid.push([]);
    for (let y = 0; y < rows; y++) {
      randomGrid[x].push(0);
    }
  }
  return randomGrid;
}
