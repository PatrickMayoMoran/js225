let account = {
  balance: 0,

  deposit(amount) {
    this.balance += amount;
    return amount;
  },

  withdraw(amount) {
    if (amount > this.balance) {
      amount = this.balance;
    }

    this.balance -= amount;
    return amount;
  },
}

console.log(account.deposit(100));
console.log(account.withdraw(19));
console.log(account.balance);
console.log(account.withdraw(91));
console.log(account.balance);

