function makeBank() {
  return {
    accounts: [],

    makeAccount(number) {
      let balance = 0;
      let transactions = [];

      return {
        balance() {
          return balance;
        },

        number() {
          return number;
        },

        transactions() {
          return transactions;
        },

        deposit(amount) {
          balance += amount;
          transactions.push({type: "deposit", amount: amount});
          return amount;
        },

        withdraw(amount) {
          if (amount > balance) {
            amount = balance;
          }

          balance -= amount;
          transactions.push({type: "withdraw", amount: amount});
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
      return destination.deposit(source.withdraw(amount));
    },
  };
}

let bank = makeBank();
let account = bank.openAccount();
console.log(account.balance());
// 0
console.log(account.deposit(17));
// 17
let secondAccount = bank.openAccount();
console.log(secondAccount.number());
// 102
console.log(account.transactions());
// [{...}]
