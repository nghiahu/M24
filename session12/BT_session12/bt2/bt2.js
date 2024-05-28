"use strict";
class Employeess {
    constructor(name, company, phones) {
        this.list = [];
        {
            this.name = name;
            this.company = company;
            this.phones = phones;
        }
    }
    printInfo() {
        {
            console.log(`name: ${this.name}, company: ${this.company}, phones: ${this.phones}`);
        }
    }
}
class Managers extends (Employeess) {
    constructor(name, company, phones, teamSize) {
        super(name, company, phones);
        this.name = name;
        this.company = company;
        this.phones = phones;
        this.teamSize = teamSize;
    }
    printInfo() {
        {
            console.log(`name: ${this.name}, company: ${this.company}, phones: ${this.phones}, teamSize": ${this.teamSize}`);
        }
    }
}
let manager1 = new Managers("Nam", "rikkeisoft", "0932553763", 5);
manager1.printInfo();
