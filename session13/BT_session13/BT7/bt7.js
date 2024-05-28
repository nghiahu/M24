"use strict";
class Studentt {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
}
let arrAllStudent = [];
class Classroom {
    constructor(students) {
        this.students = [];
    }
    addStudent() {
        this.students.push(allStudents[0]);
        allStudents.splice(0, 1);
    }
    showStudents(id) {
        let index = this.students.findIndex(item => item.getId() === id);
        if (index !== -1) {
            console.log(this.students[index]);
        }
        else {
            console.log("không tìm thấy học sinh trong lớp");
        }
    }
}
let allStudents = [
    new Studentt(1, "Hưng"),
    new Studentt(2, "Hoa"),
    new Studentt(3, "Tiến"),
    new Studentt(4, "Dũng"),
    new Studentt(5, "Duy"),
    new Studentt(6, "Nam")
];
let class1 = new Classroom([]);
for (let i = 0; i < 3; i++) {
    class1.addStudent();
}
let class2 = new Classroom([]);
for (let i = 0; i < 3; i++) {
    class2.addStudent();
}
class1.showStudents(2);
