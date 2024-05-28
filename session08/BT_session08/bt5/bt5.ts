// Union Types cho phép biểu diễn một giá trị có thể thuộc nhiều kiểu dữ liệu khác nhau.    

function VD1(item1:string,item2:string|number):string{
}

//ntersection Types cho phép kết hợp các thuộc tính của nhiều kiểu dữ liệu thành một kiểu dữ liệu mới.
interface Bird {
    fly(): string;
    layEggs(): boolean;
}

interface Fish {
    swim(): string;
    layEggs(): boolean;
}
declare function getSmallPet(): Fish | Bird;
let pet = getSmallPet();
