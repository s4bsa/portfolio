function setup() {
  createCanvas(600, 600);
  textAlign(CENTER, CENTER);
  textSize(85);
}
  
function draw() {
for (let y = 0; y < height; y++) {
    let inter = map(y, 0, height, 0, 1);
    let c = lerpColor(color('#8FA8DB'), color('#E0BBE4'), inter);
    stroke(c);
    line(0, y, width, y);
}
  noStroke()
            // ME
    translate(0, -70); 
  // Hair
  fill(36, 28, 22)
  rect(150, 250, 260, 220, 20);
  ellipse(290, 300, 320, 290);
  rect(365, 430, 100, 210, 20);
  rect(230, 500, 180, 200, 20);

  // Neck [length]
  fill(255, 230, 200);
  rect(250, 350, 90, 120)
  
  // Head
  fill(255, 230, 200);
  noStroke()
  ellipse(300, 320, 225, 190);
  
  // Ears
  ellipse(180, 320, 10, 50);
  ellipse(420, 320, 10, 50);

  // Hair pieces
  fill(36, 28, 22)
  rect(180, 280, 15, 80, 10, 10, 0, 0);
  rect(405, 280, 15, 80, 10, 10, 0, 0);
  // Bangs
  arc(232, 220, 150, 200, 0, PI); // left bang
  arc(360, 200, 230, 250, 0.75, PI); // right bang
  
  // Eyes
  fill(150, 100, 98);
  text(">", 255, 365);
  text("<", 345, 365);

  // BLUSH
  fill(255, 107, 149, 50);
  ellipse(230, 390, 35, 24);
  ellipse(370, 390, 35, 24);
  
  // Shirt
  fill('#242580');
  rect(150, 450, 305, 150, 50, 50, 10, 10);
  
  // Neckline 
  fill(255, 230, 200);
  ellipse(295, 440, 90, 110);

            //KITTY
  translate(100, 250); 
  // Ears
  fill(20);
  triangle(165, 180, 180, 150, 200, 180);
  triangle(235, 180, 220, 150, 200, 180);

  // Face
  ellipse(200, 200, 80, 80);
  fill(230, 230, 213)
  triangle(200, 205, 180, 240, 220, 240);
  
  // Head
  noFill()
  stroke(20)
  strokeWeight(5)
  ellipse(200, 200, 80, 80);
  
  // Eyes
  fill(100, 156, 100);
  noStroke();
  ellipse(185, 210, 8, 11);
  ellipse(215, 210, 8, 11);

  // :3 mouth
  noFill(0);
  stroke(204, 126, 155);
  strokeWeight(1.5);
  arc(195, 222, 10, 10, 0, PI);
  arc(204, 222, 10, 10, 0, PI);

  // Tail
  noFill();
  stroke(0);
  strokeWeight(8);
  arc(260, 335, 100, 100, HALF_PI, PI);
  
  // Legs
  fill(40);
  stroke(30);
  strokeWeight(2);
  ellipse(190, 390, 23, 60);
  ellipse(210, 390, 23, 60);
  
  // Torso
  fill(20);
  noStroke()
  rect(175, 240, 50, 150, 20);
  fill(230, 230, 213)
  rect(180, 240, 40, 100, 20);


  // Arms
  fill(40);
  stroke(30);
  strokeWeight(2);
  ellipse(183, 260, 30, 50);
  ellipse(217, 260, 30, 50);
  
            // ME
  // Hands
  fill(255, 230, 200);
  noStroke()
  ellipse(250, 300, 80, 70);
  ellipse(150, 300, 80, 70);

}