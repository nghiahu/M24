interface Geometry{
    calculateArea():void;
    calculatePerimeter():void;
}
class Circles13 implements Geometry{
    private radius:number;
    constructor(radius:number){
        this.radius = radius
    }
    calculateArea(){
        return Math.PI * (this.radius*this.radius)
    }
    calculatePerimeter(){   
        return 2 * Math.PI * this.radius
    }
}
class Rectangles1 implements Geometry{
    private width:number;
    private height:number;
    constructor(width:number,height:number){
        this.width = width
        this.height = height
    }
    calculateArea(){
        return this.width*this.height
    }
    calculatePerimeter(){
        return (this.width+this.height)*2
    }
}
let img1 = new Circles13(5)
console.log(img1.calculateArea());
console.log(img1.calculatePerimeter());
let img2 = new Rectangles1(3,4)
console.log(img2.calculateArea());
console.log(img2.calculatePerimeter());