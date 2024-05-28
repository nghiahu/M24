/*
interface: giao diện
dùng để định nghĩa các thuộc tính và phương thức các lớp con
kế thừa bắt buộc phải triển khai
==> cũng giống như abstract
    - có những điểm gì khác nhau so với abstract
    -để tạo abstract thì dùng từ khóa abstract
    -để tạo interface thì dùng interface
    trong interface sẽ có thuộc tính và phương thức
    -đối với phương thức thì không cso phần thân tức là nó chỉ định nghĩa thôi 
    -đối với interface thì không thể dùng kiểu kết hợp(union và intersecsion) được như đối với type
    -Có thể khởi tạo đối tượng từ interface được không? - không 
    -interface là 1 cái khuôn mẫu cho các class con khác kế thừa phải tuân theo 
    các class con khi kế thừa interface bắt buộc phải triển khai tất cả các thuộc tính 
    và phương thức của interface (implement)
    - 1 class có thể triên khai nhiều interface được không
    ==> 1 class có thể triển khai nhiều innterface được không
    - interface có kế thừa interface được không 
    - trong interface thì không thể đặt access modifier được
 */
interface Sales{
    name:string;
    sale():string;
}
class Person1 implements Sales{
    name: string;
    constructor(name:string){
        this.name = name
    }
    sale():string{
        return "giảm giá "
    }
}
type Aa={
    name:string
}
type Bb={
    name:string;
    age:number;
}
// Khi dùng type có thể dùng các kiểu kết hợp được không?
type Cc=Aa|Bb //union