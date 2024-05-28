"use strict";
// abstract method
//Không có body
//Được khai báo bằng cách sử dụng từ khóa "abstract".
//phải ở trong lớp abstract và các lớp con của lớp đó phải triển khai tất cả abstract method
//Sử dụng abstract method khi bạn muốn các lớp con phải triển khai các hành động cụ thể theo cách của chúng.
class Employeec {
    constructor(name) {
        this.name = name;
    }
}
class Employec extends Employeec {
    constructor(address, name) {
        super(name);
        this.address = address;
    }
    getFullName() {
    }
}
// method 
//Là một hành động cụ thể được định nghĩa trong một lớp để thực hiện một nhiệm vụ cụ thể
//Có thể có hoặc không có giá trị trả về 
//Có cấu trúc body cụ thể
//Sử dụng method để triển khai các hành động cụ thể mà không cần phụ thuộc vào việc triển khai của lớp con.
class Employ {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
