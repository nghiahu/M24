"use strict";
class Student8 {
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
    setName(name) {
        this.name = name;
    }
}
let arrAllStudent8 = [];
class Classroom8 {
    constructor(students) {
        this.students = [];
    }
    addStudent() {
        this.students.push(allStudents8[0]);
        allStudents8.splice(0, 1);
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
    removeStudent(id) {
        let index = this.students.findIndex(item => item.getId() === id);
        if (index !== -1) {
            allStudents8.push(this.students[index]);
            this.students.splice(index, 1);
        }
    }
    editStudent(id, newName) {
        let student = this.students.find(student => student.getId() === id);
        if (student) {
            student.setName(newName);
        }
    }
}
let allStudents8 = [
    new Student8(1, "Hưng"),
    new Student8(2, "Hoa"),
    new Student8(3, "Tiến"),
    new Student8(4, "Dũng"),
    new Student8(5, "Duy"),
    new Student8(6, "Nam"),
];
let class3 = new Classroom8([]);
for (let i = 0; i < 3; i++) {
    class3.addStudent();
}
let class4 = new Classroom8([]);
for (let j = 0; j < 3; j++) {
    class4.addStudent();
}
class3.removeStudent(3);
console.log(allStudents8);
class4.editStudent(5, "Hoàng");
class4.showStudents(5);
