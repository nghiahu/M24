"use strict";
let monthlyInterest = 0;
class Account {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    deposit(moneys) {
        this.balance += moneys;
    }
    withdraw(moneys) {
        if (this.balance < moneys) {
            console.log("Số dư tài khoản của bạn không đủ để rút");
        }
        else {
            this.balance -= moneys;
        }
    }
}
class SavingsAccount extends (Account) {
    constructor(accountNumber, balance, interestRate) {
        super(accountNumber, balance);
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.interestRate = interestRate;
    }
    calculateInterest() {
        monthlyInterest = this.balance / 100 * this.interestRate;
    }
    showBalance() {
        console.log("Số dư: ", this.balance);
    }
}
let savingsAccount1 = new SavingsAccount("0291334", 1200000, 3.5);
savingsAccount1.showBalance();
savingsAccount1.withdraw(100);
savingsAccount1.calculateInterest();
console.log("lãi xuẩt:", monthlyInterest);
