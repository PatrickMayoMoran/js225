function makeBank() {
  return {
    accounts: [],

    makeAccount(number) {
      return {
        balance: 0,

        number,

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
    },

    openAccount() {
      let number = this.accounts.length + 101;
      let newAccount = this.makeAccount(number);
      this.accounts.push(newAccount);
      return newAccount;
    },

    transfer(source, destination, amount) {
      amount = source.withdraw(amount);
      destination.deposit(amount);
      return amount;
    },
  };
}

let bank = makeBank();
let source = bank.openAccount();
console.log(source.deposit(10));
// 10
let destination = bank.openAccount();
console.log(bank.transfer(source, destination, 7));
// 7
console.log(source.balance);
// 3
console.log(destination.balance);
// 7
