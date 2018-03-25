function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    angleMode(DEGREES);
    frameRate(.75);
}

function draw() { 
    background(161,195,209);
    //line following mouse
    strokeWeight(1.2);

    for (i = -18; i < width; i+=random(3,6)) {
        for (j = -10; j < height; j+=random(43,47)) {
  //custom shape 
        stroke(52,31,23);
            line(i,j,i,j+random(18,22));
        }
    }
    
    for (i = -10; i < width; i+=random(9,11)) {
        for (j = -10; j < height; j+=random(55,57)) {
  //custom shape 
        stroke(252,231,223);
            line(i,j,i,j+random(50,52));
        }
    }
    for (i = -15; i < width; i+=random(5,7)) {
        for (j = -5; j < height; j+=random(64,65)) {
  //custom shape 
        stroke(252,231,223);
            line(i,j,i,j+random(28,32));
        }
    }
}