/**===== Quesstion 1 ====**/
// Factorilization
// 5 factorial is 1 * 2 * 3 * 4 * 5 i.e 120.

// function factorilization(num) {
//   // if num = 0 or num = 1; num will return 1
//   if (num === 0 || num === 1) return 1

//   // start the FOR loop with value 4;
//   // we decrement i each iteration
//   for (var i = num - 1; i >= 1; i--) {
//     // we store the num value at each iteration
//     num = num * i
//     /*Num              var i = num -1  num *= i     i--  i>= 1 ?
//             1st iteration 5    4 = 5 -1        20 =  5 x 4   3    yes
//             2nd iteration 20   3 = 4 -1        60 =  20 x 3  2    yes  
//             3rd iteration 60   2 = 3 -1        120 = 60 x 2  1    yes  
//             4th iteration 120  1 = 2 -1        120 = 120 x 1  0     No
//             5th iteration 120  0 = 1 -1        120 = 120 x 0  
//             End the Loop     


//             */
//   }
//   return num
// }
// console.log(factorilization(5))

// /**===== Quesstion 2 ====**/
// function findFactorial(n) {
//   // You only need to implement this function.
//   if (n === 0 || n === 1) return 1
//   for (var i = n - 1; i >= 1; i--) {
//     n = n * i
//   }
//   return n
// }
// console.log(findFactorial(6))

// /**===== Quesstion 3 ====**/
// //   Find the prime numbers

// // if the number is divisible by 1 or number itself

// function findPrimeNum(num) {
//   /*case 1
// we are checking cases if number is less than 1 or 1 that number is not prime */
//   if (num <= 1) {
//     return false
//   }
//   /* Case 2
//     we are going to check if the nummber is equal to 2 or greter than 2 and Equal to "num" using FOR loop;
// */

//   for (let i = 2; i < num; i++) {
//     /* Case 3
//     We are iterating the loop  until num is divisional by i;
//     if num is devided by i that means given number not Prime using % operator
// */
//     if (num % i == 0) {
//       return false
//     }
//   }
//   // If the loop finishes without finding any divisors, the number is prime
//   return true
// }
// console.log(findPrimeNum(5))

// /**===== Quesstion 4 ====**/
// /* Print the odd numbers in Array between 1 to given number*/
// // You are given a number n as an argument. You have to implement the function "oddNumbers" to return all odd numbers greater than 0 and less than or equal to n in the form of an array.

// function printAlloddNum(n) {
//   // step 1 create blank array
//   let printResult = []
//   // step 2 to iterate the number from less than 1 and between given number (n) using FOR loop

//   for (let i = 1; i <= n; i++) {
//     // step 3 we are checking the condition for odd number that means not even
//     // using modular operation %
//     // and pusing the i value to printResult blank array
//     if (i % 2 !== 0) {
//       printResult.push(i)
//     }
//   }
//   return printResult
// }
// console.log(printAlloddNum(9))

// /**===== Quesstion 5 ====**/

// console.log('Quesstion 5')
// function removeFalsyValues(arr) {
//   // You only need to implement this function.
//   let truthArry = []
//   for (let i = 0; i < arr.length; i++) {
//     if (
//       arr !== undefined &&
//       arr !== null &&
//       arr !== false &&
//       arr !== 0 &&
//       arr !== '' &&
//       isNaN() != NaN
//     ) {
//       truthArry.push(arr[i])
//     }
//   }
//   return truthArry
// }

// console.log(removeFalsyValues(7, 'ate', '', false, 9))

// /**===== Quesstion 6 ====**/
// function sumTwoArrays(arr1, arr2) {
//   let sum = 0

//   // Iterate through arr1 and add each element to the sum
//   for (let i = 0; i < arr1.length; i++) {
//     sum += arr1[i]
//   }

//   // Iterate through arr2 and add each element to the sum
//   for (let j = 0; j < arr2.length; j++) {
//     sum += arr2[j]
//   }

//   return sum
// }
// /**===== Quesstion 7 ====**/
// // find the next index in Array

// console.log('Question Find Next Index')
// /* function zombieAttack(arr) {
//   // converted arr string to array using split method and stored in new var
//   let arrName = arr.split(',')

//   // accessing the all converted string arry using for loop
//   for (let i = 0; i < arrName.length; i++) {
//     //   used trim method to remove the white space
//     arrName[i] = arrName[i].trim()
//     // console.log(arrName[i])
//   }

//   //initializing the index to zomeo in the array
//   let zomeoIdex = -1
//   //  using for loop we are iterating the arrName[i] to check zomeo index
//   for (let i = 0; i < arrName.length; i++) {
//     // checking the zomeo  string in the in the arrName using if comparrision operator
//     if (arrName[i] === 'Zombie') {
//       // if we found the Zombie index in the arrName, we need to update the zombie index with arrName[i](current index)
//       zomeoIdex = i
//       //   after set the index we must break the loop using break
//       break
//     }
//   }
//   //   Finally we have to get result using retruning the next index + 1 of Zombio within arrName who stand to the right of zombio
//   return arrName[zomeoIdex + 1]
// }
// */

// console.log('Question Find Next Index')

// function zombieAttack(arr) {
//   let arrName = arr.split(',')
//   for (let i = 0; i < arrName.length; i++) {
//     arrName[i] = arrName[i].trim()
//     // console.log(arrName[i])
//   }

//   let zomeoIdex = -1
//   for (let i = 0; i < arrName.length; i++) {
//     if (arrName[i] === 'Zombie') {
//       zomeoIdex = i
//       break
//     }
//   }
//   return arrName[zomeoIdex + 1]
// }
// console.log(zombieAttack('Rameo, Kevin, Zombie, Jacky, Adam'))

// console.log('Question Reverse The string');
// 1
// 1. create function reverseString and set parameter str to get the input
// 2. create empty var to store the reverse string reversStr
// 3. crete a for loop to iterate the each charector of str
// 4. In loop we are starting the for loop str.lenght-1, till the charactor of str
// 5. loop is iterating the last index of 0 using i>= 0, loops terminated when reach index till 0
// 6. we are going to revers the string hence decremeting the i value till i-- this strucure allow us to acces each charactor of string in reverse order
// 7. In for loop we concating the str[i] to reverseString using += operator
// 8. after the loop we are converting the reverseString in array using split method and merge chanractor usiing join method
// 9. to get the result of function we are return the reverseString;
// function reverseString(str){
// var reverseString = "";
// for(let i = str.length -1; i >= 0; i --){
//   reverseString += str[i]
// }
// reverseString = reverseString.split(" ").join( )

// return reverseString
// }
// function reversString(str){
//   // initialize the var to store the reverse string
//   // convert the string in array using split method and store in the new var
//   // create new var and converted var append the reverse method 
//   // return the var
//   // 
//   var splitStr= str.split("");
//   var reverStr = splitStr.reverse();
//   var joinStr = reverStr.join("")
//   return joinStr
// }
// console.log(reversString("Ravindra"));

console.log('find Longest Word Length ');

// 1. create function findLongestWordLength with argument str
// 2. convert str into array using split method and store it into var words
// 3. create the var longestWord to store the length number of longest word
// 4. create a for loop to iterate the words.
// 5. initial i to 0
// 5. iterate the loop till the less than length of words
// 6. each iteration, the loop variable i increament by 1 i++
// 7. In for loop we have to get calculated result and length of words[i] and store to new var wordsLength
// 8. using if statement comapare the current words (wordsLength) with longestWord
// 9. if the wordsLength is greater than longestWord, the longestWord variable will be updated i value of world length
//10. finaly outsite the loop longestLength var which hold the length of longest world

// function findLongestWordLength(str){
//   // You only need to implement this function.
//   const words = str.split(" ");
//   let longestWord = 0

//   for( let i =0; i < words.length; i ++){
//     console.log(words[i]);
//     let wordsLength = words[i].length;
//     if(wordsLength > longestWord){
//       longestWord = wordsLength
//     }
   
//   }
//   return longestWord
// }
// console.log(findLongestWordLength("I Love Javascript"));

console.log('Question check Palindrome Or Not');

// 1. create var words and convert into Array using split method
// 2. create var reverseWord to store the reverse string 
// 3. create for loop with i var assign with words length -1
// 4. iterate the i till greater than or equal to 0
// 5. to get reverse order we decrement the i var by a i--
// 6. concanate the words[i] with reverseWord using += operation
// 7. check the reverseWord with words using if and comaprison
// 8. if condtion is true, return ture else false;

function checkPalindrome(str){
  // You only need to implement this function.
  const words = str.split("");
  // console.log(words);
  let reverseWord = "";

  for(let i = str.length -1; i >=0; i--){
    // console.log(str[i]);
    reverseWord += str[i];   

  }
  
  if(reverseWord == str){
    return true
  }else{
    return false
  }
  // reverseWord = reverseWord.split(" ").join()

}

console.log(checkPalindrome("mdam"));
