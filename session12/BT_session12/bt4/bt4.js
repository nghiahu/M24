"use strict";
class Vehiclea {
    constructor(name, speed, id) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    slowDown() {
        this.speed -= 1;
    }
    speedUp() {
        this.speed += 1;
    }
    showSpeed() {
        console.log("speed", this.speed);
    }
}
class Bicycle extends (Vehiclea) {
    constructor(name, speed, id, gear) {
        super(name, speed, id);
        this.name = name;
        this.speed = speed;
        this.id = id;
        this.gear = gear;
    }
}
let bicycle1 = new Bicycle("Giant a1", 2, 1, 6);
bicycle1.speedUp();
bicycle1.showSpeed();
