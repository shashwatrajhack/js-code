function linearSearch(arr,val){
    for(i=0;i<arr.length;i++){
        if(arr[i]==val)return i;
        
    }
    return -1;
}

linearSearch([12,52,85,45,65,96],65)