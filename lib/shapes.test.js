const {Circle, Triangle, Square} = require("./shapes");

describe("Shapes", () => {
    describe("Circle", () => {
        test("should have correct text, text color, and shape color", () => {
            const text = "O";
            const textColor = "yellow";
            const shapeColor = "blue";
            const circle = new Circle(text, textColor, shapeColor);

            expect(circle.text).toBe(text);
            expect(circle.textColor).toBe(textColor);
            expect(circle.shapeColor).toBe(shapeColor);
        });

        test("should generate Circle SVG", () => {
            const circle = new Circle("O", "yellow", "blue");
            const circleSVG = `<circle cx="50%" cy="50%" r="100" fill="blue" />
            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="50" fill="yellow">
                O
            </text>`;
            expect(circle.generateSVG()).toEqual(circleSVG);
        });
    });

    describe("Triangle", () => {
        test("should have correct text, text color, and shape color", () => {
            const text = "T";
            const textColor = "green";
            const shapeColor = "orange";
            const triangle = new Triangle(text, textColor, shapeColor);

            expect(triangle.text).toBe(text);
            expect(triangle.textColor).toBe(textColor);
            expect(triangle.shapeColor).toBe(shapeColor);
        });

        test("should generate Triangle SVG", () => {
            const triangle = new Triangle("T", "green", "orange");
            const triangleSVG = `<polygon points="200,50 100,250 300,250" fill="orange" />
            <text x="200" y="150" dominant-baseline="middle" text-anchor="middle" font-size="40" fill="green">
                T
            </text>`;
            expect(triangle.generateSVG()).toEqual(triangleSVG);
        });
    });

    describe("Square", () => {
        test("should have correct text, text color, and shape color", () => {
            const text = "S";
            const textColor = "cyan";
            const shapeColor = "red";
            const square = new Square(text, textColor, shapeColor);

            expect(square.text).toBe(text);
            expect(square.textColor).toBe(textColor);
            expect(square.shapeColor).toBe(shapeColor);
        });

        test("should generate Square SVG", () => {
            const square = new Square("S", "cyan", "red");
            const squareSVG = `<rect width="200" height="200" x="0" y="0" fill="red" />
            <text x="100" y="100" dominant-baseline="middle" text-anchor="middle" font-size="50" fill="cyan">
                S
            </text>`;
            expect(square.generateSVG()).toEqual(squareSVG);
        });
    });
})