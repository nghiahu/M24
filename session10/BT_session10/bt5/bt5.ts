class Department {
    public readonly id: number;
    private name: string;
    private employees: string[];

    constructor(id: number, name: string, employees: string[]) {
        this.id = id;
        this.name = name;
        this.employees = employees;
    }

    describe(): void {
        console.log(`Id: ${this.id}`);
        console.log(`Name: ${this.name}`);
    }
}
const department = new Department(1, "nhân sự", ["Hoa", "Lan", "Đức"]);
department.describe();
