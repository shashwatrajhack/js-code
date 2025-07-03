//Javascript is a dynamically typed language
// It means we don't have to specify the type of variable while declaring it
// console.log("Hey there! this side shashwat");
// console.log("I love javascript !");
//variables are conatiners for data
//Variable declaration methods
//var - it can be redeclared and updated. A global scope variable
//let - it can be updated but not redeclared. A block scope variable
//const - it can neither be updated nor redeclared. A block scope variable
//Data types in javascript
//String - a sequence of characters enclosed in single or double quotes
//Number - a numeric value, can be an integer or a float
//Boolean - a true or false value
//Undefined - a variable that has been declared but not assigned a value
//Null - a variable that has been explicitly assigned a null value
//Symbol - a unique and immutable value, often used as object property keys
//BigInt - a numeric value that can represent integers with arbitrary precision


name = "Tony !";
console.log(name);
let age = 20;
console.log(age);
let price = 100;
console.log(price);
let socialMedia = "Instagram";
console.log(socialMedia);
let x  = null;

const student = {
    name:"Ravi",
    age:24,
    cgpa:8.5,
    isPass:true
}

student.age = student.age + 2;


console.log(student.age);

const product = {
    name: "Parker Jotter Standard Pen",
    price:270,
    offer: "(5% off)",
    rating:4.5
}

console.log(product.name);
console.log(product.price);
console.log(product.offer);
console.log(product.rating);
console.log(product);