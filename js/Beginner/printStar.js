function printStar(n){
    for(let i = 0;i<n;i++){
        let star = "";
        
        for(let j = 0;j<i;j++){
            star += (j);
        }
        for(let p = 0;p<n-(i+1);p++){
            star += " "
        }
        console.log(star);
    }
};

printStar(8);