// kiểu void được sử dụng làm hàm không trả về bất kỳ giá trị nào

function sums(a:number,b:number):void{
    return a + b
}
console.log(sums(3,4))
// kiểu never thường dùng trong cá vòng lặp vô tận 
function typeNever():never {
    let a:number=1;
    while(true){
        console.log("giá trị a", ++a)
    }
   }
//    typeNever()