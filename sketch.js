// Windy Day

var newAngle;
var radius;
var r;
var g;
var b;
var x1;
var x2;
var x3;
var x4;
var randArray = [];

function setup() {
    createCanvas(1200, 800);
    newAngle = 0;
    radius = 5;
    r = 66;
    g = 210;
    b = 255;
    x1 = 700;
    x2 = 800;
    x3 = 825;
    x4 = 650;
    
    for (var i = 0; i < width; i++) {
        randArray.push(random(560, 600)); // Pushes numbers into array
    }
}


function draw() {
    // DRAW
    background(r, g, b);
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
    quad(x1, 525, x2, 500, x3, 600, x4, 600); // Rock

    // LOGIC
    newAngle += 0.03; // Continuously increase new angle

    if (keyIsDown(39)) { // If right arrow key is down, rock moves right
        x1 += 1;
        x2 += 1;
        x3 += 1;
        x4 += 1;
    }

    if (keyIsDown(37)) { // If left arrow key is down, rock moves left
        x1 -= 1;
        x2 -= 1;
        x3 -= 1;
        x4 -= 1;
    }

    if (x3 >= innerWidth - 80) { // Rock will stop when touching edge of screen
        x1 -= 1;
        x2 -= 1;
        x3 -= 1;
        x4 -= 1;
    }

    if (x4 <= width / 6 + 65) { // Rock will stop when touching tree
        x1 += 1;
        x2 += 1;
        x3 += 1;
        x4 += 1;
    }

    for (let x = 0; x <= innerWidth; x++) {
        stroke(154, 255, 86); // Grass green
        line(x, 600, x + sin(random(135, 225)), randArray[x]); // x₂ gives a "swaying" effect, courtesy of Shunyu Zhao
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
