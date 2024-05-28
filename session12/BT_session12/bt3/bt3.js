"use strict";
class Persons {
    constructor(name) {
        this.name = name;
    }
    displayInfo() {
        console.log("name: ", this.name);
    }
}
class Students extends (Persons) {
    constructor(name, id) {
        super(name);
        this.name = name;
        this.id = id;
    }
}
let studen1 = new Students("Thuỳ Dung", 2);
studen1.displayInfo();
