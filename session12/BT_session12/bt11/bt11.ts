class shopItem{
    protected id:number
    protected name:string
    protected price:number
    protected isAvailable:boolean
    constructor(id:number,name:string,price:number,isAvailable:boolean){
        this.id = id
        this.name = name
        this.price = price
        this.isAvailable = isAvailable
    }
    getInfo():void{
        console.log(`id: ${this.id}`)
        console.log(`name: ${this.name}`);
        console.log(`price: ${this.price}`)
        console.log(`isAvailable: ${this.isAvailable}`)
    } 
}

class lendingItem extends(shopItem){
    customerNames:string[]
    stock:number
    constructor(id:number,name:string,price:number,isAvailable:boolean,customerNames:string[],stock:number){
        super(id,name,price,isAvailable)
            this.id = id
            this.name = name
            this.price = price
            this.isAvailable = isAvailable
            this.customerNames = []
            this.stock = stock
    }
    lendItem(){
        this.customerNames.push(this.name)
        this.stock -= 1;
        if(this.stock == 0){
            this.isAvailable = false
            console.log("hết hàng")
        }
    }
}
let lendingItem1 = new lendingItem(1,"Duy Anh",1000,true,[],5)
lendingItem1.lendItem();
lendingItem1.getInfo();