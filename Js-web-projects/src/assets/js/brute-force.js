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
function findFactorial(n) {
  // You only need to implement this function.
  if (n === 0 || n === 1) return 1
  for (var i = n - 1; i >= 1; i--) {
    n = n * i
  }
  return n
}
console.log('findFactorial', findFactorial(6))

// /**===== Quesstion 3 ====**/
// //   Find the prime numbers

// // if the number is divisible by 1 or number itself
console.log('find Prime Num')
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

console.log('find Longest Word Length ')

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

console.log('Question check Palindrome Or Not ')

// 1. create var words and convert into Array using split method
// 2. create var reverseWord to store the reverse string
// 3. create for loop with i var assign with words length -1
// 4. iterate the i till greater than or equal to 0
// 5. to get reverse order we decrement the i var by a i--
// 6. concanate the words[i] with reverseWord using += operation
// 7. check the reverseWord with words using if and comaprison
// 8. if condtion is true, return ture else false;

// function checkPalindrome(str) {
//   // You only need to implement this function.
//   const words = str.split('')
//   // console.log(words);
//   let reverseWord = ''

//   for (let i = str.length - 1; i >= 0; i--) {
//     // console.log(str[i]);
//     reverseWord += str[i]
//   }

//   if (reverseWord == str) {
//     return true
//   } else {
//     return false
//   }
//   // reverseWord = reverseWord.split(" ").join()
// }
// console.log(checkPalindrome("madam"));

console.log('Mask Palindrome input ')

// 1. create function with 2 parameter one is input and second is maskchar
// 2. I have created the function maskPalindrome(str, maskChar = '*');
// 3. Inside the function I am checking the input is either palindrome or not (using pre function)
// 4. In if condition I have created the const modifiedStr which is modified version of str. the str covrting to lowercase to avoide the case sensitivity with replace method to regular expression
// 5. I have took the firstLetter and lastLetter var to store the first and last charector using charAt method
// 6. The maskedPalindrome variable is created, which contains the masked version of the palindrome. It concatenates the firstLetter, maskChar repeated modifiedStr.length - 2 times (to account for the first and last letters), and the lastLetter

// function maskPalindrome(str, mask = '*') {
//   if (checkPalindrome(str)) {
//     const modifiedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '')
//     const firstLetter = modifiedStr.charAt(0)
//     const lastLetter = modifiedStr.charAt(modifiedStr.length - 1)
//     const maskedPalindrome =
//       firstLetter + mask.repeat(modifiedStr.length - 2) + lastLetter
//     return maskedPalindrome
//   }
//   return str
// }

// console.log(maskPalindrome('Madam'))

console.log('Generate string combinations')
// 1. create function generateCombinations with 2 arguments (tookes two arrays as input)
// 2. create the var result asign with empty array to store the combination fo string results
// 3. I used here the nested for loop to iterate the argument-1 and argument-2 value.
// 4. In for loop I initite the loop i and j with 0; till the argument length and increment by + 1
// 5. current value arr1[i] and current value arr2[j] concatination and push to result var\
// 6. to get the final result of funtion I return the reult var out of loop
// function generateCombinations(arr1, arr2){
//   let result = [];
//   for (let i =0; i<arr1.length; i++){
//     for (let j =0; j<arr1.length; j++){
//       result.push(arr1[i]+arr2[j])
//     }
//   }
//   return result
// }
// console.log(generateCombinations(["a", "c", "e"], ["b", "d", "f"]));

console.log('(2D array of numbers) the sum of all elements of the matrix')

// 1. Create function matrixSum with arr argument.
// 2. Create var sum with 0 to store the all metrix plus result.
// 3. To check array value I am using the for loop
// 4. In for loop i is iterate the value of row till the length of arr
// 5. To iterate the column of row[i] I am using the nested loop j start with 0 and end of arr[i] length
// 6. adding the current element[i][j] to the var sum in the loop
// 7. finaly I return sum to get the function result
// function matrixSum(arr) {
//   // You only need to implement this function.
//   let sum = 0;
//   for(let i =0; i < arr.length; i++){
//     for(let j =0; j <arr[i].length; j++){
//       sum += arr[i][j]
//     }
//   }
//   // let i, j;
//   // let n = arr.length;
//   // let m = arr[0].length;
//   // for(i = 0; i < n; i ++){
//   //   for(j =0; j <m; j++){
//   //     sum += arr[i][j]
//   //   }
//   // }

//    return sum
// }

// console.log(matrixSum([[12, 13, 15], [16, 17, 18]]));

console.log('Create a 2D array with values from 0 to size -1')
// solution 1
// 1. to create the matrix array using the 1 input argument. create function createMatrix(size)
// 2. To crete empty array I am taking  the var matrix  with empty array. this array will store the matrix row
// 3. to iterate the first row value I used here i var for current val
// 4. inside the for loop I took the empty array row to store the column value
// 5. I used the nested loop to iterate through the column of the current row. The loop var j is used to keep track the current column of th row
// 6. In the nested loop I am pushig the J current value to row
// 7. Outer nested loop I am pushing the row var to matrix to add the j to i
// 8. finaly I returd the matrix to get the output of matrix array
// function createMatrix(size){
//   let matrix = [];
//   for (let i = 0; i < size; i ++){
//     let row = []
//     for(let j = 0; j < size; j++){
//       row.push(j)
//     }
//     matrix.push(row)
//   }
//   return matrix
// }

// Solution 2
// To get  2D array as basis of unput
// 1. create function createMatrix(arr)
// 2. to store the value of result created the matrix empty array
// 3.

// function createMatrix(size) {
//   // You only need to implement this function.
//   // CRIO_SOLUTION_START_MODULE_ES6_FOUNDATIONS
//   var arr = [];

//   for (var i = 0; i < size; i++) {
//     arr.push([]);
//   for (var j = 0; j < size; j++) {
//       arr[i].push(j);
//     }
//   }
//   return arr;
//   // CRIO_SOLUTION_END_MODULE_ES6_FOUNDATIONS
// }

// console.log(createMatrix(4))

console.log('Create a 2D array with values from 0 onwards ')
// 1. created function mattrixII with arr arguments.
// 2. inside the function created the matrix var to store the 2D Matrix
// 3. The counter var is used to keep the track of numbers that are assigned to the each element in the matrix.
// 4. To iterate over the row of matrix I used the for loop. set i to 0 and loop continues as long as the less than arr
// 5. To create a new row In side the for loop I push the var matrix to empty array
// 6. I created the nested loop and set j var to 0 to iterate the current column value
// 7. Inside the nested loop I push arr[i] to counter add value of counter to the current row arr[i]. It append the value to the end of row.
// 8. After adding the value I increse the count 1 of metrxi using ++.
// 9. Outside the loop I return the matrix to get the result.

// function mattrixII(arr) {
//   let matrix = []
//   let counter = 0
//   for (let i = 0; i < arr; i++) {
//     matrix.push([])
//     for (let j = 0; j < arr; j++) {
//       matrix[i].push(counter)
//       counter++
//     }
//   }
//   return matrix
// }

// console.log(mattrixII(3));

// console.log('Delete property')
// // 1. To delete property through object we need th check it first Is it exist
// // 2. Here I am checking the propName argument in object hasOwnProperty method in if condition
// // 3. If the propName exist on obj, If does function will continue the next line
// // 4. then using the delete method delete the property name from the object
// // 5. then return the statement out of If Condition.

// function deleteProperty(obj,propName){
//   if(obj.hasOwnProperty(propName)){
//     delete obj[propName]
//   }

//   return obj;

// }
// // 6. To check the instance I store the key and value in obj Object
// // 7. To delete middile name I used the deleteProperty accesing object and key middlename

// const obj = { firstName: 'Sachin', middleName: 'Ramesh', lastName: 'Tendulkar' };
// const newObj = deleteProperty(obj, 'middleName')

console.log('Find Car with maximum capacity and type in muliple Car object')
// 1. created function maxCapacityType with argument arr
// 2. created maxCapacity var 0 to store the car maximum capacity in the arr result
// 3. created maxCapacityType var empty string to store the car type result
// 4. created the for loop with var i to iterate the value of arr. the loop start with 0 and end at index arr.length -1; (continue as long as length of arr array )
// 5. Inside the to compare the 'capacity' property of the current object. (arr[i].capacity). If the capacity of current object is greater than maxCapacity. I updated the  maxCapacity to the current element of arr[i].cappacity and updated maxCapacityType to the current element arr[i].type.
//  I cheked the arr[i].
// 5. check if the capacity of object at index i is greater than current value of maxCapacity
// 6. finally we return maxCapacityType, which represent type of car with maximum capacity

// function maxCapacityType(arr) {
//   var maxCapacity = 0
//   maxCapacityType = ''
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].capacity > maxCapacity) {
//       maxCapacity = arr[i].capacity
//       maxCapacityType = arr[i].type
//     }
//   }
//   return maxCapacityType
// }

// console.log(
//   maxCapacityType([
//     { color: 'Red', type: 'Station Wagon', capacity: 5 },
//     { color: 'Black', type: 'Sedan', capacity: 4 },
//   ])
// )
console.log('Divide two numbers Check question')
// Que You are given two numbers num and den. When we divide num with den, if both are equal to 0 it gives NaN. We need to handle this case and return 0. You have to implement the function divide such that it should divide num with den and return the result.

// 1. create function  divide(num, den) with 2 argument.
// 2. check with logical operator if num and den are 0
// 3. if its then return 0
// 4. otherwise devide num and den to return result

// function divide(num, den) {
//   if (num === 0 && den === 0) {
//     return 0
//   }
//   return num / den
// }

// console.log(divide(10, 3))

console.log('Difference between min and max')

// 1. create function maxMinDifference with argument arr
// 2. Initializing the min and max var with the first element of arr[0], by setting min and max to initail arr[0], we insure that they hold valid stating values for the comparision
// 3. I am starting loop var i = 1 because we already declare the 0 index to min and max. iterate the till the arr of length.
// 4 Inside the loop I am cheking the current valur arr[i]  is greater than max if condition is true I assigned to max current value
// In else if condition I cheked the current value arr[i] is less than min var , if its true I assignd the min value to current value arr[i]
// 5. After processed the loop, to calculate the result I return the max -min

// function maxMinDifference(arr) {
//   var max = arr[0]
//   var min = arr[0]

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i]
//     } else if (arr[i] < min) {
//       min = arr[i]
//     }
//   }
//   return max - min
// }
// console.log(maxMinDifference([9, 1, 3, 4]))

console.log('Pass by reference 1')
/*you are given an array of numbers arr as an argument. You need to implement the function manipulatingArray which will modify the numbers of the array such that if the number is even, it adds 5 else it multiplies 5. But we don’t have to return anything, remember how arrays are passed and if any changes are made in the passed array does it reflect in the original array? Think about it.*/

// 1. creating the function manipulatingArray with arr argment.
// 2. To iterate the argument value I am using for loop initializing the i = 0 till the arr of length
// 3. Inside the loop I am checking the condition for even number using moudler formula using logical operator
// 4. if condition gets true, I am passing the reference of current array arr[i] and adding 5
// 5. if condition gets false, I am passing reference of current var to multiply by 5
// 6. to get the result, I am returning the arr
// function manipulatingArray(arr) {
//   // You only need to implement this function.
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       arr[i] = arr[i] + 5
//     } else {
//       arr[i] = arr[i] * 5
//     }
//   }
//   return arr
// }

// console.log(manipulatingArray([9, 1, 7, 4]))

console.log('Pass by reference 2')
/*You are given an array of numbers arr, a number index, and a number ele as arguments. You need to implement the function replaceElement which will modify the number at index index of the array to ele. Please note if the index is greater than (length of the array - 1), insert the element at the end of the array. But we don’t have to return anything, remember how arrays are passed and if any changes are made in the passed array does it reflect in the original array? Think about it. */

// 1. crete function replaceElement with 3 argument (arr, index, ele);
// 2. checking the index is greater than or equal to arr.length
// 3. if its true it means that the specific index is beyond the current bounds hence  I pushed the ele value to the arr
// 4. if false then the element replace with specifc index using assign operator
// 6. return the original arr (now arr is now modified by pass by refrence)

// function replaceElement(arr, index, ele) {
//   // You only need to implement this function.
//   if (index >= arr.length) {
//     arr.push(ele)
//   } else {
//     arr[index] = ele
//   }
//   return arr
// }
// console.log(replaceElement([9, 1, 3, 4], 2, 7))

console.log('Find the key For and forEach method')
// You are given an array of numbers arr and number key as arguments. You need to implement the function search in which you have to use for…each to iterate through the array and if the key is present return true else return false.
// Approch 1 using for
// 1. I created the function search with 2 argument arr and key
// 2. To iterate the arr value I took the for loop and i set to 0 and loop the end with arr.length.
// 3. To find the key  I campare the cuurent value arr[i] with key.
// 4. If result true is true  I return the true
// 5. return false out of loop

// function search(arr, key){
//   for(let i =0; i < arr.length; i++){
//     if(arr[i] === key){
//       return true
//     }
//   }
// return false
// }
// console.log(search([9, 1, 3, 4], 2));

// Approch 2 using foreach

// 1. created the function serach with arr and key arguments.
// 2. I have took var result and declare to false, This variable will keep track of wheather the key value is present in the arr
// 3. I used to ieterate the arr each value using foreach method
// 4. for each iteration I used callback function inside foreach method, taking current element as a num parameter.
// 5. Inside the callback function, using the if statement checked the num ie current element with key
// 6. if condition get true, assign result as a true
// 7. The outside the foreach, return the result

// function serach(arr, key){
//   result = false;
//   arr.forEach( (ele)=>{
//     if(ele === key){
//       result = true
//     }
//   });
//   return result
// }
// console.log(serach([9, 1, 3, 4], 2));

console.log('Divide the elements ')
// You are given an array of numbers arr as an argument. You have to implement the function halfValues in which we need to divide every element in the array by index + 1 using for..each and store the value in a new array. Return the new array.

// 1. I am using halfValues function with arr argument.
// 2. I used empty array var result to store the result
// 3. to ietrate the current value I am using the forEach method.
// 4. Inside the forEach method I am using callback function with 2 parameter el, index,
// 5. element parameter stand for the current value of arr element.
// 6. By using the index parameter in callback fucntion, we can perform the devision operation correctly based on the index of each element.
// 7 Inside the callback function, To devide every element with current index +1 I calculate in var devideElem
// 8. Push the devideElem result in the result var
// 9. return the result to get the function action.

// function halfValues(arr) {
//     var result = []
//     arr.forEach(function (ele, ind) {
//         let devideElem = ele / (ind + 1)
//         result.push(devideElem)
//     })

//     return result
// }
// console.log(halfValues([2, 3, 4]))

console.log('Find first even')
// Given an array of numbers arr as an argument. You need to implement the function firstEven which will return the first even number in the array. If there are no even numbers in the array it should return undefined.;

// 1. I have created the firstEven function with arr argument
// 2. to find even number I am using the find method inside the function
// 3. find method iterate the number from left to right here we want to find only first even number, so we directly return the arr with even formula.

// function firstEven(arr) {
//   return arr.find((num) => num % 2 === 0)
// }

// console.log(firstEven([1, 2, 3, 2, 3, 2]))

// console.log('Find any even number in array using find method')

// function findAnyNum(arr, n) {
//   var count = 0
//   return arr.find((num) => {
//     if (num === n) {
//       count++
//       return count === n
//     }
//     return false
//   })
// }

// console.log(findAnyNum([1, 2, 3, 2, 3, 2]));

console.log('Sort numbers in all test cases')
// // 1. I have created the sortNumerically function with arr argument.
// // 2. to check the in negative and other cases I did the custom comaprision. I took (a, b) a -b this custom comaprision passed as an argument to the sort method
// // 3. return the arr

// function sortNumerically(arr) {
//   // You only need to implement this function.
//   const sortNum = arr.sort((a, b) => a- b)
//   return sortNum
// }
// var arr = [9, 1, 6, 5, 4, 10];

// console.log(sortNumerically(arr));

console.log('Sort numbers in all test cases in desending order')

// function sortNumericallyDes(arr){
//   let sortDescendingNum = arr.sort((a, b) => b-a);
//   return sortDescendingNum
// }
// var arr = [9, 1, 6, 5, 4, 10];

// console.log(sortNumericallyDes(arr));

console.log('Sort objects based on a specific property in ascending order.')
// 1. I creted function objProperty with 2 argument arr and property
// 2. Inside the function I called compare callback function
// 3. In comapre function took 2 parameter a, b which represent the two object from the array
// 4. Inside the compare function a[property], and b[property] are used to acces the value of the specified property for the objects a and b. return substract  a[property]- b[property] this determins the sort order based on the value of the specefied the property
// 5. finally return the arr to get the result.

// const arr = [
//   { name: 'John', age: 30 },
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 35 }
// ];

// function objProperty(arr, property){
//   function compare(a, b){
//     return a[property] - b[property]
//   }
//   return arr.sort(compare)
// }

// console.log(objProperty(arr, "age"));

console.log('map Method calculate square')
// 1. create Function squareNumbers with argument array as a input to calculate the square number.
// 2. Inside the function map method useed on input array map method applies a provided function to each element in the array and return the result as a new array.
// 3. To represent the each element of array I am taking the number as a argument.
// 4. within the function number * number expression to calculate the square of the element.
// const array = [2, 3, 4]

// function squareNumbers(array) {
//   return array.map((num) => {
//     return num * num
//   })
// }

// console.log(squareNumbers(array))
console.log('map Method calculate square of index')
// Implement a function calculateSquares that takes an array of numbers as input and returns a new array where each number is the square of its index.

// 1. create the function calculateSquares with argument arr
// 2. Inside the function map method using array input.
// 3. Inside the map method used anonymous function with num and idx parameter for callback function for the map
// 4. in anonymouse function to get calculate result I used the index * index expressioin.

// function calculateSquares(arr) {
//   return arr.map((num, idx) => {
//     return idx * idx
//   })
// }
// const numbers = [2, 3, 4, 5, 6]
// const resultArray = calculateSquares(numbers)

// console.log(resultArray)

console.log('map Method Uppercase string')
// Implement a function convertToUpperCase that takes an array of strings as input and returns a new array where each string is converted to uppercase.
// const inputStr = ['John', 'Mary', 'Peter', 'Susan']
// function convertToUpperCase(str) {
//   return str.map((ele) => {
//     return ele.toUpperCase()
//   })
// }
// console.log(convertToUpperCase(inputStr))

console.log('map extractNames from object')
// Implement a function extractNames that takes an array of objects, where each object represents a person with a name property, and returns a new array containing only the names of the people.
// const people = [
//   {
//     name: 'John',
//     age: 30,
//     gender: 'Male',
//   },
//   {
//     name: 'Mary',
//     age: 25,
//     gender: 'Female',
//   },
//   {
//     name: 'Peter',
//     age: 40,
//     gender: 'Male',
//   },
//   {
//     name: 'Susan',
//     age: 35,
//     gender: 'Female',
//   },
//   {
//     name: 'David',
//     age: 20,
//     gender: 'Male',
//   },
// ]

// function extractNames(obj, name) {
//   return obj.map((ele) => {
//     return ele.age
//     // return `Name : ${ele.name} Age : ${ele.age}`
//   })
// }
// console.log(extractNames(people));

console.log('map calculateAverage from numbers input')

// Implement a function calculateAverage that takes an array of numbers as input and returns the average of all the numbers in the array.

// 1. taking the function calculateAverage with argument avg
// 2. we are checking the condition if avg length is empty then retutn 0
// 3. to calculate the sum I am using the reduce method first argument initail value of accumalator initial value 0 second argument with ananomouse function, Inside function I have taken the two parameter acc(accumalate) and numbers (current element of the array)
// 4. To get the average of sum here I am storing the var avarage with expression sum / arr.length
// 5. finally I created avarageArray var with map function to used to create new array and get average result in single array

// const inputnumbers = [1, 2, 4, 5]

// function calculateAverage(avg) {
//   if (avg.length === 0) {
//     return 0
//   }

//   var sum = avg.reduce(function (acc, numbers) {
//     return acc + numbers
//   }, 0)

//   var avarage = sum / avg.length

//   var avarageArray = avg.map((numbers) => {
//     return avarage
//   })
//   return avarageArray
// }
// console.log(calculateAverage(inputnumbers))

console.log('Filter out even numbers')
//  Implement a function that takes an array of numbers as input and returns a new array containing only the even numbers.
// const arrEven = [2, 3, 4, 5, 6, 9, 7]
// function filterEven(arr) {
//   const getEvenNum = arr.filter((num) => {
//     return num % 2 === 0
//   })
//   return getEvenNum
// }

// console.log(filterEven(arrEven))

console.log('Filter by string length:')
// Create a function that takes an array of strings as input and returns a new array with strings that have a length greater than a specified value.
const stringArray = ['Hello', 'World', 'This', 'Is', 'A', '7-item', 'String']
// function stringLength(str) {
//   // return str.filter((item) => item.length > 4);
//   if (str.length < 0) {
//     return false
//   }
//   const strResult = str.filter((item) => {
//     return item.length > 4
//   })
//   return strResult
// }
// console.log(stringLength(stringArray))

console.log('Filter by prime numbers:')
// Write a function that takes an array of numbers as input and returns a new array containing only the prime numbers.
// 1. created function filterPrimeNumbers with argument arr
// 2. filter method used on the input num array to create new array that will contain only new array
// 3. cheked the condition the num is less than 2. The number is less than 2 are not prime. So return false to exclude them from filter array.
// 4. then I used for loop to get the divisible number. we only check the divisiblity of array square root using Math,sqrt()
// 5. if i less than or equal to  Math.sqrt() than return false
// 6. Inside the loop I checked if num moduler with current value 0 than retutn the false to exclude from the filter array
// 7. to get the final result return true

// const inputnumbers = [1, 2, 4, 5, 7, 8, 9, 11, 10, 22, 3]
// function filterPrimeNumbers(arr) {
//   return arr.filter((num) => {
//     if (num < 2) {
//       return false
//     }
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (num % 2 === 0) {
//         return false
//       }
//     }
//     return true
//   })
// }
// console.log(filterPrimeNumbers(inputnumbers))

console.log('Filter by object property:')

// Filter by object property: Implement a function that takes an array of objects and a property name as input, and returns a new array containing objects that have a specific value for that property.

// const objPeople = [
//   {
//     name: 'John',
//     age: 30,
//     gender: 'Male',
//   },
//   {
//     name: 'Mary',
//     age: 25,
//     gender: 'Female',
//   },
//   {
//     name: 'Peter',
//     age: 40,
//     gender: 'Male',
//   },
//   {
//     name: 'Susan',
//     age: 35,
//     gender: 'Female',
//   },
//   {
//     name: 'David',
//     age: 20,
//     gender: 'Male',
//   },
// ]

// function filterObjProperty(obj, propname, propval) {
//   return obj.filter((objName) => {
//     return objName[propname] === propval
//   })
// }
// console.log(filterObjProperty(objPeople, 'name', 'Susan'));

console.log('Filter unique values remove any duplicate elements')
// Create a function that takes an array as input and returns a new array containing only the unique values, removing any duplicate elements.
// 1. created function filterUnique with array as input.
// 2. inside the function filter method used on the array. It iterate over each element in the array and filter out the elements that are not unique.
// 3. Callback function used with filter took 3 parameter value, (the current element being processed), index (index of current element) and array (the array being filterd)
// 4. Within the callback function 'array indexOf(value) is used to find the current value index of the array. This method returns the first index at which is the value is found. If the indexOf is the equal to the parameter of index, It means that the current element is the first occurence of that value in the array and hence it is unique.
// 5. The Filter method only keep the element for which the callback function return true. In this case keep elements that are only unique.
// const arrUnique = [1, 2, 5, 2, 3, 4, 6, 3, 7, 8, 9, 5]
// function filterUniqueElement(array) {
//   return array.filter(function (value, index, array) {
//     return array.indexOf(value) === index
//   })

//   // .filter((value, index, self) => self.indexOf(value) === index)
//   // .sort()
// }
// // return sortArr.sort()

// console.log(filterUniqueElement(arrUnique));

console.log('Sum of Array: using Reduce')

// Sum of Array: Write a function that takes an array of numbers as input and returns the sum of all the numbers.
// const inputnumbers = [1, 2, 4, 5, 7, 8, 9, 11, 10, 22, 3, 10]
// function sumOfArray(arr) {
//   const result = arr.reduce((sum, index) => {
//     return sum + index
//   })
//   return result
// }
// console.log(sumOfArray(inputnumbers))
// console.log('Return Product of Array: Reduce')
// // Implement a function that takes an array of numbers as input and returns the product of all the numbers.

// const productNum = [1, 2, 4, 5]
// function calProduct(num) {
//   const result = num.reduce((acc, idx) => {
//     return acc * idx
//   }, 3)
//   return result
// }
// console.log(calProduct(productNum))

console.log('Flatten Array reduce method')
// Flatten Array: Create a function that takes an array of arrays as input and returns a flattened array containing all the elements from the nested arrays.

// 1. created the function flattenedArray with parameter array which represent the input od array.
// 2. In the function the reduce method called on the array argument. It takes 2 parameter one is callback function and other is accumalate the value. Inside the callback function took 2 parameter flattern and currentValue.
// 3. Callback function defined 2 parameter flattern and currentValue. It concanate currentArray with flattern. Array used concat to merge 2 array into single array.
// The initail value for accumolater is empty array which will populate the flatten element from the nested array
const flatteenArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]

function flattenedArray(array) {
  return array.reduce((flattern, currentArray) => {
    return flattern.concat(currentArray)
  }, [])
}
console.log(flattenedArray(flatteenArray))

const numArray = [1, 2, 4, 5, 7, 8, 9, 11, 10, 22, 3, 10]
const game = ['Football', 'Cycling', 'Wrestling', ' Shooting']
const sportName = ['Football', 'Cycling', 'Wrestling', ' Shooting']
const peopleObj = [
  {
    name: 'John',
    age: 30,
    gender: 'Male',
  },
  {
    name: 'Mary',
    age: 25,
    gender: 'Female',
  },
  {
    name: 'Peter',
    age: 40,
    gender: 'Male',
  },
  {
    name: 'Susan',
    age: 35,
    gender: 'Female',
  },
  {
    name: 'David',
    age: 20,
    gender: 'Male',
  },
]

//   // .filter((value, index, self) => self.indexOf(value) === index)
//   // .sort()
// }
// // return sortArr.sort()

// console.log(filterUniqueElement(arrUnique))

console.log('Get the number of days Left')
// I have created the function getNumbersOfDay() with parameter date
// date is an input in string format DD/MM/YYYY
// to split the date in 3 parts day month and year I have used the split method dateSplit
// I have took the var formattedDate to store the combine value of split indexing. The date() method get the output im MM/DD/YYYY
// here we have to re arrange the date format DD/MM/YYYY hence I assign the index with rearrange format. To use seperator ("/") I have used the join method here.
// To calculate the how many days are remaning, we want total miliesecond which is called Timestamp, timestamp we can access using the getTime() method. dateTs var is used to timestamp var to store formattedDate.
// currentTs var are being used here to get current timestamp, current time stamp we can use also .now() method also;
// differenceTs var have been used to get the result of currentTs - dateTs (input date). To store the result
// getDiffdays var have been used here to calculate the milisecod(1000), second 60, minutes 60, hours 24 by dividing to differenceTs var . The result is being rounded down to the nearest number has used the Math.round method
// to get the number of days between two number result I return the getDiffdays
// function getDiffdays(date){
// const dateSplit = date.split("/");
// const formattedDate = [dateSplit[1], dateSplit[0], dateSplit[2]];
// // console.log(formattedDate);
// const dateTs = new Date(formattedDate).getTime()
// // console.log(dateTs);
// // const currentTs = new Date().getTime();
// const currentTs = Date.now();
// // console.log("now,",currentTs);

// const differenceTs = currentTs - dateTs;
// const getDiffdays = Math.floor(differenceTs/ (1000 * 60*60*24));
// return getDiffdays

// }
// console.log(getDiffdays("10/03/2023"));

console.log('Check given input whether is an alphabet or not')

// to find the alphabet we require the ASCII code, the each keyboard letter has own ascii
// alphLetter letter has asc key start from 65 to 90 and small letters has 97 to 122
// I have used the function IsAlphabet();
// In the function using the var n to check the index of input using charCodeAt()
// In the function here I am the storing the input using the var capLetter to ascii
// Then I checked the condition alphLetter is match return the true else false
// function isAlphabet(X) {
//         let n = X.charCodeAt(0);
//         let alphLetter = (n>= 65 && n <= 91) || (n >= 97 && n <= 123);

//         if(alphLetter){
//             return "yes"
//         } else{
//             return false
//         }

// };
// var X = "B"
// console.log(isAlphabet(X));

// function convertArray(arr) {
//   // let sum = 0;
//   arr.forEach((item, idx) => {
//     arr[idx] = (idx + 1) * item
//   })

//   // for( var i =0; i < arr.length; i++){
//   //     arr[i] = (i + 1) * arr[i]
//   // }
//   return arr
// }
// const arr = [1, 2, 2, 3, 1, 2]
// console.log(convertArray(arr))

class Length {
  constructor(ft, inch) {
    this.ft = ft
    this.inch = inch
  }
  isValidObject(lengthObj) {
    //     if(ft.length >= lengthObj && inch.length >= lengthObj){
    if (lengthObj.ft >= 0 && lengthObj.inch >= 0) {
      return true
    } else {
      return false
    }
  }
  addLength(lengthObj) {
    if (this.isValidObject(this) && this.isValidObject(lengthObj)) {
      let ft = this.ft + lengthObj.ft
      let inch = this.inch + lengthObj.inch

      if (ft >= 12) {
        ft = ft + Math.floor(inch / 12)
        inch = inch % 12
      }
      return [ft, inch]
    } else {
      return [0, 0]
    }
  }
}
const length1 = new Length(5, 18)
const length2 = new Length(2, 11)
const sum = length1.addLength(length2)
console.log('Using Constructor Function ==>')
console.log(sum)
