//it works on the concept of divide and conquer and it works with sorted array
//function accepts a sorted array
//create a left pointer at the start of [] and a right poiter at the end of the []
//while the left pointer comes before the left pointer
//  create a pointer in the middle
//  if the value is found return the value
//  if the value is too small, move the left pointer
//  if the value too large,move the right pointer down
//if you never find the value return -1..

function binarySearch(arr,val){
    var start = 0;
    var end = arr.length-1;
    var middle=Math.floor((start+end)/2);
    while (arr[middle] !== val && start<=end){
        if(val<arr[middle]){
            end = middle-1;
            
        }else{
            start = middle+1;
        }
        middle = Math.floor((start+end)/2);
        
    }
    if(arr[middle]==val){
        return middle;
    }
    return -1;
}

binarySearch([23,25,87,12,45,65,98,31],45)