/*
 Cách khởi tạo class 
*/

class Students11 {
    // khai các thuộc tính
    private names11:string
    // mặc định nếu không điền thì sẽ là public
    // bên ngoài class student sẽ không truy cập được
    constructor(names11:string){
        this.names11=names11
    }
    // nơi khai báo các phương thức
    // thấy có phương thức láy tên người đó
    // get thì có return và không có tham số
    getName(){
        return this.names11
    }
    // thấy có phương thức đi thay đổi tên người đó
    // có tham só nhận vào và không cần return
    set setName(newName:string){
        this.names11 = newName;
    }
} 
// instance nghĩa là đi tạo đối tượng từ class
let std1 = new Students11("minh thu");
let std2 = new Students11("hoa");
//std1.setName("tranh")
std1.setName = "tranh"
console.log(std1.getName)

// std1.setName("lan anh");
// console.log(1111,std1.getName());
// console.log("std2",std1);



/*
    access modifier - phạm vi truy cập
    3 phạm vi:
    1. public
    - bên ngoài có thể truy cập được
    2. private
    -chỉ được truy cập bên trong class bên ngoài ngoài không truy cập được muốn truy cập thì tạo các phương thức
    3. protected
    -chỉ được truy cập ở bên trong class và subclass(class con - kế thừa)
*/