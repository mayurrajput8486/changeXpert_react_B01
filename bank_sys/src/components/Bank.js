export default class BankAccount {
    constructor(accountHolder, balance = 0) {
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount
            return `✅${amount} Rs. Deposited Successfully.`
        } else {
            return `&#10060; ${amount} Amount must be greater than 0.`
        }
    }

    withdraw(amount) {
        if (amount <= 0 && amount > this.balance) {
            return `&#10060; Amount Must be greater than 0 or Insufficient Fund.`
        } else {
            this.balance -= amount
            return `&#9989; ${amount} Rs. withdraw Successfully.`
        }
    }

    checkBalance() {
        return `${this.accountHolder} Your Current Balance is - Rs. ${this.balance}`
    }
}

