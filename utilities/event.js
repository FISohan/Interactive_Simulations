class PointEvent {
  constructor(x, y, color, radius, height, width) {
    this.position = createVector(x, y);
    this.color = color;
    this.radius = radius;
    this.height = height;
    this.width = width;
  }

  move() {
    //this.position = createVector(mouseX, mouseY);
    let isMove = false;
    strokeWeight(this.radius);
    stroke(this.color);
    // point(this.position.x, this.position.y)

    console.log(dist(mouseX, mouseY, this.width / 2, this.height / 2));

    if (
      mouseIsPressed ||
      dist(mouseX, mouseY, this.position.x, this.position.y) < this.radius + 1
    ) {
      isMove = true;
    }

    if (!mouseIsPressed) {
      isMove = false;
    }
    if (
      dist(mouseX, mouseY, this.width / 2, this.height / 2) < this.width / 2 ||
      dist(mouseX, mouseY, this.width / 2, this.height / 2) < this.height / 2
    ) {
      if (isMove) {
        this.position = createVector(mouseX, mouseY);
        cursor("move");
      }
    }
  }
}
