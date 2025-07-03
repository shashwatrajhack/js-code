//Strings in JS
//String is a sequence of characters used to represent text.
//can be created using single quotes, double quotes, or backticks (template literals).
//Strings are immmutable in JavaScript, meaning once created, they cannot be changed.

let str = "Arya College";
let length=str.length;
console.log("Length of string is: " + length);


//Template literals
//Template literals are enclosed by backticks (``) and can contain placeholders for variables or expressions.
// They allow for multi-line strings and string interpolation.
//It is a way to have embedded expressions in strings.
//String Interpolation is the process of embedding variables or expressions within a string.

let pen = {
    name:"Parker",
    price:"$110",
    color:"Black"
}

let infoPen = `Pen name is ${pen.name}, Price oth the pen is ${pen.price}`;
console.log(infoPen);

//String Methods
//1. toUpperCase() - Converts the string to uppercase.
//2. toLowerCase() - Converts the string to lowercase.
//3.trim() - Removes whitespace from both ends of the string.
//4.str.slice(start, end?) - Extracts a section of the string and returns it as a new string.
//5.str.concat(str1, str2) - Joins two or more strings together.
//6.str.replace(searchValue, newValue) - Replaces a specified value with another value in the string.
//7.str.split(separator) - Splits the string into an array of substrings based on a specified separator.
//8.str.charAt(index) - Returns the character at the specified index in the string.