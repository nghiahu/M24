let anyType:any = '2'

let unknownType:unknown = '2'

let resulta = anyType *2
console.log(resulta)
let resultb = unknownType *3
console.log(resultb)
//kiểu any và unknow tương tự nhau như unkow thì chặt chẽ hơn
//kiểu unknow sẽ kiểm tra kiểu dữ liệu trước khi thực hiện 

if(typeof(unknownType) === "number"){
    let resultc = unknownType *2
    console.log(resultc)
}