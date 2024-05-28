class Vehicles10 {
    public name: string;
    protected year: number;
    private company: string;
    readonly id: number;
    
    constructor(name: string, year: number, company: string, id: number) {
        this.name = name;
        this.year = year;
        this.company = company;
        this.id = id;
    }
}

const vehicle = new Vehicles10("Honda E6", 2018, "Honda", 1);


console.log("Vehicle Information:");
console.log("Name:", vehicle.name); 
console.log("Year:", vehicle.year); 
console.log("Company:", vehicle.company); 
console.log("ID:", vehicle.id); 
