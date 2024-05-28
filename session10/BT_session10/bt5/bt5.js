"use strict";
class Department {
    constructor(id, name, employees) {
        this.id = id;
        this.name = name;
        this.employees = employees;
    }
    describe() {
        console.log(`Id: ${this.id}`);
        console.log(`Name: ${this.name}`);
    }
}
const department = new Department(1, "nhân sự", ["Hoa", "Lan", "Đức"]);
department.describe();
