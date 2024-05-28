"use strict";
class Circle {
    constructor(r) {
        this.r = r;
    }
    get getR() {
        return this.r;
    }
    set setR(r) {
        this.r = r;
    }
    Acreage() {
        return Math.PI * this.r * this.r;
    }
}
let round = new Circle(6);
console.log(round.Acreage());
round.setR = 4;
console.log(round.Acreage());
console.log("r:", round.getR);
