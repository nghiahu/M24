class Shapes2{
    constructor() {}
   
    calculateArea(): number {
      return 0;
    }
    calculatePerimeter(): number {
        return 0;
      }
  }
  class Circles2 extends Shapes2 {
    private radius: number;
   
    constructor(radius: number) {
      super();
      this.radius = radius;
    }
   
    calculateArea(): number {
      return Math.PI * this.radius * this.radius;
    }
    calculatePerimeter(): number {
        return 2 * Math.PI * this.radius;
      }
  }  
  class Rectangles2 extends Shapes2 {
    private  width: number;
    private  height: number;
   
    constructor(width: number, height: number) {
      super();
      this.width = width;
      this.height = height;
    }
   
    calculateArea(): number {
      return this.width * this.height;
    }
    calculatePerimeter(): number {
        return 2 * (this.width + this.height);
      }
  }

  let images3 = new Circles2(5)
  console.log("Diện tích hình tròn",images3.calculateArea());
  console.log("Chu vi hình tròn",images3.calculatePerimeter())

  let images4 = new Rectangles2(3,4)
  console.log("Diện tích hình chữ nhật",images4.calculateArea());
  console.log("Chu vi hình chữ nhật",images4.calculatePerimeter());
  