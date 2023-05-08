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





// dispNumber.in = userInput;