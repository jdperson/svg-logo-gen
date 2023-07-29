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
        return `<circle cx="150" cy="100" r="50" fill="${this.shapeColor}" />
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
        return `<polygon points="150,50 100,150 200,150" fill="${this.shapeColor}" />
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="50" fill="${this.textColor}">
            ${this.text}
        </text>`;
    }
}

class Square extends Shape {
    constructor(text, tColor, sColor) {
        super(text, tColor, sColor);
    }

    generateSVG() {
        return `<rect width="100" height="100" x="100" y="50" fill="${this.shapeColor}" />
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="50" fill="${this.textColor}">
            ${this.text}
        </text>`;
    }
}

