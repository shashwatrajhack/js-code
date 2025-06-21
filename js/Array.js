//Arrays in JS
//Collection of items

let marks = [40,90,80,55,70,91,32];
console.log(marks);
console.log(typeof marks); //object

let heroes = ["IronMan", "Thor", "Hulk", "Black Widow","Captain America"];
for(let i = 0;i<heroes.length;i++){
    console.log(heroes[i]);
}

for(let hero of heroes){
    console.log(hero);
}


let marks1 = [85,97,44,37,76,60];
let sum = 0;
let average;
for(let i = 0;i<marks1.length;i++){
    sum = sum + marks1[i];

    average = sum/marks1.length;

}
console.log("Sum of marks is: "+ sum);
console.log("Average marks is: "+ average);

//Array Methods
//1.push() - Adds one or more elements to the end of an array and returns the new length of the array.
//2.pop() - Removes the last element from an array and returns that element.
//3.unshift() - Adds one or more elements to the beginning of an array and returns the new length of the array.
//4.shift() - Removes the first element from an array and returns that element.
//5.toString() - Converts an array to a string by joining its elements with commas.
//6.array.slice(start, end?) - Extracts a section of the array and returns it as a new array.
//7.array.splice(start, deleteCount, item1, item2, ...) - Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
//8. map(callback) - Creates a new array populated with the results of calling a provided function on every element in the calling array.
let vegetables = ["Carrot", "Potato", "Tomato", "onion", "ladyfinger"];
console.log(vegetables);
vegetables.push("Capsicum");
console.log(vegetables);
console.log(vegetables.toString());
