//Check if a character is a vowel or consonant

function isVowel(char){
    char = char.toLowerCase();
    if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
        return true;

    }
    return false;
}

let char = "v";
console.log("is " + char + " a vowel ?" + isVowel(char));