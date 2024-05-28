type Shape = Circle | Square;

interface Circle {
  kind: 'circle';
  radius: number;
}

interface Square {
  kind: 'square';
  sideLength: number;
}

function calculateArea(shape:Shape):number{
  if (shape.kind === 'circle') {
    return Math.PI * shape.radius * shape.radius;
  } else if (shape.kind === 'square') {
    return shape.sideLength * shape.sideLength;
  }
}


const circle: Circle = { kind: 'circle', radius: 3 };
const square: Square = { kind: 'square', sideLength: 4 };

console.log(calculateArea(circle)); 
console.log(calculateArea(square))
