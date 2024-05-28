class Persons{
    name:string
    constructor(name:string){
        this.name = name 
    }
    displayInfo():void{
        console.log("name: ",this.name)
    }
}

class Students extends(Persons){
    id:number
    constructor(name:string,id:number){
        super(name)
        this.name = name
        this.id = id 
    }
}
let studen1 = new Students("Thuỳ Dung",2)
studen1.displayInfo();