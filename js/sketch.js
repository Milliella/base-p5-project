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
    let length = 10;

}

function draw() {
    background(0);
    noStroke();
    let length = 20;
    while (theta < maxAngle + offset) {
        amplitude = sin(theta - offset) * (windowHeight/2);
        amplitude = ((theta-offset)/maxAngle)* (windowHeight/2);
        for (i = length; i > 0; i --){
        y = sin(theta - (i * 0.05)) * amplitude;
        fill(255 - (255/length * i), 0, 0);
        ellipse(x, y + height / 2, 20);
        square(x, height/2 + y, 16);
        }
        for (i = length; i > 0; i --){
            y = sin(theta - (i * 0.05)) * amplitude;
            fill(255 - (255/length * i), 0,);
            ellipse(x, y + height / 2, 20);
            }


   theta += 0.2;
   x = ((theta - offset)/maxAngle) * windowWidth;
    }
    offset += inc;
    theta = offset;
}