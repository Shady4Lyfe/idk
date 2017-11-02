// Animation

var newAngle;
var radius;
var r;
var g;
var b;
var randArray = [];

function setup() {
    createCanvas(1200, 800);
    newAngle = 0;
    radius = 5;
    r = 66;
    g = 210;
    b = 255;
    for (var i = 0; i < width; i++) { // Allows to loop the push
        randArray.push(random(560, 600)); // Pushes numbers into array
    }
}


function draw() {
    // DRAW
    background(r, g, b); // Background
    stroke(0);
    fill(13, 225, 105); // Ground green
    rect(0, 600, innerWidth, innerHeight); // Ground

    fill(96, 71, 31); // Brown
    rect(width / 6, height / 2 - 80, 65, 280); // Tree trunk

    fill(28, 191, 60); // Leaf green
    ellipse(233, height / 2 - 80, 100, 100); // Static leaf
    ellipse(xRot(newAngle) - 40, yRot(newAngle), 100, 100); //  Left leaf
    ellipse(xRot(-newAngle) + 40, yRot(-newAngle), 100, 100); // Right leaf

    fill(100); // Grey
    quad(700, 525, 800, 500, 825, 600, 650, 600); // Rock

    // LOGIC
    newAngle += 0.03; // Continuously increase new angle

    for (let x = 0; x <= innerWidth; x++) {
        stroke(154, 255, 86); // Grass green
        line(x, 600, x + sin(random(135, 225)), randArray[x]); // x₂ gives a "swaying" effect
    }

}


// Formulas that constantly rotate x and y in a circle
function xRot(a) {
    var newXRot = 233 + cos(a) * radius; // new x value = x + cos(angle) * radius
    return newXRot;
}

function yRot(a) {
    var newYRot = height / 2 - 20 + sin(a) * radius; // new y value = y + sin(angle) * radius
    return newYRot;
}

// Toggle background color
function keyPressed() {
    if (keyCode == 38) {
        r = 66;
        g = 210;
        b = 255;
    } else if (keyCode == 40) {
        r = 15;
        g = 0;
        b = 75;
    }
}
