function createInvoice(services={}) {
  // implement the factory function here
  return {
    internet: services.internet || 5500,
    phone: services.phone || 3000,

    total() {
      return this.internet + this.phone;
    }
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
function createPayment(services) {
  // implement the factory function here
}

function paymentTotal(payments) {
  let total = 0;
  let i;

  for (i = 0; i < payments.length; i += 1) {
    total += payments[i].total();
  }

  return total;
}

let payments = [];
payments.push(createPayment());
payments.push(createPayment({
  internet: 6500,
}));

payments.push(createPayment({
  phone: 2000,
}));

payments.push(createPayment({
  phone: 1000,
  internet: 4500,
}));

payments.push(createPayment({
  amount: 10000,
}));

console.log(paymentTotal(payments));      // => 24000
