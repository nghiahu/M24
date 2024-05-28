"use strict";
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    get getWidth() {
        return this.width;
    }
    set setWidth(width) {
        this.width = width;
    }
    get getHeight() {
        return this.height;
    }
    set setHeight(height) {
        this.height = height;
    }
    printInfor() {
        console.log("width: ", this.width);
        console.log("height: ", this.height);
        console.log("Chu vi: ", (this.height + this.width) * 2);
        console.log("Diện tích", this.height * this.width);
    }
}
let image1 = new Rectangle(4, 5);
image1.printInfor();
image1.setHeight = 3;
image1.setWidth = 2;
image1.printInfor();
