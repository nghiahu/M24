"use strict";
function swappe(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr;
}
let array = [1, 2, 3, 4, 5];
let swappe1 = swappe(array, 1, 3);
console.log(swappe1);
let array2 = ["t", "n", "a", "b", "v"];
let swappe2 = swappe(array2, 1, 4);
console.log(swappe2);
