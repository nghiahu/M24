abstract class Employeex{
    name:string
    constructor(name:string){
        this.name = name
    }
    // khai báo phương thức
    abstract getFullName():void;
    //đối với phương thức trong abstract thì chỉ có tên phương thức, kiểu dữ liệu
    // trả về và không có phẩn body
}
// Cách khởi tạo đối tượng abstraction
// thêm từ khóa abstrac vào đầu class
// intance: đối với abstraction thì không cho phép tạo đối tượng(intance) (intance là đối tượng được khởi tạo từ class)
/*
    tạo 1 class con kế thừa class Employee
    implement : triển khai
    bắt buộc phải triển khai tất cả phương thức của class cha (abstract)

 */
    abstract class Employee1 extends Employeex{
        address:string;
        constructor(address:string,name:string){
            super(name);
            this.address = address
            this.name = name
        }
    }

class Studentx extends Employeex{
    private age:number;
    constructor(age:number,name:string){
        super(name);
        this.age = age
        this.name = name
    }
    getFullName(): void {
        
    }
}
