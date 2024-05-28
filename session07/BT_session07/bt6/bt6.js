"use strict";
// kiểu void được sử dụng làm hàm không trả về bất kỳ giá trị nào
function sums(a, b) {
    return a + b;
}
console.log(sums(3, 4));
// kiểu never thường dùng trong cá vòng lặp vô tận 
function typeNever() {
    let a = 1;
    while (true) {
        console.log("giá trị a", ++a);
    }
}
//    typeNever()
