let circleX =[]; 
let circleY =[];
let numCircles = 200;

function setup() {
    createCanvas(screen.width, screen.height);
    for (let i = 0; i < numCircles; i++) {
        circleX[i] = random(width);
        circleY[i] = random(height);
    }

}

function draw() {
    background(200);
    for (let i =0; i < numCircles; i++) {
    circleX[i] += (mouseX - circleX[i]) * 0.005;
    circleY[i] += (mouseY - circleY[i]) * 0.005;
    fill(255);
    ellipse(circleX[i], circleY[i], 10, 10);
}
}