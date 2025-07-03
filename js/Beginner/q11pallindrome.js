//checking pallindrome

function isPallindrome(num){
    let str = num.toString();

   let len = str.length;
   for(let i = 0;i<len/2;i++){
    if(str[i] !== str[len - 1 - i]){
        return false;
    }
   }
    return true;;

}
let num1 = 121;
console.log(num1 + " is a pallindrome: " + isPallindrome(num1));