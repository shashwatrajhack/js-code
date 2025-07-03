//functios = Block of code that performs a specific task.

function countVowels(str){
    let count = 0;
    for(let char of str){
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
            count++;
        }
    }
    return count;
}

//callback function
// A function that is passed as an argument to another function and is executed after the completion of that function.
//higher-order function
// A function that takes another function as an argument or returns a function as its result.
//example of higher-order function
//forEach, map, filter, reduce

let nums = [3,5,7,9,11];

nums.forEach((num)=>{
    console.log(num * num);
})