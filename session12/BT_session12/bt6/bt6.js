"use strict";
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getDescription() {
        console.log("name: ", this.name);
        console.log("price: ", this.price);
    }
}
class Electronics extends (Product) {
    constructor(name, price, brand) {
        super(name, price);
        this.name = name;
        this.price = price;
        this.brand = brand;
    }
}
let electronics1 = new Electronics("gì đó", 99999, "huh");
console.log("electronics1", electronics1);
