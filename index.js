inquirer = require("inquirer");
const fs = require("fs");
const { Square, Circle, Triangle } = require("./lib/shapes.js");

let color = "";
let text = "";
let textColor = "";
let shape = "";

getShape();

function getShape() {
    inquirer
        .prompt({
            name: "shape",
            message: "Please pick your shape.",
            type: "list",
            choices: ["Square", "Circle", "Triangle"],
        })
        .then((answer) => {
            switch (answer.shape) {
                case "Square":
                    const square = new Square();
                    shape = square;
                    getColor();
                    break;
                case "Circle":
                    const circle = new Circle();
                    shape = circle;
                    getColor();
                    break;
                case "Triangle":
                    const triangle = new Triangle();
                    shape = triangle;
                    getColor();
                    break;
            }
        });
}

function getColor() {
    inquirer
        .prompt({
            name: "color",
            message: "Please enter the shape's color.",
        })
        .then((answer) => {
            color = answer.color;
            shape.setColor(color);
            getTextColor();
        });
}

function getTextColor() {
    inquirer
        .prompt({
            name: "textColor",
            message: "Please enter the text color.",
        })
        .then((answer) => {
            textColor = answer.textColor;
            shape.setTextColor(textColor);
            getText();
        });
}

function getText() {
    inquirer
        .prompt({
            name: "text",
            message: "Please enter 3 letters for the logo.",
            validate: function (input) {
                if (/^[a-zA-Z]{3}$/.test(input)) {
                    return true;
                } else {
                    return "Please enter exactly 3 letters.";
                }
            },
        })
        .then((answer) => {
            text = answer.text;
            shape.setText(text);
            writeFile(shape);
        });
}

function writeFile(shape) {
    const filePath = `./examples/${shape.text}.svg`;
    fs.writeFile(filePath, shape.getFormat(shape.render()), (err) => {
        if (err) {
            console.error("Error creating SVG file:", err);
        } else {
            console.log("Generated logo.svg");
        }
    });
}
