"use strict";
class Employees10 {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`Company: ${this.company}`);
        console.log(`Phone: ${this.phone}`);
    }
}
const employee = new Employees10("Hoa", "Conpany gì đó", "0934566782");
employee.printInfo();
