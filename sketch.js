let circleX, circleY;

function setup() {
    createcanvas(screen.width, screen.height);
    circleX =  random(width);
    circleY =  random(height);
}

function draw() {
    background(0);
    circleX += (mouseX - circleX) * 0.05;
    circleY += (mouseY - circleY) * 0.05;
    fill(255);
    ellipse(circleX, circleY, 50, 50);
    

}