/* sophisticated_code.js */

// This code is a complex implementation of a banking system with customer accounts, transactions, and authentication.

class Account {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
    this.transactions = [];
  }

  deposit(amount) {
    this.balance += amount;
    this.transactions.push({
      type: "deposit",
      amount: amount,
      balance: this.balance,
      timestamp: new Date()
    });
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log(`Insufficient funds for withdrawal! Available balance: ${this.balance}`);
    } else {
      this.balance -= amount;
      this.transactions.push({
        type: "withdrawal",
        amount: amount,
        balance: this.balance,
        timestamp: new Date()
      });
    }
  }

  getBalance() {
    return this.balance;
  }

  getTransactionHistory() {
    return this.transactions;
  }
}

class Bank {
  constructor() {
    this.customers = {};
  }

  createAccount(name, initialDeposit) {
    const account = new Account(name, initialDeposit);
    this.customers[name] = account;
  }

  getAccount(name) {
    return this.customers[name];
  }

  authenticate(name, password) {
    // Complex authentication logic here
    return true;
  }
}

// Sample usage

const bank = new Bank();

bank.createAccount("John Doe", 1000);
bank.createAccount("Jane Smith", 5000);

const johnAccount = bank.getAccount("John Doe");

johnAccount.deposit(500);
johnAccount.withdraw(200);

console.log(johnAccount.getBalance());
console.log(johnAccount.getTransactionHistory()); 

const janeAccount = bank.getAccount("Jane Smith");
console.log(janeAccount.getBalance());
console.log(janeAccount.getTransactionHistory()); 

console.log(bank.authenticate("John Doe", "12345"));