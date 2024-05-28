class Rectangle{
    private width:number;
    private height:number
    
    constructor(width:number,height:number){
        this.width = width
        this.height = height
    }

    get getWidth():number{
        return this.width
    }
    set setWidth(width:number){
        this.width = width
    }
    get getHeight():number{
        return this.height
    }
    set setHeight(height:number){
        this.height = height
    }

    public printInfor():void{
        console.log("width: ",this.width)
        console.log("height: ",this.height)
        console.log("Chu vi: ",(this.height +this.width)*2);
        console.log("Diện tích", this.height * this.width )
      
    }
}
let image1 = new Rectangle(4,5)
image1.printInfor();

image1.setHeight = 3
image1.setWidth = 2
image1.printInfor();