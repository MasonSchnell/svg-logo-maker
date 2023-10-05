const { Square, Circle, Triangle } = require("./shapes.js");

test("Should return a blue triangle", () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual(
        '<polygon points="150,0 50,165 250,165" fill="blue" />'
    );
});

test("Should return a red square with white text", () => {
    const shape = new Square();
    shape.setColor("red");
    shape.setTextColor("white");
    expect(shape.render()).toEqual(
        '<rect x="50" y="10" width="200" height="200" fill="red"/>'
    );
    expect(shape.textColor).toEqual("white");
});

test("Should return a green circle that says HI", () => {
    const shape = new Circle();
    shape.setColor("green");
    shape.setText("HI");
    expect(shape.render()).toEqual(
        '<circle cx="150" cy="100" r="100" fill="green" />'
    );
    expect(shape.text).toEqual("HI");
});
