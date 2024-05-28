"use strict";
class Vehicles13 {
    constructor(speed) {
        this.speed = speed;
    }
    speedUp() {
        this.speed += 1;
        return this.speed;
    }
    slowDown() {
        this.speed -= 1;
        return this.speed;
    }
    stop() {
        this.speed = 0;
        return this.speed;
    }
}
let vehi = new Vehicles13(10);
console.log(vehi.speedUp());
console.log(vehi.stop());
