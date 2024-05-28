class Employees{
    public name:string
    protected company:string
    private phones:string
    constructor(name:string,company:string,phones:string){{
        this.name = name
        this.company = company
        this.phones = phones
    }}

    printInfo():void{{
        console.log("name: ",this.name);
        console.log("company: ",this.company);
        console.log("phones: ",this.phones);
    }}
}
class Manager extends(Employees){
    teamSize:number
    constructor(name:string,company:string,phones:string,teamSize:number){
        super(name,company,phones)
        this.name = name
        this.company = company
        this.phones = phones
        this.teamSize = teamSize
    }
}
