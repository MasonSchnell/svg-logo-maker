class Shape {
    constructor(color, text, textColor) {
        this.color = color;
        this.text = text;
        this.textColor = textColor;
    }

    setColor(color) {
        this.color = color;
    }

    setText(text) {
        this.text = text;
    }

    setTextColor(textColor) {
        this.textColor = textColor;
    }

    getFormat(render) {
        return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">
   
     ${render}
   
     <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
   
   </svg>`;
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="100" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    render() {
        return `<rect x="50" y="10" width="200" height="200" fill="${this.color}"/>`;
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="150,0 50,165 250,165" fill="${this.color}" />`;
    }
}

module.exports = { Square, Circle, Triangle };
