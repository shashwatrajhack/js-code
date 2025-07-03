//Check if an alphabet is uppercase or lowercase.

function isUpperCase(char){
    if(char >= 'A' && char <= 'Z'){
        return true;
    }
    return false;
}

let char = 'D';
console.log("is " + char + " an uppercase alphabet? " + isUpperCase(char));