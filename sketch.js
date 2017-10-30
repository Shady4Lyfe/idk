var newA;
var radius;

function setup() {
    createCanvas(1200, 800);
    newA = 0;
    radius = 6;
}


function draw() {
    // DRAW
    background(66, 183, 255); // Background
    fill(13, 255, 105); // Ground green
    rect(0, 600, innerWidth, innerHeight); // Ground
    
    fill(96, 71, 31); // Brown
    rect(width / 6, height / 2 - 80, 65, 280); // Tree trunk

    fill(28, 191, 60); // Leaf green
    ellipse(233, height / 2 - 80, 100, 100); // Static leaf
    ellipse(xRot(newA) - 40, yRot(newA), 100, 100); //  Left leaf
    ellipse(xRot(-newA) + 40, yRot(-newA), 100, 100); // Right leaf
    
    
    // LOGIC
    newA += 0.05;


}


function xRot(a) {
    var newXRot = 233 + cos(a) * radius;
    return newXRot;
}

function yRot(a) {
    var newYRot = height / 2 - 20 + sin(a) * radius;
    return newYRot;
}
