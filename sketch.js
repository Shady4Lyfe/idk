var newA;
var radius;

function setup() {
    createCanvas(1200, 800);
    newA = 0;
    radius = 80;
}


function draw() {
    background(66, 183, 254);
    
    fill(100);
    rectMode(CENTER);
    rect(xRot(newA), yRot(newA), random(25, 100), random(25, 100)); 
    newA -= 0.05;
    rad = 80;

    

}

function xRot(a) {
    var newXRot = width/2 + cos(a) * radius;
    return newXRot;
}

function yRot(a) {
    var newYRot = height/2 + sin(a) * radius;
    return newYRot;
}

