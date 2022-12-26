const hourEle = document.querySelector('.hours');
const minuteEle = document.querySelector('.minute');
const secondEle = document.querySelector('.second');
const timeEle = document.querySelector('.time');
const dateEle = document.querySelector('.date');
const toggle = document.querySelector('.toggle');

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

console.log(hourEle);
toggle.addEventListener('click', (eve) =>{
    const html = document.querySelector('html')
    if(html.classList.contains('dark')){
        html.classList.remove('dark');
        eve.target.innerHTML = "Dark mode"
    }else {
        html.classList.add('dark');
        eve.target.innerHTML = "Light Mode"
    }
})
function setTime() {
    const time = new Date();
    const day = time.getDay()
    const hours = time.getHours();
    const hourFrClock = hours % 12
    const minute = time.getMinutes();
    const second = time.getSeconds();

    hourEle.style.width = `translate(-50%, -100%) rotate(30)deg)`
    

    
    // console.log(hourEle); 
}
setTime()



// StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}