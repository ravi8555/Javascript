const trainsDetails = [
    { trainNumber: 12345, origin: "Mumbai Central", destination: "Delhi", departureTime: "10:00 AM", arrivalTime: "08:00 PM", duration: "10h 0m", days: ["Mon", "Wed", "Fri"], fare: 1500 },
    { trainNumber: 54678, origin: "Chennai Central", destination: "Kolkata", departureTime: "07:30 AM", arrivalTime: "05:30 PM", duration: "10h 0m", days: ["Tue", "Thu", "Sat"], fare: 1800 },
    { trainNumber: 90123, origin: "Bangalore City Jn.", destination: "Hyderabad Decan", departureTime: "12:00 PM", arrivalTime: "10:00 PM", duration: "10h 0m", days: ["Daily"], fare: 1200 },
    { trainNumber: 78901, origin: "Ahmedabad Jn.", destination: "Jaipur Jn.", departureTime: "05:00 PM", arrivalTime: "03:00 AM", duration: "10h 0m", days: ["Sun", "Tue", "Thu"], fare: 1000 },
    { trainNumber: 34567, origin: "Pune Junction", destination: "Goa", departureTime: "09:15 AM", arrivalTime: "07:15 PM", duration: "10h 0m", days: ["Mon", "Wed", "Fri", "Sat"], fare: 1400 },
    { trainNumber: 67890, origin: "Secunderabad Jn.", destination: "Bhubaneswar", departureTime: "02:00 PM", arrivalTime: "12:00 PM", days: "Travel time exceeds 24 hours (1d 22h)", fare: 2500 },
    { trainNumber: 10234, origin: "Kanpur Central", destination: "Lucknow Nr.", departureTime: "06:30 AM", arrivalTime: "08:30 AM", duration: "2h 0m", days: ["Daily"], fare: 500 },
    { trainNumber: 98765, origin: "Delhi", destination: "Mumbai Central", departureTime: "11:00 PM", arrivalTime: "09:00 AM", duration: "10h 0m", days: ["Tue", "Thu", "Sat"], fare: 1600 },
    { trainNumber: 87654, origin: "Kolkata", destination: "Chennai Central", departureTime: "06:00 AM", arrivalTime: "04:00 PM", duration: "10h 0m", days: ["Mon", "Wed", "Fri"], fare: 1700 },
    { trainNumber: 76543, origin: "Hyderabad Decan", destination: "Bangalore City Jn.", departureTime: "09:00 PM", arrivalTime: "07:00 AM", duration: "10h 0m", days: ["Daily"], fare: 1300 }
];
const wrapper = document.querySelector('.wrapper')
const tranNumber = document.getElementById('boxes');
const h1 = document.querySelector('.heading');
// console.log(h1);
h1.style.backgroundColor = "red";
h1.remove()
// console.log(tranNumber);
function getTrainDetails(){
    const createUL= document.createElement('ul');
    const mapTrainDeails = trainsDetails.map((item) =>{
        const li = document.createElement('li');
        createUL.appendChild(li)
        li.innerHTML += item.trainNumber;
        tranNumber.appendChild(createUL)
        return createUL
    }) 
    return mapTrainDeails
}
function removeEle(){    
    h1.remove()
}
const btn = document.getElementById('btn')
const getResult = btn.addEventListener("click",()=>{
    const para = document.getElementById("para");
    para.textContent = "I Love Javascript" 
})

btn.addEventListener("mouseenter",(eve) =>{
    btn.style.borderColor = "#f00";
})

// Task-1
(function (){ 
    window.addEventListener('DOMContentLoaded',function () {    
        getTrainDetails();
        getResult()
        // removeEle()
    });
    //your code here
})();

// tranNumber.textContent = "Hi Text"


