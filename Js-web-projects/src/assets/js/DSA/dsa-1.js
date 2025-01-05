console.log("Question ==> Given coordinates of a point (x,y) in 2D plane, find in which quadrant does this point lie.");
// function findQuadarnt (x, y){
//     // if(x > 0 && y >0){
//     //     return "Qudarant I"
//     // } else if(x < 0 && y >0){
//     //      return "Qudarant II"
//     // }else if( x < 0 && y <0){
//     //      return "Qudarant III"
//     // }else if(x > 0 && y <0){
//     //      return "Qudarant IV"
//     // }
//     return (x > 0 && y > 0) ? "Quadrant I" :
//                  (x < 0 && y > 0) ? "Quadrant II" :
//                  (x < 0 && y < 0) ? "Quadrant III" :
//                  (x > 0 && y < 0) ? "Quadrant IV" :
//                  "Origin";
// }
// console.log(findQuadarnt (1, -1));
console.log("Question ==>, You are given a positive integer 'N'. You have to find the sum of first 'N' natural numbers.");

// const sumOfNaturalnumber = (n) =>{
//     // const sum = (n+1 ) * n;
//     // const total = sum /2;
//     // return total

//     return ((n+1)*n ) / 2
// }
// console.log(sumOfNaturalnumber(10));
console.log("Question ==>Find the Leap year");
// function leapYear(n){
//     if(n % 400 == 0){
//         return true
//     }else if(n % 100 == 0){
//         return false
//     }else if(n % 4 == 0){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(leapYear(2024));

console.log("Question 4.  FindElement");
/* Given an array of n elements and an integer x,find the index where x is present in the array. If there are multiple occurrences, find the leftmost one. If x is not present, return*/

function findElement(n, str, x){
    // itereting the index troughout str string using for loop
    for(let i = 0; i < n; i++){
        if(str[i] == x){
            return i
        }
    }
    return -1
}




