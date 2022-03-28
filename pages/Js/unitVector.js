var _width = window.innerWidth,
  _height = 500;

window.addEventListener("load", (e) => {});
var cellSize = 20;

function p(x, y, _cellSize) {
  return createVector(_cellSize * x + _width / 2, _height / 2 - _cellSize * y);
}

function p_1(x, y, _cellSize) {
  return createVector(
    (x - _width / 2) / _cellSize,
    (_height / 2 - y) / _cellSize
  );
}

var vector_main;
var control_point;
var unit_vector;
var fontsize = 15;

var i_input_activation = true;

function setup() {
  if (isMobile()) {
    _width = windowWidth;
    _height = windowHeight / 1.4;
  } else {
    _width = windowWidth / 1.6;
    _height = windowHeight / 1.3;
  }
  let canvas = createCanvas(_width, _height);
  canvas.parent("canvas_parent");
  vector_main = p(5, 5, 20);
  control_point = new PointEvent(
    vector_main.x,
    vector_main.y,
    [255, 10, 60],
    10,
    _height,
    _width
  );
  // textFont(font);
  textSize(fontsize);
  textAlign(CENTER, CENTER);
  //  background(200)
}

function draw() {
  let init_point = p(0, 0, cellSize);
  background(200);
  drawGrid(_width, _height);
  text("O", init_point.x - 25, init_point.y + 20);
  stroke([25, 0, 0]);

  arrow(init_point.x, init_point.y, vector_main.x, vector_main.y);

  control_point.move();
  let f1 = p_1(control_point.position.x, control_point.position.y, cellSize);
  vector_main = p(f1.x, f1.y, cellSize);
  stroke(0);
  strokeWeight(1);
  text("P", vector_main.x + 10, vector_main.y - 15);
  let uv = unit_vector(vector_main);
  let p1 = p(uv.x, uv.y, cellSize);
  let p2 = p(0, 0, cellSize);
  strokeWeight(2);
  stroke([255, 100, 10]);

  arrow(p2.x, p2.y, p1.x, p1.y);

  strokeWeight(5);
  stroke(0);
  strokeWeight(1);
  text("u", p1.x + 15, p1.y - 1);

  let c = f1.y > 0 ? "+" : "-";

  // $("main_vector").innerText = `A = ${f1.x.toFixed(3)}i ${c} ${Math.abs(f1.y.toFixed(3))}j`
  // console.log("Main Vector : ", p_1(vector_main.x, vector_main.y, cellSize));
  if (i_input_activation) {
    e("i_input").value = f1.x.toFixed(3);
  }
}

document.getElementById("i_input").addEventListener("focus", (e) => {
  i_input_activation = false;
});

document.getElementById("i_input").addEventListener("change", (e) => {
  vector_main = p(parseFloat(e.target.value.x), vector_main.y, cellSize);
  console.log();
});

function unit_vector(v) {
  let f1 = p_1(v.x, v.y, cellSize);
  let len = sqrt(f1.x * f1.x + f1.y * f1.y);
  let unitVector = createVector(f1.x / len, f1.y / len);
  return unitVector;
}
