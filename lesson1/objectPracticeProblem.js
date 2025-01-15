let invoices = {
  unpaid: [],

  paid: [],

  payInvoice: function(name) {
    let unpaid = [];
    for (let invoice of this.unpaid) {
      if (name === invoice.name) {
        this.paid.push(invoice);
      } else {
        unpaid.push(invoice);
      }
    }

    this.unpaid = unpaid;
  },

  add: function(name, amount) {
    this.unpaid.push({
      name,
      amount,
    });
  },

  totalPaid: function() {
    return this.paid.reduce((acc, invoice) => acc + invoice.amount, 0);
  },

  totalDue: function() {
    return this.unpaid.reduce((acc, invoice) => acc + invoice.amount, 0);
  },
}

invoices.add("Due North Development", 250);
invoices.add("Moonbeam Interactive", 187.50);
invoices.add("Slough Digital", 300);
console.log(invoices.totalDue());
invoices.payInvoice("Due North Development");
invoices.payInvoice("Slough Digital");
console.log(invoices.totalDue());
console.log(invoices.totalPaid());
