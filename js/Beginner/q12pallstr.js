//Check if a string is a palindrome

function isPallindrome(str){
    let stri = str.toString();
   let len = stri.length;
   for(let i = 0;i<len/2;i++){
    if(stri[i] !== stri[len - 1 - i]){
        return false;
    }
   }
    return true;;

}

let str1 = "madam";
console.log(str1 + " is a pallindrome: " + isPallindrome(str1));