const fs = require("fs");
const inquirer = require("inquirer");
const {Circle, Triangle, Square} = require("./lib/shapes.js");


async function writeSVGFile(shape) {
    const svgWrap = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${shape.generateSVG()}
    </svg>`;

    fs.writeFile(`./examples/${shape.text}.svg`, svgWrap, (err) => {
        err ? console.error("Error writing SVG file:", err) : console.log("SVG successfully written");
    });
}

async function main() {
    console.log("Welcome to SVG Logo Generator!");

    const input = await inquirer.prompt([
        {
            type: "input",
            name: "text",
            message: "Enter up to three characters: ",
            validate: (value) => {
                if (value.trim() === 0) {
                    return "Text is required to continue";
                }
                else if (value.trim() > 3) {
                    return "Entry too long, enter no more than 3 characters";
                }
                return true;
            }
        },
        {
            type: "input",
            name: "tColor",
            message: "Enter the text color using either hexadecimal or keyword: ",
            validate: (value) => value.trim() ? true : "Text color is required to continue"
        },
        {
            type: "list",
            name: "shape",
            message: "Choose a shape:\n",
            choices: ["Circle", "Triangle", "Square"]
        },
        {
            type: "input",
            name: "sColor",
            message: "Enter the text color using either hexadecimal or keyword: ",
            validate: (value) => value.trim() ? true : "Shape color is required to continue"
        },
    ]);

    let shape;
    switch (input.shape.toLowerCase()) {
        case 'circle':
            shape = new Circle(input.text, input.tColor, input.sColor);
            break;
        case 'triangle':
            shape = new Triangle(input.text, input.tColor, input.sColor);
            break;
        case 'square':
            shape = new Square(input.text, input.tColor, input.sColor);
            break;
        default:
            console.error("Invalid shape");
            return;
    }

    await writeSVGFile(shape);
}

main();