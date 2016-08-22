function Counter() {
  this.value = 0;
  this.increment = function(v) {
    this.value += v * 2;
  };
  this.decrement = function(v) {
    this.value -= v;
  };
  this.showValue = function() {
    console.log(this.value);
  };
}

function MultiCounter(c1, c2) {
  this.c1 = c1;
  this.c2 = c2;
  this.increment = function(v) {
    this.c1.increment(v);
    this.c2.increment(v);
  };
  this.decrement = function(v) {
    this.c1.decrement(v);
    this.c2.decrement(v);
  };
  this.showValue = function() {
    this.c1.showValue();
    this.c2.showValue();
  };
}

var c1 = new Counter();
var c2 = new Counter();

c1.increment(23);
c2.increment(42);

c1.showValue();
c2.showValue();

var m = new MultiCounter(c1, c2);
m.increment(10);
m.showValue();

var m2 = new MultiCounter (m, new Counter());
m2.increment(5);
m2.showValue();
