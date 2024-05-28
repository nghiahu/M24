"use strict";
const VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
});
class Job {
    constructor(type) {
        this.type = type;
    }
    printType() {
        return this.type;
    }
}
class PartimeJob extends Job {
    constructor(type, workingHour) {
        super(type);
        this.workingHour = workingHour;
    }
    calculateSalary() {
        return VND.format(this.workingHour * 30000);
    }
}
class FulltimeJob extends Job {
    constructor(type) {
        super(type);
    }
    calculateSalary() {
        return VND.format(10000000);
    }
}
let per1 = new PartimeJob("part time", 3);
console.log(per1.printType());
console.log(per1.calculateSalary());
let per2 = new FulltimeJob("full time");
console.log(per2.printType());
console.log(per2.calculateSalary());
