
var newA;
var radius;

function setup() {
    createCanvas(800, 600);
    newA = 0;
    radius = 80;
}


function draw() {
    background("white");

    fill(100);
    ellipse(xRot(newA), yRot(newA), 20, 20); //mercury
    newA -= 0.05;
    rad = 80;

    

}

function xRot(a) {
    var newXRot = width / 2 + cos(a) * radius;
    return newXRot;
}

function yRot(a) {
    var newYRot = height / 2 + sin(a) * radius;
    return newYRot;
}

