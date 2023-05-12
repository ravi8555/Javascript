var btn = document.getElementById('btn');
let userInput = document.getElementById('userinput');
let dispLabel = document.getElementById('label');
// let userVal = userInput.value

// console.log(yyuserVal);
btn.addEventListener('click', (e)=>{
    e.preventDefault();
    let userVal = userInput.value
    dispLabel.innerHTML = reversNum(userVal)
       
})
function reversNum(n){
    const  reversed = 0;
    while(n != 0){
        lastDigit = n%10;
        reversed = reversed * 10 + lastDigit;
        n = Math.floor(n/10);
    }
    return reversed
}

var teamLead;
console.log(teamLead);

var x = 0;

console.log(typeof(typeof(x)));

//  Seesion -2

console.log(10 + 2 * 3);
console.log((10 + 2) * 3);

console.log(10 % 2); /*Reminder0 */
console.log(10 % 3); 
console.log(10 % 6); 

console.log("Java"+ "Script"); // Concatination

console.log("Javascript" + 1 + 3);
console.log("Javascript" + 1 + 3 + 5);

var x = "3";
var y = true;
var z = x + y;
console.log(z);

console.log('java1' * 1 +5 / 3);


console.log(40>=20);
console.log(4>=20);

console.log("3" == 3);
console.log("3" === 3);

console.log(true===1);
console.log(true!==1);

let a =10;
let b = 20;

console.log(a === b);
console.log(a >= b);
console.log(a<=b);
console.log(a !== b);

console.log( a !== b && a > b);
console.log( a !== b || a > b);


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
