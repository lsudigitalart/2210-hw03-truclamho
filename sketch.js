function setup() {
    createCanvas(400, 400);
    background(0);
    

    var heartSize = 10;
    var padding = 5;
    var cols = floor(width / (heartSize + padding))+ 1;

    var startColor = color(164, 203, 245);
    var endColor = color(214, 9, 39);
    

    for(var i = 0; i < 1001; i++) {
       
        var x = (i% cols) * (heartSize + padding) + heartSize / 2;
        var y = floor(i / cols) * (heartSize + padding) + heartSize / 2;

        fill(255);
        stroke(11);
        drawHeart(x, y, heartSize);


        push();
        translate(x, y);
        rotate(PI / 5);
        fill(lerpColor(startColor, endColor, (i % cols) / cols));
        stroke(11);
        drawHeart(0, 0, heartSize);
        
        pop();

        }


    }

function drawHeart(x, y, size) {
    beginShape();
    vertex(x, y);
    bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size); 
    bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);      
    endShape(CLOSE);
 }

function draw () {

    
}