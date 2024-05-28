"use strict";
class shopItems {
    constructor(id, name, price, isAvailable) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.isAvailable = isAvailable;
    }
    getInfo() {
        console.log(`id: ${this.id}`);
        console.log(`name: ${this.name}`);
        console.log(`price: ${this.price}`);
        console.log(`isAvailable: ${this.isAvailable}`);
    }
}
class lendingItems extends (shopItems) {
    constructor(id, name, price, isAvailable, customerNames, stock) {
        super(id, name, price, isAvailable);
        this.id = id;
        this.name = name;
        this.price = price;
        this.isAvailable = isAvailable;
        this.customerNames = [];
        this.stock = stock;
    }
    lendItem() {
        this.customerNames.push(this.name);
        this.stock -= 1;
        if (this.stock == 0) {
            this.isAvailable = false;
            console.log("hết hàng");
        }
    }
    returnItem() {
        this.customerNames.forEach((item, index) => {
            if (this.name === item) {
                this.stock += 1;
                this.customerNames.splice(index, 1);
            }
        });
    }
}
let lendingItem2 = new lendingItems(1, "Iphone", 1000, true, [], 5);
lendingItem2.lendItem();
lendingItem2.getInfo();
