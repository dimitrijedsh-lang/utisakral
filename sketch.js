let currentChar = 'a';    (pečat)
let stamps = [];         

let bgColors = [];       
let bgIndex = 0;         

function setup() {
  createCanvas(windowWidth, windowHeight);

  textAlign(CENTER, CENTER);
  textSize(64);

  bgColors = [
    color(180, 30, 60),   
    color(40, 80, 200),   
    color(245, 230, 60)   
  ];
}

function draw() {
  background(bgColors[bgIndex]);

  for (let i = 0; i < stamps.length; i++) {
    let s = stamps[i];
    fill(0);
    text(s.char, s.x, s.y);
  }
}

function mousePressed() {
  stamps.push({
    char: currentChar,
    x: mouseX,
    y: mouseY
  });
}

function keyPressed() {

    if (key.length === 1 && key.match(/[a-zA-Z]/)) {
    currentChar = key.toLowerCase();
  }

  if (keyCode === 32) {
    bgIndex++;
    if (bgIndex >= bgColors.length) {
      bgIndex = 0;
    }
  }

  if (keyCode === BACKSPACE) {
    stamps.pop();
  }

  if (keyCode === DELETE) {
    stamps = [];
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
