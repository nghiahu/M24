class Vehiclea{
    protected name:string
    protected speed:number
    protected id:number
    constructor(name:string,speed:number,id:number){
        this.name = name
        this.speed = speed
        this.id = id 
    }
    slowDown():void{
        this.speed -= 1;
    }
    speedUp():void{
        this.speed += 1;
    }
    showSpeed():void{
        console.log("speed",this.speed);
    }
} 
class Bicycle extends(Vehiclea){
    private gear:number
    constructor(name:string,speed:number,id:number,gear:number){
        super(name,speed,id)
        this.name = name
        this.speed = speed
        this.id = id 
        this.gear = gear
    }
}
let bicycle1 = new Bicycle("Giant a1",2,1,6)
bicycle1.speedUp();
bicycle1.showSpeed();