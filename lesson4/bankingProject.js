function makeBank() {
  let accounts = [];

  return {
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
      let number = accounts.length + 101;
      let newAccount = this.makeAccount(number);
      accounts.push(newAccount);
      return newAccount;
    },

    transfer(source, destination, amount) {
      return destination.deposit(source.withdraw(amount));
    },
  };
}

let bank = makeBank();
console.log(bank.accounts);
// undefined
