"use strict";
// đối với protected -chỉ được truy cập ở bên trong class và subclass(class con - kế thừa)
//trong class
class VD1a {
    constructor(company) {
        {
            this.company = company;
        }
    }
}
//trong class con
class VD1b extends (VD1a) {
    constructor(conpany) {
        super(conpany);
        this.company = conpany;
    }
}
// lỗi nếu truy cập bên ngoài
let vd1c = new VD1a("hi");
console.log(vd1c.company);
// private  -chỉ được truy cập bên trong class
class VD2a {
    constructor(name) {
        {
            this.name = name;
        }
    }
}
// hiển thị lỗi khi truy cập trong class con
class VD2b extends (VD2a) {
    constructor(name) {
        super(name);
        this.name = name;
    }
}
// hiển thị lỗi khi truy cập ngoài class
let vd2c = new VD2a("hello");
console.log(vd2c.name);
