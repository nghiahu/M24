"use strict";
class Shapes {
    constructor() { }
    calculateArea() {
        return 0;
    }
}
class Circles extends Shapes {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}
class Rectangles extends Shapes {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
}
let images1 = new Circles(5);
console.log(images1.calculateArea());
let images2 = new Rectangles(3, 4);
console.log(images2.calculateArea());
