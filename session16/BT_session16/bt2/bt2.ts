function swappe<T>(arr: T[], index1: number, index2: number): T[] {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr;
}
let array: number[] = [1, 2, 3, 4, 5];
let swappe1 = swappe<number>(array, 1, 3);
console.log(swappe1);

let array2:string[] = ["t", "n", "a", "b", "v"];
let swappe2 = swappe<string>(array2, 1, 4);
console.log(swappe2);
