"use strict";
class Employeex {
    constructor(name) {
        this.name = name;
    }
}
// Cách khởi tạo đối tượng abstraction
// thêm từ khóa abstrac vào đầu class
// intance: đối với abstraction thì không cho phép tạo đối tượng(intance) (intance là đối tượng được khởi tạo từ class)
/*
    tạo 1 class con kế thừa class Employee
    implement : triển khai
    bắt buộc phải triển khai tất cả phương thức của class cha (abstract)

 */
class Employee1 extends Employeex {
    constructor(address, name) {
        super(name);
        this.address = address;
        this.name = name;
    }
}
class Studentx extends Employeex {
    constructor(age, name) {
        super(name);
        this.age = age;
        this.name = name;
    }
    getFullName() {
    }
}
