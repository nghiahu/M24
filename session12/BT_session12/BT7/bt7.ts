let monthlyInterest = 0
class Account {
    protected accountNumber:string
    protected balance:number
    constructor(accountNumber:string,balance:number){
        this.accountNumber = accountNumber
        this.balance = balance
    }
    deposit(moneys:number):void{
        this.balance += moneys
    }
    withdraw(moneys:number):void{
        if(this.balance < moneys){
            console.log("Số dư tài khoản của bạn không đủ để rút")
        }else{
        this.balance -= moneys
        }
    } 
}
class SavingsAccount extends(Account){
    private interestRate:number
    constructor(accountNumber:string,balance:number,interestRate:number){
        super(accountNumber,balance)
        this.accountNumber = accountNumber
        this.balance = balance
        this.interestRate = interestRate
    }
    calculateInterest():void{
        monthlyInterest = this.balance / 100 * this.interestRate 
    }
    showBalance(){
        console.log("Số dư: ",this.balance);
    }
}
let savingsAccount1 = new SavingsAccount("0291334",1200000,3.5)
savingsAccount1.showBalance();
savingsAccount1.withdraw(100);
savingsAccount1.calculateInterest();
console.log("lãi xuẩt:",monthlyInterest)

