//Check if a number is prime.

function isPrime(num){
    if(num<= 1){
        return false;}
       
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0){
            return false; 
        }
    }
    return true;
}

let a = 29;
console.log(a + " " + isPrime(a));
let b = 15;
console.log(b + " " + isPrime(b));