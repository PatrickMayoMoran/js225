let shape = {
  getType() {
    return this.type;
  },
}

function Triangle(a, b, c) {
  this.a = a;
  this.b = b;
  this.c = c;
  this.type = "Triangle";
}

Triangle.prototype = shape;
Triangle.prototype.getPerimeter = function() {
  return this.a + this.b + this.c;
}

// When we manually set Triangle.prototype to shape, we lost connection to the
// constructor. So we reset it here to reestablish the link!
Triangle.prototype.constructor = Triangle

let t = new Triangle(3, 4, 5);
t.constructor;                 // Triangle(a, b, c)
shape.isPrototypeOf(t);        // true
t.getPerimeter();              // 12
t.getType();                   // "triangle"
