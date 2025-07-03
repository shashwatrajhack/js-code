//Check if a number is divisible by 5 and 11.

function isDivisible(num){

    if(num % 5 === 0 && num % 11 === 0){
        return true;
    }
    return false;
}


let num = 78;
console.log(num + " is divisible by 5 and 11: " + isDivisible(num));