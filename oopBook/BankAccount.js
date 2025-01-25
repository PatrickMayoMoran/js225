class BankAccount {
  // your code here
  #balance;

  constructor() {
    this.#balance = 0;
  }

  deposit(amount) {
    this.#balance += amount;
    this.#checkBalance();
  }

  withdraw(amount) {
    if (amount > this.#balance) {
      throw new RangeError('Insufficient Funds');
    } else {
      this.#balance -= amount;
      this.#checkBalance();
    }
  }

  #checkBalance() {
    console.log(`Current balance is ${this.#balance}.`);
  }
}

let account = new BankAccount();
account.deposit(100);
account.withdraw(50);
// account.withdraw(100); // RangeError: Insufficient funds
