class Vehicle {
    names10:string
    years10:number
    company:string
    constructor(names10:string,years10:number,company:string){
        this.names10=names10
        this.years10=years10
        this.company=company
    }

}

let vehi1 = new Vehicle(" Audi A3", 2016, "Audi");
let vehi2 = new Vehicle("Honda Accord", 2018, "Honda");

console.log("111111");
console.log("Tên:", vehi1.names10);
console.log("Năm sản xuất:", vehi1.years10);
console.log("Hãng xe:", vehi1.company);

console.log("2222222");
console.log("Tên:", vehi2.names10);
console.log("Năm sản xuất:", vehi2.years10);
console.log("Hãng xe:", vehi2.company);