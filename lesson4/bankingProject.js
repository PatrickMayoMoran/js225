function makeBank() {
  return {
    accounts: [],
  };
}

let bank = makeBank();
console.log(bank.accounts);

function makeAccount() {
  return {
    balance: 0,

    transactions: [],

    deposit(amount) {
      this.balance += amount;
      this.transactions.push({type: "deposit", amount: amount});
      return amount;
    },

    withdraw(amount) {
      if (amount > this.balance) {
        amount = this.balance;
      }

      this.balance -= amount;
      this.transactions.push({type: "withdraw", amount: amount});
      return amount;
    }
  };
}

let account = makeAccount();

console.log(account.deposit(100));
console.log(account.transactions);
console.log(account.withdraw(19));
console.log(account.balance);
console.log(account.withdraw(91));
console.log(account.transactions);
console.log(account.balance);

let otherAccount = makeAccount();
console.log(otherAccount.balance)
