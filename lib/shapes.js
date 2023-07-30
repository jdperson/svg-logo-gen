class Shape {
    constructor(text, tColor, sColor) {
        this.text = text;
        this.textColor = tColor;
        this.shapeColor = sColor;
    }

    generateSVG(){}
}

class Circle extends Shape {
    constructor(text, tColor, sColor) {
        super(text, tColor, sColor);
    }

    generateSVG() {
        return `<circle cx="50%" cy="50%" r="100" fill="${this.shapeColor}" />
            <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="50" fill="${this.textColor}">
                ${this.text}
            </text>`;
    }
}

class Triangle extends Shape {
    constructor(text, tColor, sColor) {
        super(text, tColor, sColor);
    }

    generateSVG() {
        return `<polygon points="200,50 100,250 300,250" fill="${this.shapeColor}" />
            <text x="200" y="150" dominant-baseline="middle" text-anchor="middle" font-size="40" fill="${this.textColor}">
                ${this.text}
            </text>`;
    }
}

class Square extends Shape {
    constructor(text, tColor, sColor) {
        super(text, tColor, sColor);
    }

    generateSVG() {
        return `<rect width="200" height="200" x="0" y="0" fill="${this.shapeColor}" />
            <text x="100" y="100" dominant-baseline="middle" text-anchor="middle" font-size="50" fill="${this.textColor}">
                ${this.text}
            </text>`;
    }
}

module.exports = {Circle, Triangle, Square};