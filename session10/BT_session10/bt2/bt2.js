"use strict";
class Students10 {
    constructor(id, age, email) {
        this.id = id;
        this.age = age;
        this.email = email;
    }
}
let students = [];
students.push(new Students10(1, 18, "hoa@gmail.com"));
students.push(new Students10(2, 19, "hong@gmail.com"));
students.push(new Students10(3, 19, "nam@gmail.com"));
students.forEach((item) => {
    console.log("Id:", item.id);
    console.log("Age:", item.age);
    console.log("Email:", item.email);
    console.log("---------");
});
