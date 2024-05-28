"use strict";
//Abstract class là một lớp
//Để tạo abstract thì dùng từ khóa abstract
//Nó có thể chứa các phương thức trừu tượng (abstract methods), các phương thức thông thường, và các thuộc tính.
//Một lớp con chỉ có thể kế thừa từ một abstract class.
class Employexc {
    constructor(name) {
        this.name = name;
    }
}
class Employect extends Employexc {
    constructor(address, name) {
        super(name);
        this.address = address;
    }
    getFullName() {
    }
}
class Vehicless {
    constructor(speed) {
        this.speed = speed;
    }
    speedUp() {
        this.speed += 1;
        return this.speed;
    }
    slowDown() {
        this.speed -= 1;
        return this.speed;
    }
    stop() {
        this.speed = 0;
        return this.speed;
    }
}
