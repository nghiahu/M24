class Shapes{
    constructor() {}
   
    calculateArea(): number {
      return 0;
    }
  }
  class Circles extends Shapes {
    private radius: number;
   
    constructor(radius: number) {
      super();
      this.radius = radius;
    }
   
    calculateArea(): number {
      return Math.PI * this.radius * this.radius;
    }
   
  }  
  class Rectangles extends Shapes {
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
   
  }

  let images1 = new Circles(5)
  console.log(images1.calculateArea());

  let images2 = new Rectangles(3,4)
  console.log(images2.calculateArea());
