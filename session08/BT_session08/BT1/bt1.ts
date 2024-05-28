function parseInput(strr:string):(number|boolean|string|null|undefined){
    if (strr === "number") {
        return 123; 
    } else if (strr === "boolean") {
        return true; 
    } else if (strr === "string") {
        return "123"; 
    } else if (strr === "null") {
        return null;
    } else if (strr === "undefined") {
        return undefined;
    } else {
        throw new Error("Không hợp lệ");
    }
}
console.log(parseInput("number"));     
console.log(parseInput("boolean"));    
console.log(parseInput("string"));     
console.log(parseInput("null"));       
console.log(parseInput("undefined"));  
