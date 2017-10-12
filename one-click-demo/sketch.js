var red;
var green;
var blue;
var song;

function setup() {
      song = loadSound('assets/cheer.wav');

  createCanvas(720, 400);
  // Pick colors randomly
  red = random(255);
  green = random(255);
  blue = random(255);
}

function draw() {
    background(127);
  // Draw a circle
    strokeWeight(2);
    stroke(red, green, blue);
    fill(red, green, blue, 127);
  
    ellipse(360, 200, 200, 200);
    
}

// When the user clicks the mouses
function mousePressed() { 
    // Pick new random color values
    red = random(255);
    green = random(255);
    blue = random(255);
    song.play();
  
}