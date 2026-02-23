// Linear Search is a simple search algorithm used to find a specific element in an array.
//  It checks each element of the array one by one until the target value is found or the end of the array is reached.

let arr = [4,5,3,1,9];

function findElement(arr,n){
    for(let i = 0;i<arr.length;i++){
        if(arr[i] == n){
            return i;
        }
    }

    return -1;
};

console.log(findElement(arr,10));
