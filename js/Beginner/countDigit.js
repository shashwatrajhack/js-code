function countDigits(n){

     let count = 0;
    if(n===0) return 1;
   
    while(n>0){
        n = Math.floor(n/10);
        count++
    }
    return console.log(count);
}
countDigits(155)