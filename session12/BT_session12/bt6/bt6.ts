class Product{
    protected name:string 
    protected price:number
    constructor(name:string,price:number){
        this.name = name
        this.price = price
    }
    getDescription():void{
        console.log("name: ",this.name);
        console.log("price: ",this.price);
    }
}
class Electronics extends(Product){
    private brand:string
    constructor(name:string,price:number,brand:string){
        super(name,price)
        this.name = name
        this.price = price
        this.brand = brand
    }
}
let electronics1 = new Electronics("gì đó",99999,"huh")

console.log("electronics1",electronics1)