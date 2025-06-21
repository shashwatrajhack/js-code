//Arithmetic Operators
//+, -, *, /, %
//Assignment Operators
//=, +=, -=, *=, /=, %=
let a = 5;
let b = 4;
//a += 6;
console.log(a); // 11

a *= 4;
console.log(a);

a **=2;
console.log(a);


//Comparison Operators
//==, ===, !=, !==, >, <, >=, <=
let x = "30";
let y = 30;
console.log(x===y);

//Logical Operators
//&& - logical AND
//|| - logical OR
//! - logical NOT

let w = 6;
let z = 10;

let cond1 = w>z;
let cond2 = w==6;

console.log("cond1 && cond2", cond1&&cond2);
console.log("cond1 || cond2", cond1||cond2);

//Ternary Operator
//condition ? expressionIfTrue : expressionIfFalse
let isLoggedIn = true;
let message = isLoggedIn ? "Welcome back!" : "Please log in";
console.log(message);
//Nullish Coalescing Operator
//?? - returns the right-hand operand when the left-hand operand is null or undefined
let userName = null;
let displayName = userName ?? "Guest";
console.log(displayName); // "Guest"
//Optional Chaining Operator
//?. - allows safe access to deeply nested properties without having to check each level
let user = {
    profile: {
        name: "Alice",
        address: {
            city: "Wonderland"
        }
    }
};
let city = user.profile?.address?.city ?? "Unknown City";
console.log(city); // "Wonderland"
//Spread Operator
//... - allows an iterable to expand in places where zero or more arguments are expected
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];
console.log(arr2); // [1, 2, 3, 4, 5]
//Rest Operator
//... - allows a function to accept an indefinite number of arguments as an array
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3, 4)); // 10

