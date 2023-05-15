/**===== Quesstion 1 ====**/ 
// Factorilization 
// 5 factorial is 1 * 2 * 3 * 4 * 5 i.e 120.

function factorilization(num){
    // if num = 0 or num = 1; num will return 1
    if(num === 0 || num ===1)
        return 1;

        // start the FOR loop with value 4;
        // we decrement i each iteration
        for(var i = num -1; i >= 1; i--){
            // we store the num value at each iteration
            num = num * i
            /*Num              var i = num -1  num *= i     i--  i>= 1 ?
            1st iteration 5    4 = 5 -1        20 =  5 x 4   3    yes
            2nd iteration 20   3 = 4 -1        60 =  20 x 3  2    yes  
            3rd iteration 60   2 = 3 -1        120 = 60 x 2  1    yes  
            4th iteration 120  1 = 2 -1        120 = 120 x 1  0     No
            5th iteration 120  0 = 1 -1        120 = 120 x 0  
            End the Loop     


            */
        }
        return num
    
}
console.log(factorilization(5));

/**===== Quesstion 2 ====**/ 
function findFactorial(n) {
    // You only need to implement this function.
    if(n === 0 || n === 1)
    return 1;  
    for( var i = n -1; i >= 1; i--){
      n = n *i
    }  
    return n  
  }
  console.log(findFactorial(6))

/**===== Quesstion 3 ====**/   
//   Find the prime numbers

// if the number is divisible by 1 or number itself

function findPrimeNum(num){
    /*case 1
we are checking cases if number is less than 1 or 1 that number is not prime */
if(num <= 1){
    return false
}
/* Case 2
    we are going to check if the nummber is equal to 2 or greter than 2 and Equal to "num" using FOR loop;
*/

for(let i = 2; i < num; i ++){
    /* Case 3
    We are iterating the loop  until num is divisional by i;
    if num is devided by i that means given number not Prime using % operator
*/
    if(num % i ==0){
        return false
    }
    
}
// If the loop finishes without finding any divisors, the number is prime
return true

}
console.log(findPrimeNum(5));

/**===== Quesstion 4 ====**/ 
/* Print the odd numbers in Array between 1 to given number*/
// You are given a number n as an argument. You have to implement the function "oddNumbers" to return all odd numbers greater than 0 and less than or equal to n in the form of an array.

function printAlloddNum(n){
    // step 1 create blank array
    let printResult = [];
    // step 2 to iterate the number from less than 1 and between given number (n) using FOR loop
    
    for(let i = 1; i <=n ; i ++){    
    // step 3 we are checking the condition for odd number that means not even 
    // using modular operation % 
    // and pusing the i value to printResult blank array    
        if(i % 2 !== 0){
            printResult.push(i)
        }
    }
    return printResult

}
console.log(printAlloddNum(9));

/**===== Quesstion 5 ====**/ 

console.log("Quesstion 5");
function removeFalsyValues(arr) {
    // You only need to implement this function.
    let truthArry = [];
    for(let i = 0; i <arr.length; i++){
        if(arr !== undefined && arr !== null && arr !== false && arr !== 0 && arr !== "" && isNaN()!=NaN ){
            truthArry.push(arr[i])
        }
    }
    return truthArry
   
}

console.log(removeFalsyValues(7, "ate", "", false, 9));
  





