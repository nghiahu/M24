class Circle {
    private r: number

    constructor(r:number){
        this.r = r
    }

    get getR():number{
        return this.r
    }
    set setR(r:number){
        this.r = r
    }

    public Acreage():number{
        return Math.PI * this.r * this.r
    }
}
let round = new Circle(6)

console.log(round.Acreage());

round.setR = 4
console.log(round.Acreage());
console.log("r:",round.getR)