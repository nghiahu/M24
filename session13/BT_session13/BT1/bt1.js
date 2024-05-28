"use strict";
class Shapes13 {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
class Rectangles13 extends Shapes13 {
    constructor(name, width, height) {
        super(name);
        this.name = name;
        this.width = width;
        this.height = height;
    }
    getSize() {
        return `${this.height} , ${this.width}`;
    }
}
let rectangles1 = new Rectangles13("Hình1", 4, 5);
console.log(rectangles1.getName());
console.log(rectangles1.getSize());
