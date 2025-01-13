console.log("Question ===>  Check for occurence of substring");
/* You are given a string str and a substring of that string k as arguments.
Find the index of the first occurrence of that substring in the actual string
Find the index of the last occurrence of that substring in the actual string.
If both these indexes are the same, then return true. Otherwise, return false. */
// function  checkForSubstr(str, k){
//     if(str.indexOf(k) === str.lastIndexOf(k)){       
//         return true
//     }else{
//         return false
//     }
// }
// console.log(checkForSubstr("Next time there won't be a next time", "time"));
console.log("Question ===> Write a function that takes a string as argument. The string contains the substring 'is'. Return the index of 'is'.")
// function getIndexOfsub(str, k){
//     for(let i = 0; i < str.length - k.length; i++){
//         if(str.substring(i,  i + k.length) === k){
//             return  i
//         }
//     }
//     return -1
// }
// console.log(getIndexOfsub("function that takes a string as argument", "as"));


// function myFunction(a){
//     const len = a.length;
//     const firstHalf = a.substring(0,Math.floor(len / 2))
//     return firstHalf
// }

// console.log( myFunction("My name is Aman"));
console.log("Create the function which accepts an array of numbers as input.");
function checkPositive(arr){
    // // Approach -1
    // for(let i =0; i < arr.length; i++){
    //     if(arr[i] < 0){
    //         return false
    //     }
    // }
    // return true
    // // Approach -2
    return arr.every( function(num){
     return num >= 0;
    })
    // same as=> return arr.every( (num) => num >= 0)
}
console.log("checkPositive", checkPositive([1,2,3,4]));




