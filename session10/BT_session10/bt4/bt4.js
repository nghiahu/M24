"use strict";
class Vehicles10 {
    constructor(name, year, company, id) {
        this.name = name;
        this.year = year;
        this.company = company;
        this.id = id;
    }
}
const vehicle = new Vehicles10("Honda E6", 2018, "Honda", 1);
console.log("Vehicle Information:");
console.log("Name:", vehicle.name);
console.log("Year:", vehicle.year);
console.log("Company:", vehicle.company);
console.log("ID:", vehicle.id);
