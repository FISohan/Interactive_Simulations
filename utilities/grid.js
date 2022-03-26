function drawGrid(width, height, cellSize = 20, color = [10, 0, 0], color2 = [150], weight = 1.5) {
    //first draw middle line

    //draw grid      

    //x axis grid
    stroke(color2)
    strokeWeight(weight / 2)
    for (let i = (height / 2) + cellSize; i < height; i += cellSize) {
        line(0, i, width + i, i)
    }

    for (let i = height / 2; i > 0; i -= cellSize) {
        line(0, i, width + i, i)
    }

    //draw y axis
    for (let i = (width / 2) + cellSize; i < width; i += cellSize) {
        line(i, 0, i, height + i)
    }

    for (let i = width / 2; i > 0; i -= cellSize) {
        line(i, 0, i, height + i)
    }
    //x axis
    stroke(color);
    strokeWeight(weight)
    line(0, height / 2, width, height / 2)
    //y axis
    line(width / 2, 0, width / 2, height)


}

