let cessna152 = {
  fuelCapacity: 24.5,
  cruisingSpeed: 111,
  takeOff() {
    console.log("Taking off!");
  },
  land() {
    console.log("Landing!");
  },
};

cessna152.takeOff();
cessna152.land();
