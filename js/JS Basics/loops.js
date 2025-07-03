// Loops are used to repeat a block of code again and again ubtil a specified condition is met.
// There are several types of loops in JavaScript:
// 1. for loop - executes a block of code a specified number of times
// 2. while loop - executes a block of code as long as a specified condition is true
// 3. do...while loop - executes a block of code once, and then repeats the loop as long as a specified condition is true
// 4. for...in loop - iterates over the properties of an object
// 5. for...of loop - iterates over the values of an iterable object (like arrays or strings)
// 6. forEach loop - executes a provided function once for each array element
// 7. map loop - creates a new array with the results of calling a provided function on every element in the calling array
// 8. filter loop - creates a new array with all elements that pass the test implemented by the provided function
// 9. reduce loop - executes a reducer function on each element of the array, resulting in a single output value
// 10. some loop - tests whether at least one element in the array passes the test implemented by the provided function
// 11. every loop - tests whether all elements in the array pass the test implemented by the provided function
// 12. find loop - returns the value of the first element in the array that satisfies the provided testing function
// 13. findIndex loop - returns the index of the first element in the array that satisfies the provided testing function
// 14. entries loop - returns a new Array Iterator object that contains the key/value pairs for each index in the array
// 15. keys loop - returns a new Array Iterator object that contains the keys for each index in the array
// 16. values loop - returns a new Array Iterator object that contains the values for each index in the array
// 17. for await...of loop - used to iterate over asynchronous iterables
// 18. async forEach loop - executes a provided asynchronous function once for each array element
// 19. async map loop - creates a new array with the results of calling an asynchronous function on every element in the calling array
// 20. async filter loop - creates a new array with all elements that pass the test implemented by the provided asynchronous function
// 21. async reduce loop - executes an asynchronous reducer function on each element of the array, resulting in a single output value
// 22. async some loop - tests whether at least one element in the array passes the test implemented by the provided asynchronous function
// 23. async every loop - tests whether all elements in the array pass the test implemented by the provided asynchronous function
// 24. async find loop - returns the value of the first element in the array that satisfies the provided testing asynchronous function
// 25. async findIndex loop - returns the index of the first element in the array that satisfies the provided testing asynchronous function
// 26. async entries loop - returns a new Array Iterator object that contains the key/value pairs for each index in the array asynchronously
// 27. async keys loop - returns a new Array Iterator object that contains the keys for each index in the array asynchronously
// 28. async values loop - returns a new Array Iterator object that contains the values for each index in the array asynchronously
// 29. async for await...of loop - used to iterate over asynchronous iterables asynchronously
// 30. async forEach loop - executes a provided asynchronous function once for each array element asynchronously
// 31. async map loop - creates a new array with the results of calling an asynchronous function on every element in the calling array asynchronously
// 32. async filter loop - creates a new array with all elements that pass the test implemented by the provided asynchronous function asynchronously
// 33. async reduce loop - executes an asynchronous reducer function on each element of the array, resulting in a single output value asynchronously
// 34. async some loop - tests whether at least one element in the array passes the test implemented by the provided asynchronous function asynchronously
// 35. async every loop - tests whether all elements in the array pass the test implemented by the provided asynchronous function asynchronously
// 36. async find loop - returns the value of the first element in the array that satisfies the provided testing asynchronous function asynchronously
// 37. async findIndex loop - returns the index of the first element in the array that satisfies the provided testing asynchronous function asynchronously
//     return numbers.reduce((acc, num) => acc + num, 0);
// }

//For Loop Example

// let sum = 0;
// let n = prompt("Enter a no.: ")
// for (let i= 1;i<=n;i++){
//     sum = sum+i;

//     console.log(sum);
// }
// console.log(`The sum of first ` +n + " "+ `natural numbers is`, sum);

//While Loop Example
let name = "harkirat";
let i = 0;

while(i<10){
    console.log(name);
    i++
}

//do...while loop example
let j = 0;
do {
    console.log(name);
    j++;
}
while (j < 5);
// console.log("This will always execute at least once");

//For-of loop
// The for...of loop is used to iterate over iterable objects like arrays, strings, etc.
let str = "Haezelwood";
let count = 0;
for(let val of str){
    console.log(val);
    count++

}
console.log("Total characters in the string:", count);
//for-in loop
// The for...in loop is used to iterate over the properties of an object.


