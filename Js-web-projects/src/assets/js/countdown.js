// timer.html

// const updateCountdown = setInterval(()=>{

//     const targetDate = new Date("2024-12-27T12:59:00").getTime(); // to get the milisecods of targeted date
//     const now = Date.now() // to get the current milisecods
//     const diff = targetDate - now // difference milisecods
    
//     // calculate Days
//     const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    
//     // calculate Hours
//     const hours = Math.floor((diff % (1000 * 60 * 60 * 24))/ (1000* 60 * 60));
    
//     // Calculate the Minutes 
//     const minutes = Math.floor((diff % (1000*60*60))/ (1000*60))
//     // console.log(minutes);
    
//     // Calculate the Seconds
//     const seconds = Math.floor((diff %(1000*60)) / (1000))
//     // console.log(seconds);
    
//     const countDownElement = document.getElementById('countDown');
//     if(diff > 0){
//         countDownElement.innerHTML = `
//         <p>Days : ${days}</p>
//         <p>Hours : ${hours}</p>
//         <p>Minuts : ${minutes}</p>
//         <p>Seconds : ${seconds}</p>
//         `
//     }else{
//         clearInterval(updateCountdown);
//         countDownElement.textContent = "The Event Has Started Now"
//     }

            
// },1000);

// updateCountdown()


// Reusable count Down Function

const startCountDown = (startCountTime, elementId, onCallbackEnd = () => {}) =>{
    const countDownElement = document.getElementById(elementId);    
    
    const upadteCountDown = ()=>{ 
    const startData =   new Date(startCountTime).getTime() ;
    const currentDate =   Date.now()      
    const differenceCount = startData - currentDate;

    if(differenceCount <=0 ){
        clearInterval(intervalId);
        countDownElement.innerHTML = "The Event has started now";
        return onCallbackEnd()
    }

    // Days
    const days = Math.floor(differenceCount / (1000*60*60*24));
    
    // Hours
    const hours = Math.floor((differenceCount % (1000*60*60*24) / (1000*60*60)) )

    // Minutes 
    const minutes = Math.floor((differenceCount %(1000*60*60))/ (1000*60));

    // Seconds
    const seconds = Math.floor((differenceCount %(1000*60)) / 1000);

    countDownElement.innerHTML = `
    <p>Days : ${days}</p>
    <p>Hours : ${hours}</p>
    <p>Minuts : ${minutes}</p>
    <p>Seconds : ${seconds}</p>`      
    
}
   const intervalId = setInterval(upadteCountDown, 1000);
   upadteCountDown()

}
  
const eventStartdate = "2024-12-27T15:26:00";
const eventId = "countDown";
startCountDown(eventStartdate, eventId, ()=> console.log("Event 1 has started"))

const eventStartdate1 = "2025-01-01T12:00:00";
const eventId1 = "countDown1";
startCountDown(eventStartdate1, eventId1, ()=> console.log("Event 2 has started"))

const eventStartdate2 = "2025-03-01T15:22:00";
const eventId2 = "countDown2";
startCountDown(eventStartdate2, eventId2, ()=> console.log("Event 3 has started"))

