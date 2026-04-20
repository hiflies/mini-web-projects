const MAX_WIDTH = 128;
const MAX_HEIGHT = 64;
const SQUARE_WIDTH = 16;

const screenWidth = Math.floor(window.innerWidth / SQUARE_WIDTH);
const screenHeight = Math.floor(window.innerHeight / SQUARE_WIDTH);

console.log({screenWidth, screenHeight});

const WIDTH = Math.min(MAX_WIDTH, screenWidth);
const HEIGHT = Math.min(MAX_HEIGHT, screenHeight);

const squares = [];

let visitor;

function start() {
    visitor = new Visitor(squares[0], squares);
}

function setup() {
    // frameRate(15);
    createCanvas(SQUARE_WIDTH * WIDTH, SQUARE_WIDTH * HEIGHT);

    for (let i = 0; i < HEIGHT; i++) {
        for (let j = 0; j < WIDTH; j++) {
            squares.push(
                new Square(
                    createVector(j, i),
                    SQUARE_WIDTH
                )
            );
        }
    }

    start();
}

function draw() {
    background(255);

    for (const square of squares) {
        square.drawVisited();
    }

    for (const square of squares) {
        square.draw();
    }

    if (visitor == null) {
        return;
    }

    visitor.draw();
    visitor.update();
}