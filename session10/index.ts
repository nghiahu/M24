/*
    OOPL: Lập trình hướng đối tượng
    Object orinented progaram

    là mô hình lập trình dựa vào các đối tượng thực tế
    đối tượng con mèo,đối tượng cái ô tô, cái bàn...
    1 đối tượng sẽ gồm thuộc tính và phương thức
    ví dụ đối tượng con mèo,
    thuộc tính :màu lông,màu mắt, nặng,..........
    phương thức: bắt chước,chạy,nhảy..........
    ví dụ về đối tượng cái ô tô

    thuộc tính: màu,mã lực,hãng
    phương thức:chạy,

    Các tạo đối tượng
    1. dùng let, const, var
    let student={

    }
    2.dùng new Object(0)
    3.dùn hàm tọa constuctor
    4. dùng claa

    */
    //yêu cầu khai bái 1 đối tượng student
    class Studentc {
    name:string
    age:number
    constructor(name:string,age:number){
        this.name = name;
        this.age =age;
    }
    //khai báo các phương thức
    //ví dụ thày có phương thức getANme
    getName():void{
        console.log(`xin chào${this.name}`);
        
    }
    getAge():void{
        console.log("");
    }
    }
    // tạo đối tượng dùng từ khóa new
    let std = new Studentc("minh thu",19);
    console.log((std));
    //lấy thuộc tính:
    // đối tượng . thuộc tính

    console.log("đối tượng std có thuộc tính name có giá trị là",std.name);
    //gọi phương thức 
    // đối tượng . phương thức
    console.log("gọi phương thức getNAme",std.getName());
    
    /*
    Các tính chất của lập trình hướng đối tượng
    4 tính chất
    1. đóng gói :encapsulation
    2.kế thừa: inheritancce
    3. đa hình: polymorphysm
    4. tính trừu tượng: abstraction 
    */
    
    

    
