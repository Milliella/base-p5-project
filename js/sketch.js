let x = 0;
let y = 0;
let theta = 0;
let inc = 0.05; //the amount of increment the offset each frame
let offset = 0; //the amount offfset from beginning of wave
let amplitude;
let frequency;
let maxAngle;

function setup() {
    amplitude = windowHeight / 8;
    frequency = windowWidth / 8;
    maxAngle = (windowWidth / frequency) * TWO_PI;
    createCanvas(windowWidth, windowHeight);
    noStroke();

}

function draw() {
    background(0);
    while (theta < maxAngle + offset) {
        //sine wave 3
        y = sin(theta - 0.4) * amplitude;
        fill(140, 290, 290)
        ellipse(x, y + height / 2, 16);
        //sine wave 2
        y = sin(theta - inc) * amplitude;
        fill(150, 270, 270)
        ellipse(x, y + height / 2, 16);
        //sine wave 1
        y = sin(theta) * amplitude;
        fill(255, 200, 200)
        ellipse(x, y + height / 2, 16);
        //cosine wave
        y = cos(theta) * amplitude;
        fill(100, 200, 200)
        ellipse(x, y + height / 2, 16);
        theta += 0.2;
        x = ((theta - offset) / maxAngle) * windowWidth;


    }
    offset += inc;
    theta = offset;
}