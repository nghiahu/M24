const VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  });
let monthlyInterest2 = 0
class Account2 {
    protected accountNumber:string
    protected balance:number
    constructor(accountNumber:string,balance:number){
        this.accountNumber = accountNumber
        this.balance = balance
    }
    deposit(money:number):void{
        this.balance += money
    }
    withdraw(money:number):void{
        if(this.balance < 100){
            console.log("Số dư tài khoản của bạn không đủ để rút")
        }else{
        this.balance -= money
        }
    }
    showBalance(){
        console.log("Số dư: ",VND.format(this.balance));
    }
}
class SavingsAccount2 extends(Account2){
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
}
class CheckingAccount extends(Account2){
    private overdraftLimit:number
    constructor(accountNumber:string,balance:number,overdraftLimit:number){
        super(accountNumber,balance)
        this.accountNumber = accountNumber
        this.balance = balance
        this.overdraftLimit = overdraftLimit  
    } 
    withdraw(money:number):void{
        if(this.balance + this.overdraftLimit < money){
            console.log("Số tiền vượt quá hạn mức cho phép")
        }else{
        this.balance -= money
        }
    }   
}
let checkingAccount1 = new CheckingAccount("02134",5000000,1000000)
checkingAccount1.withdraw(3000000);
checkingAccount1.showBalance();


