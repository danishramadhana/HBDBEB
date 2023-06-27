// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/CKeyIbT3vXI


var font;
var txt = "HAPPY BIRTHDAY";
var name = "NADIA PUTRI";
var fireworks = [];
var gravity;
var foto, bgStatic;

function preload() {
	foto = loadImage("assets/profile2.png");
	bgStatic = loadImage("assets/bg4.png");
  font - loadFont("assets/font/FredokaOne.ttf")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  gravity = createVector(0, 0.2);
  stroke(255);
  strokeWeight(4);
  background(0);
  
}


function draw() {
  colorMode(RGB);
	background(0,0,0,25);
	
  imageMode(CENTER);
  image(bgStatic, windowWidth / 2, windowHeight / 2, windowWidth / 1, windowHeight / 0.9);

  imageMode(CENTER);
  var imgX = width / 2;
  var imgY = height / 2;
  image(foto, imgX, imgY, 200, 200); // Gambar foto di tengah
  
  noFill();
  stroke(200, 120);
  strokeWeight(6);
  ellipse(imgX, imgY, 200, 200);

  push();
	fill(255);
	stroke(45, 28, 82);
	strokeWeight(7);
	textSize(45);
	textAlign(CENTER);

  text(txt, imgX + (width / 2) / 30, imgY - 150 + (height / 2) / 30);
  text(name, imgX + (width / 2) / 30, imgY + 200 + (height / 2) / 30);

  if (random(1) < 0.1) {
    fireworks.push(new Firework());
  }

  for (var i = fireworks.length - 1; i >= 0; i--) {
    fireworks[i].update();
    fireworks[i].show();

    if (fireworks[i].done()) {
      fireworks.splice(i, 1);
    }
  }
}