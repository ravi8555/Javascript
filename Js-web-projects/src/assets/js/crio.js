// https://www.w3resource.com/javascript-exercises/javascript-string-exercises.php
// https://github.com/lydiahallie/javascript-questions
// github ref
// function satHi() {
//   console.log(name)
//   console.log(age)
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

const sahpe = {
  radius: 10,
  diameter() {
    return this.radius * 2
  },
  perameter: () => 2 * Math.PI * this.radius,
}

console.log(sahpe.diameter())
console.log(sahpe.perameter())

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


function gradeMarks(marks) {
  // You only need to implement this function.
  if(marks < 25){
    return "F"
  }else if (marks > 25 && marks <= 45){
    return "E"
  }else if (marks > 46 && marks <= 50){
    return "D"
  }
  else if (marks > 51 && marks <= 60){
    return "C"
  }else if (marks > 61 && marks <= 80){
    return "B"
  }else if (marks > 81 && marks <= 100){
    return "A"
  }else{
      return "Invalid" ;
  }
}

console.log(  gradeMarks(45));

function potluckDish(name, dish) {

  // You only need to implement this function.
  if(name.charAt(0) === dish.charAt(0) && name.charAt(name.length-1) === dish.charAt(dish.length-1)){
    return console.log(  `${name} starts with** ${name.charAt(0)} and ends with ${name.charAt(name.length-1)}** whereas ${dish} starts and 
    ends with **${dish.charAt(0)} **and **${dish.charAt(dish.length-1)} **respectively. Hence the output is true.`);
  }else{
    return console.log("No Match");
  }
}
potluckDish("Dinesha", "Dal Tadaka");
// console.log(a === b)
// console.log(a >= b)
// console.log(a <= b)
// console.log(a !== b)

// console.log(a !== b && a > b)
// console.log(a !== b || a > b)
// console.log('test')
function gradeMarks(marks) {
  if (marks < 0 || marks > 100) {
    return 'E'
  } else if (marks < 25) {
    return 'E'
  } else if (marks >= 25 && marks < 45) {
    return 'F'
  } else if (marks >= 45 && marks < 50) {
    return 'D'
  } else if (marks >= 50 && marks < 60) {
    return 'C'
  } else if (marks >= 60 && marks < 80) {
    return 'B'
  } else if (marks >= 80 && marks <= 100) {
    return 'A'
  } else {
    return 'Invalid'
  }
}

console.log(gradeMarks(0))
console.log(gradeMarks(101))
console.log(gradeMarks(-5))
console.log(gradeMarks(24))
console.log(gradeMarks(45))
console.log(gradeMarks(50))
console.log(gradeMarks(60))
console.log(gradeMarks(80))

// function checkString(checkString) {
//   if (typeof checkString === 'string') {
//     return true
//   } else {
//     return false
//   }
// }

// console.log(checkString([1, 2, 3]));

// function checkBlankString(checkBlankString) {
//   if (checkBlankString.length === 0) {
//     return true
//   } else {
//     return false
//   }
// }

// console.log(checkBlankString(''))

// function convArray(stringtoarray) {
//   let conStringArray = stringtoarray.trim().split(' ')
//   return conStringArray
// }
// console.log(convArray('Hi I am Javascript Learner'));

// function exctractChar(charargument, indxStart, idxEnd) {
//   let getChar = charargument.substring(indxStart, idxEnd).trim()
//   return getChar
// }
// console.log(exctractChar('I Love Javascript', 1, 4));

const getStringChar = (str, length) => {
  if (str.constuctor == String && length > 0);
  return str.slice(0, length)

  // return str.slice(0, length)
}
console.log(getStringChar('I Love Javascript', 34))

function gradeMarks(marks) {
  // You only need to implement this function.
  if(marks < 25){
    return "F"
  }else if (marks > 25 && marks <= 45){
    return "E"
  }else if (marks > 46 && marks <= 50){
    return "D"
  }
  else if (marks > 51 && marks <= 60){
    return "C"
  }else if (marks > 61 && marks <= 80){
    return "B"
  }else if (marks > 81 && marks <= 100){
    return "A"
  }else{
      return "Invalid" ;
  }
}

console.log(  gradeMarks(45));

function potluckDish(name, dish) {

  // You only need to implement this function.
  if(name.charAt(0) === dish.charAt(0) && name.charAt(name.length-1) === dish.charAt(dish.length-1)){
    return console.log(  `${name} starts with** ${name.charAt(0)} and ends with ${name.charAt(name.length-1)}** whereas ${dish} starts and 
    ends with **${dish.charAt(0)} **and **${dish.charAt(dish.length-1)} **respectively. Hence the output is true.`);
  }else{
    return console.log("No Match");
  }
}
potluckDish("Dinesha", "Dal Tadaka");
