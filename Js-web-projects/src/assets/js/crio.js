// https://www.w3resource.com/javascript-exercises/javascript-string-exercises.php
// https://github.com/lydiahallie/javascript-questions

//replit.com/@MayankTiwari9/crio-js-1-b2-May-2023#session-6/exercise.js
// https://replit.com/@RavindraDhadave/ravindra-crio-js1#session-5/index.js
// github ref
// function satHi() {
//   console.log(name)
//   console.log(age)z
//   var name = 'Advait'
//   let age = 7
// }

// satHi()

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log('test0=>', i), 1)
// }

// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log('test=>', i), 1)
// }

// // const sahpe = {
// //   radius: 10,
// //   diameter() {
// //     return this.radius * 2
// //   },
// //   perameter: () => 2 * Math.PI * this.radius,
// // }

// console.log(sahpe.diameter())
// console.log(sahpe.perameter())

// var btn = document.getElementById('btn')
// let userInput = document.getElementById('userinput')
// let dispLabel = document.getElementById('label')
// // let userVal = userInput.value

// // console.log(yyuserVal);
// btn.addEventListener('click', (e) => {
//   e.preventDefault()
//   let userVal = userInput.value
//   dispLabel.innerHTML = reversNum(userVal)
// })
// function reversNum(n) {
//   const reversed = 0
//   while (n != 0) {
//     lastDigit = n % 10
//     reversed = reversed * 10 + lastDigit
//     n = Math.floor(n / 10)
//   }
//   return reversed
// }

// var teamLead
// console.log(teamLead)

// var x = 0

// console.log(typeof typeof x)

// //  Seesion -2

// console.log(10 + 2 * 3)
// console.log((10 + 2) * 3)

// console.log(10 % 2) /*Reminder0 */
// console.log(10 % 3)
// console.log(10 % 6)

// console.log('Java' + 'Script') // Concatination

// console.log('Javascript' + 1 + 3)
// console.log('Javascript' + 1 + 3 + 5)

// var x = '3'
// var y = true
// var z = x + y
// console.log(z)

// console.log('java1' * 1 + 5 / 3)

// console.log(40 >= 20)
// console.log(4 >= 20)

// console.log('3' == 3)
// console.log('3' === 3)

// console.log(true === 1)
// console.log(true !== 1)

// let a = 10
// let b = 20

// console.log(a === b)
// console.log(a >= b)
// console.log(a <= b)
// console.log(a !== b)

// console.log(a !== b && a > b)
// console.log(a !== b || a > b)
// console.log('test')
// function gradeMarks(marks) {
//   if (marks < 0 || marks > 100) {
//     return 'E'
//   } else if (marks < 25) {
//     return 'E'
//   } else if (marks >= 25 && marks < 45) {
//     return 'F'
//   } else if (marks >= 45 && marks < 50) {
//     return 'D'
//   } else if (marks >= 50 && marks < 60) {
//     return 'C'
//   } else if (marks >= 60 && marks < 80) {
//     return 'B'
//   } else if (marks >= 80 && marks <= 100) {
//     return 'A'
//   } else {
//     return 'Invalid'
//   }
// }

// console.log(gradeMarks(0))
// console.log(gradeMarks(101))
// console.log(gradeMarks(-5))
// console.log(gradeMarks(24))
// console.log(gradeMarks(45))
// console.log(gradeMarks(50))
// console.log(gradeMarks(60))
// console.log(gradeMarks(80))

// function checkString(checkString) {
//   if (typeof checkString === 'string') {
//     return true
//   } else {
//     return false
//   }

//   return phoneNumString
// }
// console.log(createPhoneNumber(1, 2, 3, 4, 5, 6, 7, 7, 9, 2))

// function checkForPrime(n) {
//   // You only need to implement this function.
//   if( n >= 1 && n % n =1){
//     return true
//   } else {
//     return false
//   }
// }
// console.log(checkForPrime(5))

// function removeFalsyValues(arr) {
//   // You only need to implement this function.
//   truthLyArry = []
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i]) {
//       truthLyArry.push(arr[i])
//     } else {
//       return 'false'
//     }
//   }
//   return truthLyArry
// }

// console.log(removeFalsyValues(0, 'Ravindra', undefined, 'Trithly Value'))

// function oddNumbers(n){
//   // You only need to implement this function.
//   let oddNum = [];
//   for(let i =0 ; i < n.length; i ++){
//     if( i  /2)
//   }
// }

// const getStringChar = (str, length) => {
//   if (str.constuctor == String && length > 0);
//   return str.slice(0, length)

//   // return str.slice(0, length)
// }
// console.log(getStringChar('I Love Javascript', 34))

// function gradeMarks(marks) {
//   // You only need to implement this function.
//   if(marks < 25){
//     return "F"
//   }else if (marks > 25 && marks <= 45){
//     return "E"
//   }else if (marks > 46 && marks <= 50){
//     return "D"
//   }
//   else if (marks > 51 && marks <= 60){
//     return "C"
//   }else if (marks > 61 && marks <= 80){
//     return "B"
//   }else if (marks > 81 && marks <= 100){
//     return "A"
//   }else{
//       return "Invalid" ;
//   }
// }

// console.log(  gradeMarks(45));

// function potluckDish(name, dish) {

//   // You only need to implement this function.
//   if(name.charAt(0) === dish.charAt(0) && name.charAt(name.length-1) === dish.charAt(dish.length-1)){
//     return console.log(  `${name} starts with** ${name.charAt(0)} and ends with ${name.charAt(name.length-1)}** whereas ${dish} starts and
//     ends with **${dish.charAt(0)} **and **${dish.charAt(dish.length-1)} **respectively. Hence the output is true.`);
//   }else{
//     return console.log("No Match");
//   }
// }
// potluckDish("Dinesha", "Dal Tadaka");

// function factorizeNum (num){
//   return num

// }
// factorizeNum(5)
// function debugShiftAndPop(arr) {
//   let result = arr.shift()
//   return result
// }
// console.log(debugShiftAndPop(['Football', 'Cycling', 'Wrestling', ' Shooting']))

// console.log("check Include =>")

// // let arr = ['a', 'b', 'c', 'a', 'd', 'e', 'c', 'f', 'c']
// let arr = "['Ram', 'Shyam', 'Amit'], 'Ram'"

// function debugSortIncludes(arr, ele) {
//   arr.sort("");
//   return (arr.includes(ele, 2));
// }

// console.log(arr.includes('Ram', 2))

// function matrixSum(arr) {
//   // You only need to implement this function.
//   let result = 0;
//   for (let i = 0; i < arr.length; i++){
//     for (let j = 0; j < arr[i].length; j++){
//       result += arr[i]+arr[j]
//     }
//   }
//   return result
// }

// console.log(matrixSum([[23,48],[12,18]]));

// var firstName = "Ravindra";

// function disp(){
//   var lastName = "Dhadave";
//   console.log("Full name ="+ firstName + lastName);

// }
// disp()
// // console.log("Full name ="+ firstName + lastName);

// var a = 10; // variable 'a' global scope

// if(a===10){
//    let b = 20;   // scope within the block ( will be same for const)
//    console.log("b is accessible within the block:", b);  // 20
// }

// console.log("b is not accessible outside the block:", b );

// var a = 11;
// func()
// function func(){
//   var a = 20
// }
// console.log(a);

// var a = 12;
// func()
// function func(){
//   var a = 20
// }
// console.log(a);

// var a = 13;
// console.log(a);
// if(a===13){
//   const a = 20;
//   console.log(a);
// }
// var a = 30;
// console.log(a);

// function parent(){
//   const message = "I am from parent";
//   console.log(message);

//   function child(){
//     console.log("This is the Child");
//   }
// }

// function matrixSum(arr) {
//   // Initialize the sum to 0.
//   let sum = 0;

//   // Iterate through the array.
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       // Add the current element to the sum.
//       sum += arr[i][j];
//     }
//   }

//   // Return the sum.
//   return sum;
// }
// console.log(matrixSum([[12, 13, 15], [16, 17, 18]]));

// function createMatrixII(size) {
//   // You only need to implement this function.
//   let matrixII = []
//   let count = 0
//   for (let i = 0; i < size; i++) {
//     let row = []
//     for (let j = 0; j < size; j++) {
//       row.push(count)
//       count++
//     }
//     matrixII.push(row)
//   }
//   return matrixII
// }

// console.log(createMatrixII(2))

function getFullName(firstName, middleName, lastName) {
  // You only need to implement this function.
  var fullName = {
    fullName: firstName + ' ' + middleName + ' ' + lastName,
  }
  return fullName
}
console.log(getFullName('Vihaan', 'Ravindra', 'Dhadave'))

function updateProperty(obj, propName, str) {
  obj[propName] = str

  return obj[propName]
}
console.log(updateProperty('Ravindra'))
