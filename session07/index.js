"use strict";
/*
    1.array
 */
let numbers = [1, 2, 3, 4, 5];
// khai báo mảng number các phần tử trong mảng number phải là number
let student = ["hoa", "hồng", "huệ"];
/*
    2. object

*/
let obj = {
    name: "minh thu",
    address: 'hà nội',
    id: 1
};
let obj1 = {
    name: 'minh thu',
    address: "hcm",
    id: 2
};
/*
    3.ENUM
*/
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
})(Role || (Role = {}));
let person = {
    name: "ngọc",
    address: 'hn',
    role: 0
};
/*
    void: áp dụng với function
    -khi hàm không trả về kết quả gì?
    -Khi hàm trả về kết quả thì phải khai báo kiểu dữ liệu trả về của hàm
 */
function sayHello() {
    console.log("hello");
}
sayHello();
function sum(a, b) {
    return a + b;
}
console.log(sum(3, 4));
/*
5. kiểu unknown
    tương tự kiểu dữ liệu any nhưng chặt hơn
    khi dùng any thì kiểu dữ liệu truyền vào là gì cũng được
 */
function test(a) {
    //bắt buộc phải kiểm tra kiểu dữ liệu trước khi thực hiện phép tính
    console.log("1111", typeof (a));
    if (typeof (a) === "string") {
        console.log(a.toUpperCase());
    }
}
test(5);
/*
6.type never
    thường dùng trong cá vòng lặp vô tận
    tức là các vòng lặp chạy không cố điểm dừng
    để do giá trị:
*/
function typeNever() {
    let a = 1;
    while (true) {
        console.log("giá trị a", ++a);
    }
}
//    typeNever()
