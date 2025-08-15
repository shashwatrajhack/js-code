//checking pallindrome

// function isPallindrome(num){
//     let str = num.toString();

//    let len = str.length;
//    for(let i = 0;i<len/2;i++){
//     if(str[i] !== str[len - 1 - i]){
//         return false;
//     }
//    }
//     return true;;

// }
// let num1 = 121;
// console.log(num1 + " is a pallindrome: " + isPallindrome(num1));

function isPallindrome(n){
    let xCopy = n;
    n = Math.abs(n);
    // if(n<0) return false;
    let rev = 0;

    while (n>0){
        let rem = n%10;
        rev = rev*10 + rem;
        n = Math.floor(n/10);
    }


    return xCopy<0?-rev:rev;
}

isPallindrome(-455);