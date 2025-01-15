let greeter = {
  morning: function() {
    console.log("Good Morning!");
  }
}

greeter.morning(); // method invocation, greeter is the receiver/caller

let functionMorning = greeter.morning // functionMorning is a binding for
                                      // greeters morning function

functionMorning(); // function invocation without caller/receiver
