let account = {
  balance: 0,

  deposit(amount) {
    this.balance += amount;
    return amount;
  },

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      return amount;
    } else {
      let existingBalance = this.balance;
      this.balance = 0;
      return existingBalance;
    }
  }
}

console.log(account.deposit(100));
console.log(account.withdraw(19));
console.log(account.balance);
console.log(account.withdraw(91));
console.log(account.balance);

