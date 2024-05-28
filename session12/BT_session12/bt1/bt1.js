"use strict";
class Employees {
    constructor(name, company, phones) {
        {
            this.name = name;
            this.company = company;
            this.phones = phones;
        }
    }
    printInfo() {
        {
            console.log("name: ", this.name);
            console.log("company: ", this.company);
            console.log("phones: ", this.phones);
        }
    }
}
class Manager extends (Employees) {
    constructor(name, company, phones, teamSize) {
        super(name, company, phones);
        this.name = name;
        this.company = company;
        this.phones = phones;
        this.teamSize = teamSize;
    }
}
