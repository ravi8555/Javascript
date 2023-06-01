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

// function getFullName(firstName, middleName, lastName) {
//   // You only need to implement this function.
//   var fullName = {
//     fullName: firstName + ' ' + middleName + ' ' + lastName,
//   }
//   return fullName
// }
// console.log(getFullName('Vihaan', 'Ravindra', 'Dhadave'))

// function updateProperty(obj, propName, str) {
//   obj[propName] = str

//   return obj[propName]
// }
// console.log(updateProperty('Ravindra'))

let shinobi = {
  name: 'Naruto Uzumaki',
  family: 'green',
  age: 17,
  village: 'Leaf Village',
  isNinja: true,
}

// console.log(typeOf(shinobi.name))
// console.log(typeOf(shinobi.family))
// console.log(typeOf(shinobi.age))
// console.log(typeOf(shinobi.village))
// console.log(typeOf(shinobi.isNinja))

// let ob = {}
// ob.name = 'Vihan'
// console.log(ob)

// let ob1 = {
//   name: 'Vihan',
// }
// ob1.age = 2
// console.log(ob1)

// let name1 = 'Advait'
// let object = {}

// var person={
//   "name": "Adam Smith",
//   "age": 24,
//   "email": "abc@xyz.com",
//   "phone": 1234567890,
//   "skills":["HTML", "CSS", "JS", "REACT", "ANGULAR"]
// }

// console.log(person["age"]);

// let name = "Crio"
// let ob = {name: "Criodo"}
// console.log(ob.name) // 1
// console.log(ob[name]) // 2

// function getAge(obj,perDetails) {
//   if(obj.hasOwnProperty(perDetails)){
//      obj[age]
//   }
//   return obj.age
// }
// console.log(getAge({ name: "Criodo", age: 17 }));

// const ourStorage = {
//   "cabinet": {
//     "top drawer": {
//       "folder1": "a file",
//       "folder2": "secrets"
//     },
//   }
//  };
// console.log(ourStorage.cabinet);
// console.log(ourStorage.cabinet["top drawer"]);
// console.log(ourStorage.cabinet["top drawer"].folder1);
// console.log(ourStorage.cabinet["top drawer"].folder2);
// console.log(ourStorage.cabinet["top drawer"].folder1 = "Few Files");
// console.log(ourStorage.cabinet["top drawer"].folder2 = "Secrets Files");

// const personalDetails = {
//   name: "John Doe",
//   designation: "Data Analyst",
//   age: 24,
//   address: {
//      locality: "1600 roselane colony",
//      city: "Mumbai",
//      state: "Maharashtra",
//      country: "India"
//   }
// }
// console.log(personalDetails);
// console.log(personalDetails.address);
// console.log(personalDetails['address'])
// console.log(personalDetails.address.city);
// console.log(personalDetails['address']['city']);

// const userDetails = {
//   name: {
//     first: "Kapil",
//     last: "Raghuwanshi",
//   },
//   jobTitle: "JS Instructor @ Crio.do",
//   email: {
//     work: "kapil@epsilon.com",
//     personal: "",
//   },
//   status: {
//     isOnline: true,
//     isVerified: false,
//   }
// }
// userDetails.first="Ravindra";
// userDetails.last="Dhadave";
// userDetails.status.isProMember=false
// console.log(userDetails['status']);

// const arr1 = [1,2,3,4,5,6]
// console.log(typeof(arr1));

// const obj = {'Name':'Ravindra', 'last name': 'Dhadave'}
// console.log(Array.isArray(obj));
// console.log(Array.isArray(arr1));

// function mergedString(str){
//   // You only need to implement this function.
//   let result = [];
//   for(let i = 3; i <str.length; i++){
//     result += str[i]
//   }
//   return result
// }
// console.log(mergedString(['code','for','good','intent']));

// let a = 0;
// let b = 0;
// console.log(a/b)

// let a = 0;
// var b;
// console.log(a/b)

// const obj = {
//   name: "Ravi"
// }
// const {x} = obj;
// console.log(x);

// function checkObject(par1, par2) {
//   // You only need to implement this function.
//   if (Array.isArray(par1) === true || Array.isArray(par2) === true) {
//     return true
//   } else {
//     return false
//   }
// }
// console.log(checkObject(['code', 'javascript'], ['language', 'javascript']))

// function maxCapacityType(arr) {
//   // You only need to implement this function.
//   const [color, type, capacity] = arr
// }

// function modifyNestedObject(obj, num) {
//   // You only need to implement this function.
//   obj.address.streetNumber = num

//   return obj
// }
// console.log(modifyNestedObject({ address: { streetNumber: 7 } }))

// function add(num) {
//   num = num + 10
//   console.log(num)
// }

// var num = 10
// add(5)
// console.log(add())

// function findAreaOfCricle(r) {
//   // You only need to implement this function.
//   const PI = Math.PI
//   const area = PI * r * r
//   return area
// }
// console.log(findAreaOfCricle(3))
// const calculateArea = (len, bre) => {
//   // You only need to implement this function.
//   let rectArea = len * bre
//   let absValue = Math.abs(rectArea)
//   return absValue
// }
// console.log(calculateArea(-2, 3))

// function copy(data, str) {
//   const data_copy = { ...data }
//   data_copy.name = str

//   return data_copy
//   // return data // return original
// }
// console.log(copy({ name: 'Kevin', age: 40 }, 'Allen'))

// var a = [1, 2, 3, 4, 5]
// a.unshift(6)
// a.unshift(7)
// a.shift()
// a.shift()
// console.log(a)

// console.log('Output', 10 > 9)

function greeting(day) {
  // You only need to implement this function.
  var message = `Today is ${day}`
  return function () {
    return message
  }
}
// const msg = greeting('Monday')()
// console.log(msg) // Output: Today is Monday
// console.log(greeting('Monday')())

// function display() {
//   var a = 10
// }
// console.log(a)
// // display()

// function work() {
//   var x = 1
//   var x = 2
//   console.log(x)
// }
// work()

// function work() {
//   let x = 1
//   let x = 2
//   console.log(x)
// }
// work()

// display()

// function display() {
//   console.log('Will this work!')
// }

// function greet() {
//   return function () {
//     console.log('Inner function')
//   }
// }
// const returnVal = greet()
// returnVal()

// function greet(message) {
//   message()
// }
// function message() {
//   console.log('Hello World')
// }

// greet(message);

// funcExp()

// var funcExp = function display() {
//   console.log('Will this work!')
// }

// function createBase(baseNumber) {
//   return function (N) {
//     return baseNumber + N
//   }
// }

// var addSix = createBase(6)
// console.log(addSix(10))

// function search(arr, key) {
//   // You only need to implement this function.
//   for(let i = 0; i < arr.length; i++){
//     if(arr[i]=== key){
//       return true
//     }

//   }
// return false

// }
// console.log("find");
// console.log(search([1, 2, 3, 2, 3, 2], 2));

// function halfValues(arr) {
//   // You only need to implement this function.
//   var result = []
//   arr.forEach((ind)=>{
//     const devideInd = ind+1;

//     // console.log();
//     result.push(ind/devideInd)

//   })

//   return result

// }

// function halfValues(arr) {
//   let newArr = []

//   arr.forEach(function (num, index) {
//     newArr.push(num / (index + 1))
//   })

//   return newArr
// }

// // Example usage
// // const numbers = [4, 8, 12, 16];

// // console.log(halfValues(numbers));

// console.log(halfValues([2, 3, 4]))

// function firstEven(arr) {
//   // You only need to implement this function.

//   const resultNum = arr.find((num) => num % 2 === 0)
//   // if (arr.length === 0 || resultNum === undefined) {
//   //   return undefined
//   // }
//   return resultNum
// }

// console.log(firstEven([1, 2, 3, 2, 3, 2]))

// function sort(arr) {
//   // You only need to implement this function.
//   const sortResult = arr.sort()
//   return sortResult;
// }

// console.log(sort(["C", "D", "E", "A", "F", "B"]));



