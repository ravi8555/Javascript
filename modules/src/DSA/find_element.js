/* Given an array of n elements and an integer x,find the index where x is present in the array. If there are multiple occurrences, find the leftmost one. If x is not present, return*/
//  n = length of array
//  x = find the given x
// arr = array of elements

function findElement(n, arr, x){
    for(let i =0; i < n; i++){
        if(x === arr[i]){
            return i
        }
    }
    return -1
}

console.log("findElement =>", findElement(5, [11,33,22,11,44,55,66], 66));


