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
  };
}

let bank = makeBank();
console.log(bank.accounts);

let account = bank.openAccount();
console.log(account.number);

console.log(bank.accounts);
console.log(bank.accounts[0]);

let secondAccount = bank.openAccount();
console.log(secondAccount.number);
