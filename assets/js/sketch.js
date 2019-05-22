var x;
var xPos = 20;
var yPos = 20;
var a = 255;

function setup() {
    createCanvas(1024, 294);
}

function draw() {
    background(255);

    fill(0,230,0, a);
    noStroke();
    rect(50, 50, xPos, yPos);
    
    if(mouseIsPressed) {
        yPos++;
        a--;
    }
}