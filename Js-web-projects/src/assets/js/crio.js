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

