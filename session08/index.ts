/* 
    1.union

    2.intersection
*/
let e:number|string|undefined=5;
e="hồng"
// tham chiếu (array)
let numberss: (number|string)[]=[1,2,3,4,5]
let d:number=6;
//
type Student={
    name:string,
    address:string,
    phone:string
}

let obja:{name:string,address:string,phone:string}={
    name:"hoa",
    address:'hà nội',
    phone:"098765455"
}

// 
type A={
    name:string,
    address:string,
    phone:string
}
type B={
    email:string
}
type C=A&B;
let objb:A={
    name:"hoa",
    address:"hà nội",
    phone:'09876555'
}
let objc:C={
    name:"hồng",
    address:"hcm",
    phone:"5555",
    email:"hồng@gmail.com"
}

// có hai cách thêm thuộc tính
//1 nameobj.item
//2 nameobj["item"]