// timer.html
let timeLeft = 60
const eventTimer = () =>{
    // console.log(new Date());
 const timerContainer = document.getElementById('timer');
 
 const updateTimer = () =>{
    timerContainer.textContent = timeLeft;

    if(timeLeft > 0){
        timeLeft --;
        setTimeout(updateTimer, 1000)
    }else{
        alert("Times Up")
    }
 }
 updateTimer()
    
}
eventTimer()
