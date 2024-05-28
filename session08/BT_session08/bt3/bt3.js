"use strict";
function calculateArea(shape) {
    if (shape.kind === 'circle') {
        return Math.PI * shape.radius * shape.radius;
    }
    else if (shape.kind === 'square') {
        return shape.sideLength * shape.sideLength;
    }
}
const circle = { kind: 'circle', radius: 3 };
const square = { kind: 'square', sideLength: 4 };
console.log(calculateArea(circle));
console.log(calculateArea(square));
