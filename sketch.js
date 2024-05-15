function setup() {
    createCanvas(400, 400);
    background("#E4E4E4")
  }
  
  function draw() {
    stroke("#1F7A23");
    fill("#6D217A");
    
    
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }
  