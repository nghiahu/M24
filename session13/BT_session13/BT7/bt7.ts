class Studentt{
    private id:number;
    private name:string;
    constructor( id:number, name:string){
        this.id = id
        this.name = name
    }
    getId():number{
        return this.id;
    }

    getName():string{
        return this.name;
    }
} 
let arrAllStudent:Studentt[] = []
class Classroom{
    students:Studentt[];
    constructor(students:Studentt[]){
        this.students = []
    }
    addStudent(){
        this.students.push(allStudents[0])
        allStudents.splice(0,1)      
}
showStudents(id:number){
    let index = this.students.findIndex(item => item.getId() === id);
    if(index !== -1){
        console.log(this.students[index])
    }else{
        console.log("không tìm thấy học sinh trong lớp")
    }

}
}

let allStudents: Studentt[] = [
    new Studentt(1, "Hưng"),
    new Studentt(2, "Hoa"),
    new Studentt(3, "Tiến"),
    new Studentt(4, "Dũng"),
    new Studentt(5, "Duy"),
    new Studentt(6, "Nam")
];

let class1 = new Classroom([]);
for(let i = 0;i<3;i++){
    class1.addStudent();
}
let class2 = new Classroom([]);
for(let i = 0;i<3;i++){
    class2.addStudent();
}
class1.showStudents(2);