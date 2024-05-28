type Person = {
    name: string;
    age: number;
    address:{
        district:string;
        city:string;
    };
};

function validatePerson(obj: any): obj is Person {
    return (
        typeof obj === 'object' &&
        typeof obj.name === 'string' &&
        typeof obj.age === 'number' &&
        typeof obj.address === 'object' &&
        typeof obj.address.district === 'string' &&
        typeof obj.address.city === 'string'
    );
}
const person1 = {
    name: "Nam",
    age: 18,
    address: {
        district:"hà đông",
        city:"hn"
    }
}
const person2 = {
    name: "Hoa",
    age: 19,
    address: "hcm"
       
};

console.log(validatePerson(person1)); 
console.log(validatePerson(person2)); 

