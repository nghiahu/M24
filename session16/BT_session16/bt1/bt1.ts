function TypeScript<T>(type:T):T{
    return type
}

console.log(TypeScript<number>(2))
console.log(TypeScript<string>("string"));
console.log(TypeScript<boolean>(true));
console.log(TypeScript<undefined>(undefined));


