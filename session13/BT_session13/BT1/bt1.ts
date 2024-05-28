abstract class Shapes13{
    name:string;
    constructor(name:string){
        this.name  = name
    }
    getName():string{
        return this.name
    }
    abstract getSize():void
}
class Rectangles13 extends Shapes13{
    width:number;
    height:number;
    constructor(name:string,width:number,height:number){
        super(name);
        this.name = name
        this.width = width
        this.height = height
    
    }

    getSize(){
        return `${this.height} , ${this.width}`  
    }
}
let rectangles1 = new Rectangles13("Hình1",4,5)
console.log(rectangles1.getName());
console.log(rectangles1.getSize());

