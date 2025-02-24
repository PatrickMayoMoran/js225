function createInvoice(services={}) {
  // implement the factory function here
  let paymentsReceived = [];
  return {
    internet: services.internet || 5500,
    phone: services.phone || 3000,

    total() {
      return this.internet + this.phone;
    },

    addPayment(payment) {
      paymentsReceived.push(payment);
    },

    addPayments(payments) {
      paymentsReceived.push(...payments);
    },

    amountDue() {
      let paid =  paymentsReceived.reduce((total, payment) => {
        return total + payment.total();
      }, 0);
      return this.total() - paid;
    },
  }
}

function invoiceTotal(invoices) {
  let total = 0;
  let i;

  for (i = 0; i < invoices.length; i += 1) {
    total += invoices[i].total();
  }

  return total;
}

// let invoices = [];
// invoices.push(createInvoice());
// invoices.push(createInvoice({
//   internet: 6500,
// }));
// 
// invoices.push(createInvoice({
//   phone: 2000,
// }));
// 
// invoices.push(createInvoice({
//   phone: 1000,
//   internet: 4500,
// }));
// 
// console.log(invoiceTotal(invoices));             // => 31000
function createPayment(services={}) {
  // implement the factory function here
  return {
    internet: services.internet || 0,
    phone: services.phone || 0,
    amount: services.amount || 0,

    total() {
      if (this.amount) {
        return this.amount;
      } else {
        return this.phone + this.internet;
      }
    },
  };
}

function paymentTotal(payments) {
  let total = 0;
  let i;

  for (i = 0; i < payments.length; i += 1) {
    total += payments[i].total();
  }

  return total;
}

// let payments = [];
// payments.push(createPayment());
// payments.push(createPayment({
//   internet: 6500,
// }));
// 
// payments.push(createPayment({
//   phone: 2000,
// }));
// 
// payments.push(createPayment({
//   phone: 1000,
//   internet: 4500,
// }));
// 
// payments.push(createPayment({
//   amount: 10000,
// }));
// 
// console.log(paymentTotal(payments));      // => 24000
let invoice = createInvoice({
  phone: 1200,
  internet: 4000,
});

let payment1 = createPayment({
  amount: 2000,
});

let payment2 = createPayment({
  phone: 1000,
  internet: 1200,
});

let payment3 = createPayment({
  phone: 1000,
});

invoice.addPayment(payment1);
invoice.addPayments([payment2, payment3]);
console.log(invoice.amountDue());       // this should return 0
