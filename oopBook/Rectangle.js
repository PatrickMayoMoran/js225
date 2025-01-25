class Rectangle {
  // your code here
  #height;
  #width;

  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  set width(w) {
    if (typeof(w) === 'number' && w > 0) {
      this.#width = w;
    } else {
      throw new RangeError('Width must be a positive number');
    }
  }

  set height(h) {
    if (typeof(h) === 'number' && h > 0) {
      this.#height = h;
    } else {
      throw new RangeError('Height must be a positive number');
    }
  }

  get height() {
    return this.#height;
  }

  get width() {
    return this.#width
  }

  get area() {
    return this.width * this.height;
  }
}

let rect = new Rectangle(10, 5);
console.log(rect.area); // 50

rect.width = 20;
console.log(rect.area); // 100

rect.height = 12;
console.log(rect.area); // 240

try {
  rect.width = 0;
} catch (e) {
  console.log(e); // RangeError: width must be positive
}

try {
  rect.height = -10;
} catch (e) {
  console.log(e); // RangeError: height must be positive
}
