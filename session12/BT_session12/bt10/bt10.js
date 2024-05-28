"use strict";
class Shapes2 {
    constructor() { }
    calculateArea() {
        return 0;
    }
    calculatePerimeter() {
        return 0;
    }
}
class Circles2 extends Shapes2 {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
    calculatePerimeter() {
        return 2 * Math.PI * this.radius;
    }
}
class Rectangles2 extends Shapes2 {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}
let images3 = new Circles2(5);
console.log("Diện tích hình tròn", images3.calculateArea());
console.log("Chu vi hình tròn", images3.calculatePerimeter());
let images4 = new Rectangles2(3, 4);
console.log("Diện tích hình chữ nhật", images4.calculateArea());
console.log("Chu vi hình chữ nhật", images4.calculatePerimeter());
