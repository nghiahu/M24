/*
    TÍnh kế thừa
    là tính chất thể hiện bởi class con kế thừa class cha thì sẽ có các
    thuộc tính và phương thức của lớp cha.
    Giúp tái cấu trúc, sử dụng lại đoạn code

    1 con thì chỉ có 1 cha
    1 cha thì có nhiều con
 */

    // Khai báo class cha
    class Parent{
        name:string
        id:number
        constructor(name:string,id:number){
            this.name=name;
            this.id=id;
        }
        //khai báo cho class parent có phương thức showInfo
        showInfo():void{
            console.log(`xin chào ${this.name}`);
        }
        setName(newName:string):string{
            return this.name=newName
        }
    }
    // Khởi tạo class con kế thừa class cha
    // để kế thứa dùng từ khóa extends
    class Chirld extends(Parent){
        age:number
        constructor(name:string,id:number,age:number){
            super(name,id) //phải đặt trên đầu của constructor
            this.name=name;
            this.id=id;
            this.age=age
        }
        //ghi đè phương thức: override| overwite
        showInfo(): string {
            return `${this.name} năm nay ${this.age} tuổi!`
        }
    } 
    //Khởi tạo đối tượng con
    let chirld1 = new Chirld("minh thu",11,20);
    //khi class Chirld kế thừa claas Parent thì sẽ kế thừa các thuộc tính  của Parent
    console.log(chirld1.showInfo());
    console.log(chirld1.setName("son tung"));

    console.log(2222,chirld1.showInfo())
    