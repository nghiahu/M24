"use strict";
let squareNumber = (num) => {
    if (typeof num === 'number') {
        return num ** 2;
    }
    else {
        let result = num.map((item) => {
            return item ** 2;
        });
        return result;
    }
};
console.log(squareNumber(4));
console.log(squareNumber([5, 6, 7]));
