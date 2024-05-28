/*
    1.array
 */
let numbers:number[] = [1,2,3,4,5];
// khai báo mảng number các phần tử trong mảng number phải là number
let student:string[] = ["hoa","hồng","huệ"];

/*
    2. object

*/
let obj:{}={
    name:"minh thu",
    address:'hà nội',
    id:1
}

let obj1:{
    name:string,
    address:string,
    id:number
}={
    name:'minh thu',
    address:"hcm",
    id:2
}
/* 
    3.ENUM
*/
enum Role {
    ADMIN,
    USER
}
let person:{
    name:string,
    address:string,
    role:Role.ADMIN
}={
    name:"ngọc",
    address:'hn',
    role:0
}
/*
    void: áp dụng với function
    -khi hàm không trả về kết quả gì?
    -Khi hàm trả về kết quả thì phải khai báo kiểu dữ liệu trả về của hàm
 */
    function sayHello():void{
        console.log("hello")
    }
    sayHello();

    function sum(a:number,b:number):number{
        return a + b
    }
    console.log(sum(3,4))

    /*
    5. kiểu unknown
        tương tự kiểu dữ liệu any nhưng chặt hơn
        khi dùng any thì kiểu dữ liệu truyền vào là gì cũng được
     */
    function test(a:unknown) {
        //bắt buộc phải kiểm tra kiểu dữ liệu trước khi thực hiện phép tính
        console.log("1111",typeof(a));
        if(typeof(a) === "string"){
            console.log(a.toUpperCase());
        }
        
    }
    test(5)

    /*
    6.type never
        thường dùng trong cá vòng lặp vô tận 
        tức là các vòng lặp chạy không cố điểm dừng
        để do giá trị: 
    */
   function typeNever():never {
    let a:number=1;
    while(true){
        console.log("giá trị a", ++a)
    }
   }
//    typeNever()