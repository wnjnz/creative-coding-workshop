var red =50;
var green =50;
var blue = 50;
var song;
var keywidth = 50;
var keyheight = 300;


function setup() {
    song = loadSound('assets/cheer.wav');
    createCanvas(400, 400);
     // Pick colors randomly
  
}

function draw() {
    background(127);
    strokeWeight(2);
    //stroke(red, green, blue);
    //fill(red, green, blue, 127);
   
    rect(50,50, keywidth, keyheight);
    rect(110,50, keywidth, keyheight);
    rect(170,50, keywidth, keyheight);
    rect(230,50, keywidth, keyheight);
    rect(290,50, keywidth, keyheight);



}

// When the user clicks the mouses
/*function mousePressed() { 
    // Pick new random color values
    red = random(255);
    green = random(255);
    blue = random(255);
    song.play();
  
}*/

//when the user presses the keyboard
function keyPressed(){
    if (keyCode==LEFT_ARROW){
        //redraw first rect
        red=random(255);
        green=random(255);
        blue=random(255);
        
        fill(red, green, blue, 127);

        rect(50,50, keywidth, keyheight);

        //play song
    }
}