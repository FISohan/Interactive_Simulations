class PointEvent {
    constructor(x, y, color, radius) {
        this.position = createVector(x, y);
        this.color = color;
        this.radius = radius;
    }

    move() {
        //this.position = createVector(mouseX, mouseY);
        let isMove = false;
        strokeWeight(this.radius);
        stroke(this.color)
       // point(this.position.x, this.position.y)

        if (mouseIsPressed || dist(mouseX, mouseY, this.position.x, this.position.y) < this.radius + 1) {
            isMove = true;
        }

        if (!mouseIsPressed) { isMove = false;};

        if (isMove) {
            this.position = createVector(mouseX, mouseY);
            cursor("move");
        }
    }

}