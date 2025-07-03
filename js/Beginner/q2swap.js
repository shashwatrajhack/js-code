//Swap two numbers using a temporary variable.

let a = 10;
let b = 20;
let temp;
console.log("Before swapping:");
console.log("a =", a);
console.log("b =", b);

temp = a;
a = b;
b = temp;
console.log("After swapping:");
console.log("a =", a);
console.log("b =", b);