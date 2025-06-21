//Conditional in javascript
// Conditional statements are used to perform different actions based on different conditions
// if statement - executes a block of code if a specified condition is true
// if...else statement - executes one block of code if a condition is true, and another block of code if it is false
// else if statement - specifies a new condition to test, if the first condition is false
// switch statement - selects one of many blocks of code to be executed based on a value

let mode = "dark-mode";
let age = 23;
if(age>=18){
    console.log("You can vote");
}

if(age<18){
    console.log("You cannot vote");

}

let color;

if(mode == "dark-mode"){
    color="black";

}else{
    color = "white";
}

console.log("The color is", color);

