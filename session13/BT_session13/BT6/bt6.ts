//Abstract class là một lớp
//Để tạo abstract thì dùng từ khóa abstract
//Nó có thể chứa các phương thức trừu tượng (abstract methods), các phương thức thông thường, và các thuộc tính.
//Một lớp con chỉ có thể kế thừa từ một abstract class.
abstract class Employexc{
    name:string
    constructor(name:string){
        this.name = name
    }
    abstract getFullName():void;
}
class Employect extends Employexc{
    address:string;
    constructor(address:string,name:string){
        super(name);
        this.address = address
    }
    getFullName(): void {
        
    }
}

//Interface là một tập hợp các phương thức trừu tượng và không có phương thức đã được triển khai.
//để tạo interface thì dùng interface
//Interface không thể chứa các phần thân hàm cho các phương thức
//Một lớp có thể implements nhiều interface

interface changeSpeed2{
    speedUp():void;
    slowDown():void;
}
interface stopSpeed2{
    stop():void;
}
class Vehicless implements changeSpeed2,stopSpeed2{
    private speed:number
    constructor(speed:number){
        this.speed = speed
    }
    speedUp(){
        this.speed += 1
        return this.speed
    }
    slowDown(){
        this.speed -= 1
        return this.speed
    }
    stop(){
        this.speed = 0
        return this.speed
    }
}