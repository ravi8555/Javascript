// console.log("Revision");

const arr = [1,2,8,9,6]
const n = arr.length
function findElement(n, arr, x) {
    for(let idx = 0; idx <n; idx++){
        if(arr[idx] == x){
            return idx
        }
    }
    return -1
}

console.log(findElement(5, arr, 6));