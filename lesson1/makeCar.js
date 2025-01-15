function makeCar(accelerateRate, brakeRate) {
  return {
    speed: 0,
    accelerateRate,
    brakeRate,

    accelerate() {
      this.speed += this.accelerateRate;
    },

    brake() {
      this.speed -= brakeRate;
      this.speed = this.speed < 0 ? 0 : this.speed;
    },
  }
}

let sedan = makeCar(8, 6);
sedan.accelerate();
console.log(sedan.speed);
sedan.brake();
console.log(sedan.speed)
sedan.brake();
console.log(sedan.speed)

let coupe = makeCar(12);
coupe.accelerate();
console.log(coupe.speed);

let hatchback = makeCar(9);
hatchback.accelerate();
console.log(hatchback.speed);
