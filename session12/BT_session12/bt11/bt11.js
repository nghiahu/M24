"use strict";
class shopItem {
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
class lendingItem extends (shopItem) {
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
}
let lendingItem1 = new lendingItem(1, "Duy Anh", 1000, true, [], 5);
lendingItem1.lendItem();
lendingItem1.getInfo();
