// var _width = 665, _height = 500;
// var cellSize = 20;

// function p(x, y, _cellSize) {
//     return createVector((_cellSize * x) + _width / 2, (_height / 2) - (_cellSize * y))
// }

// function p_1(x, y, _cellSize) {
//     return createVector(((x - (_width / 2)) / _cellSize), (( (_height / 2) - y) / _cellSize));
// }

// var pointE;
// var pointE1;

// function setup() {
//     createCanvas(_width, _height)
//     let o = p(10, 1, cellSize)
//     let o1 = p(-1, 1, cellSize)


//     pointE = new PointEvent(o.x, o.y, "black", 10);

//     pointE1 = new PointEvent(o1.x, o1.y, "black", 10);


//     //  background(200)
// }

// function draw() {
//     background(200)
//     pointE.move();
//     pointE1.move();
//     drawGrid(_width, _height);
//     console.log(p_1(pointE.position.x, pointE.position.y, cellSize));

//     // noLoop()
// }

// class PointEvent {
//     constructor(x, y, color, radius) {
//         this.position = createVector(x, y);
//         this.color = color;
//         this.radius = radius;
//     }

//     move() {
//         //this.position = createVector(mouseX, mouseY);
//         strokeWeight(this.radius);
//         point(this.position.x, this.position.y)

//         if (dist(mouseX, mouseY, this.position.x, this.position.y) < this.radius + 1 && mouseIsPressed) {
//             this.position = createVector(mouseX, mouseY);
//             cursor("move");
//         }
//     }

// }