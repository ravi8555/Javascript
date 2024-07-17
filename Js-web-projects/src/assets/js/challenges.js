// var testValue;
// function test() { testValue = 3; }
// // console.log(testValue);

// var myNum = 143;
// let myWord = "I Love You";
// // console.log(myNum, myWord);

// const isTrueFlase = true;
// // console.log(isTrueFlase);

// var numDataType = 143;
// let strindataType = "I Love You";
// const boleanDataType = true;
// const myObjDataType = {
//     name: "Vihan",
//     Age : 3
// }
// const arrayDataType = ["Time", "hardwork", "consitency"]
// // console.log("arrayDataType", Array.isArray(arrayDataType));

// // console.log(typeof numDataType, typeof strindataType, typeof boleanDataType, typeof myObjDataType, typeof arrayDataType);

// let asignVal = "Its Raning";
//  asignVal = "Its Cloudy";

// //  console.log(asignVal);

//  const reassign = "Its Sunny"
// //  reassign = " Its Rainy again";
// //  console.log(reassign);

// function add(a, b){
//     // console.log(a + b);
// }
// add(3, 5);

// let totalItem = 30;
// const soldItem = 20;

// const stockTotalItem = (item1, item2) =>{
//     // console.log(item1 - item2);
// }
// stockTotalItem(totalItem, soldItem);

//     const fruits = [
//         { fruit: "Apple", price: 1.5, itemStock:20 },
//         { fruit: "Pomegranate", price: 2, itemStock:25 },
//         { fruit: "Orange", price: 8, itemStock:33 },
//         { fruit: "Mango", price: 2.0, itemStock:3 },
//         { fruit: "Pineapple", price: 3.0, itemStock:50 },
//     ];

//     const appleDetails = fruits.find(item => item.fruit === "Apple")
//     const applePrice = appleDetails.price;
//     const appleStock = appleDetails.itemStock;
//     const appleAvgPrice =Math.round(appleStock/applePrice)

//     // console.log("Apple Avg",appleAvgPrice);

//     const myAppleStockValue = `${appleDetails.fruit} stock value is ${appleDetails.price} * ${appleDetails.itemStock} = ${appleDetails.price * appleDetails.itemStock}` 

//     let totalStockItem = fruits.reduce((accumalotor, currentFruit)=>{
//         return accumalotor + currentFruit.itemStock
//     }, 0);

//     let totalFruitsPrice = fruits.reduce((accumolator, currentfruitPricr)=>{
//         return accumolator + currentfruitPricr.price
//     }, 0)

//     // console.log("TotalStock =>", totalStockItem);

//     const getAvgPrice = `${Math.floor(totalStockItem / totalFruitsPrice)}`
//     const getRemainder = `Total Remainder is ${Math.round(totalStockItem % totalFruitsPrice)}`
//     // console.log(getTotalAvg, getRemainder);

//     totalStockItem += 10;
//     // console.log(totalStockItem);

//     totalItem -= 15;
//     // console.log(totalItem);

//     if(applePrice > getRemainder){
//         // console.log("Apple Price Is Okay");
//     }else{
//         // console.log("Apple Price Is less than Fruits Avarage");
//     }

//     if(applePrice < totalStockItem){
//         // console.log("Apple Price Is Okay");
//     }else{
//         // console.log("Apple Price Is less than Fruits Avarage");
//     }

//     if(appleAvgPrice <= applePrice){
//         // console.log(`We are getting loss `);
//     }
//     if(appleAvgPrice >= applePrice){
//         // console.log(`We are getting Proffit `);
//     }
//     let converTostring = totalStockItem.toString()
//     let converTostring1 = String(totalStockItem)
//     let converTostring2 = "" + totalStockItem
//     // console.log("totalStockItem",converTostring1);
//     // console.log(typeof converTostring1);
//     // console.log(typeof totalStockItem);
//     // console.log(typeof converTostring2);

//     if(converTostring1 == totalStockItem){
//         // console.log("The Value are same");
//     }else{
//         // console.log("The Value are 'NOT' same");

//     }

//     if(converTostring1 === totalStockItem){
//         // console.log("The Value are same");
//     }else{
//         // console.log("The Value are 'NOT' same");

//     }
//     // console.log(getAvgPrice);

//     if(getAvgPrice >= 8 && totalStockItem == "141" ){
//         // console.log("The && condition true");
//     }else{
//         // console.log("The && condition False");

//     }
//     if(!converTostring){
//         // console.log("Negative codition true");
//     }else{
//         // console.log("Negative codition False");
//     }

//     const myTernery = converTostring === 141 ? "Its string " : "Its Number";
//     // console.log(myTernery);

// /*  Day-3
//  Activity -1
//  Task -1 
// */

// const personInfoObj = [
//     {name : "Prafulla",Age : 30,number : 10},
//     {name : "Gargi", Age : 3,number : -3},
//     {name : "Ravindra", Age : 40,number : 11},
//     {name : "Advait", Age : 8,number : 4},
//     {name : "Nitin", Age : 35,number : 13}
// ]

// let perDetails = personInfoObj.find(person => person.name === "Prafulla");
// const perDetailsNum = perDetails.number
// const perDetailsAge = perDetails.Age
// if(perDetailsNum > 0){
//     console.log(`The Number is Positive ${perDetailsNum}`)
// }else if(perDetailsNum < 0){
//     console.log(`The Number is Negative`)
// }else{
//     console.log(`The Number is Zero `)
// }

// if(perDetailsAge >= 18){
//     console.log(`The perosn is Adult can do the Vote`);
// }else{
//     console.log(`The perosn can not do the Cast`);
// }

// /*  Activity - 2 ==> Task - 3  */

// let getAges = personInfoObj.map( person => person.Age);
// console.log(getAges);//[30, 3, 40, 8, 35]

// const sortLarge3 = getAges.sort((a,b) => a - b);
// console.log(sortLarge3.reverse().slice(0, 3));

// let firstLarges = -Infinity;
// let secondLarges = -Infinity;
// let thirdLarges = -Infinity;

// for(let i = 0; i < getAges.length; i++){
//     let currentAge = getAges[i];

//     if(currentAge > firstLarges){
//         thirdLarges = secondLarges;
//         secondLarges = firstLarges;
//         firstLarges = currentAge
//     }else if(currentAge > secondLarges){
//         thirdLarges = secondLarges;
//         secondLarges = currentAge
//     }else if(currentAge > thirdLarges){
//         thirdLarges = currentAge 
//     }
// }

// const largest3 = [firstLarges, secondLarges, thirdLarges]
// console.log(largest3);

// /*  Activity - 3 ==> Task - 4  */

// let day ;

// switch(new Date().getDay()){
//     case 0:
//     day = "Sunday";
//     break;

//     case 1:
//     day = "Monday";
//     break;

//     case 2:
//     day = "Tuesday";
//     break;

//     case 3:
//     day = "Wednesday";
//     break;

//     case 4:
//     day = "Thursday";
//     break;

//     case 5:
//     day = "Friday";
//     break;

//     case 6:
//     day = "Saturday";
//     break;

//     default :
//     day = "Unkonwn Day"

// }
// console.log(day); 

// /*  Activity - 3 ==> Task - 5  */
// let score = 30;
// let grade;

// switch(true){
//     case (score >= 90):
//     grade = "A";
//     break;
//     case(score >= 80):
//     grade = "B"
//     break;

//     case(score >= 70):
//     grade = "C";
//     break;

//     case (score >= 60):
//     grade = "D";
//     break;

//     default :
//     grade = "Under grade"

// }

// console.log(grade);

// /*  Activity - 4 ==> Task - 6  */


// console.log(typeof getAges); // Should log 'object' since it's an array

// const getAgeAvg = getAges.reduce((accumulator, currentAge) => {
//     return accumulator + currentAge;
// }, 0) // getAges.length;

// console.log(getAgeAvg); // This will log the average age

// const isOddEven = getAgeAvg % 2 === 0 ? "The Avarage is Odd" : "The Avarge is Even";

// console.log(isOddEven);

// let numArry = [20, 50, 30];

// function getTotal(numbers){
//     let sum = 0;
//     for(let i = 0; i <numbers.length; i++){
//         sum += numbers[i]
//     }
//     return sum
// }
// console.log(getTotal(numArry));

// /*  Activity - 5 ==> Task - 7  */

// const LeapYear = (year)=>{
//     if(year % 400 == 0){
//         return true
//     }else if(year % 100 == 0){
//         return false
//     }else if(year % 4 ==0){
//         return true
//     }else{
//         return false
//     }
// }

// console.log(LeapYear(1600));

// // /*  Activity - 1 ==> Task - 1  */
// for(let i = 1; i <= 10; i++){
//    console.log(`${i}`);

// }
// /*  Activity - 1 ==> Task - 2  */
// const num = 5;
// for(let i = 1; i <= 10; i++){
//    console.log(`Table of ${i} x ${num} = ${i * num}`);    
// }

// /*  Activity - 2 ==> Task - 3  */
// let sumNum = 0
// let i =1 ;
// while(i <= 10){
//     sumNum += i;
//     i++
// }
// console.log(sumNum);

// /*  Activity - 2 ==> Task -4  */
// let n = 10;
// while(n >= 1){
//     console.log(n);
//    n--
// }

// /*  Activity - 3 ==> Task - 5  */
// let j = 1;
// do{
//     console.log(j);
//     j++
// }while( j <= 5)

// /*  Activity - 3 ==> Task - 6  */

// function factorial(num){
//     if(num === 0 || num ===1) return 1 ;

//     let res = 1;
//     let i = 1;

//     do{
//         res *= i;
//         i++
//     }while( i <= num);

//     return res

// }

// console.log(factorial(-5));

// let num2 = 5;
// let fact =1;
// do{
//     fact = fact * num2;
//     num2--;
// }while(num2>0)

// let matrix = 5;

// for(let i =0 ; i < matrix; i++){
//     let row = ""
//     for( let j = 0; j <= i; j++){
//         // row = row + "* "
//         row += "* "

//     }
//     console.log(row);
// }

// for(let i = 1; i <= 10; i++){
//     if((i === 5)){
//         continue
//     }
//     console.log("continue",i);
// }
// console.log("\n");
// for(let i = 1; i <= 10; i++){
//     if(!(i === 5)){
//         console.log("continue",i);
//     }
//     continue
// }

// console.log("\n")

// for(let i =1; i <= 10; i++){
//     if(i === 7){
//         console.log(`The detected number is ${i}`);
//         break;
//     }
//     console.log(i);
// }


/*  Activity - 1 ==> Task - 1  */
function checkOddEvenNum(num) {
    return num % 2 === 0 ? "The number is even" : "The Number is Odd"
}
console.log(checkOddEvenNum(6));

/*  Activity - 1 ==> Task - 2  */
function getSquareNum(num) {
    return num * num
}
console.log(getSquareNum(5));
console.log("\n");

/*  Activity - 2 ==> Task - 1  */
const restaurants = [
    { name: "The Curry House", cuisine: "Indian", averagePrice: 25, isOpen: true, },
    { name: "Mamma Mia", cuisine: "Italian", averagePrice: 30, isOpen: false, },
    { name: "Masala Dosa", cuisine: "Indian", averagePrice: 30, isOpen: false, },
    { name: "Pizza", cuisine: "America", averagePrice: 50, isOpen: true, },
    { name: "ZoolIce", cuisine: "Fance", averagePrice: 20, isOpen: true, },
    // Add more restaurant objects as needed
];

function getAvaragePrice(maxTwoNum) {
    const mapTwonum = maxTwoNum.map((item) => item.averagePrice);
    mapTwonum.sort((a, b) => b - a);
    return mapTwonum.slice(0, 2)
}
console.log(getAvaragePrice(restaurants));

// const getAvaragePrice = 
// console.log(getAvaragePrice);
// const maximumTwoNumbers = getAvaragePrice.sort((a, b) => b-a).slice(0, 2)
// console.log(maximumTwoNumbers);

// let highestMax1 = Math.max(...restaurants.map((item) => item.averagePrice));
// console.log(highestMax1);

// const removeHighest = restaurants.filter((item) =>{
//     return item.averagePrice !== highestMax1
// });
// console.log(removeHighest);

// let highestMax2 = Math.max(...removeHighest.map((item) => item.averagePrice));
// console.log(highestMax1, highestMax2);

/*  Activity - 2 ==> Task - 2  */
function getPizzaDetails(restaurants) {
    const pizzaObj = restaurants.filter((item) => item.name === "Pizza")[0];
    if (pizzaObj) {
        const name = pizzaObj.name
        const cusine = pizzaObj.cuisine;
        const concanateStr = name + " " + cusine
        return concanateStr
    }

}
console.log(getPizzaDetails(restaurants));

/*  Activity - 3 ==> Task - 1  */
const twoSum = (num1, num2) => num1 + num2;
console.log(twoSum(5, 3));

const getTwoLowerNumSum = () => {
    const getTwoPrices = restaurants.map((item) => item.averagePrice)
        .sort((a, b) => a - b)
        .slice(0, 2);

    const twoSum1 = getTwoPrices.reduce((accumulator, currentNum) => {
        return accumulator + currentNum
    }, 0)
    return twoSum1
}
console.log(getTwoLowerNumSum());

/*  Activity - 3 ==> Task - 2  */
const checkChar = (str, char) => str.includes(char);
console.log(`The Charector is ${checkChar("LS Digital", "D")}`);

/*  Activity - 4 ==> Task -1  */
const parametrFunc = (parmeter1, parameter2) => {
    parameter2 = "Dhadave";
    return { parmeter1, parameter2 }
}
console.log(parametrFunc("Ravindra"));

/*  Activity - 4 ==> Task -2  */
const parametrFunc1 = (parmName, paramAge) => {
    if (typeof paramAge !== "number") {
        console.log(`"Please enter the Number in second parameter" ${parmName}`);
    } else {
        console.log(`"Hi Greeting!" ${paramAge}`);
    }
}
console.log(parametrFunc1("Prafulla", 40));

/*  Activity - 5 ==> Task -1  */
const trainsDetails = [
    {"trainNumber":12345,"origin":"Mumbai Central","destination":"Delhi","departureTime":"10:00 AM","arrivalTime":"08:00 PM","duration":"10h 0m","days":["Mon","Wed","Fri"],"fare":1500},
    {"trainNumber":54678,"origin":"Chennai Central","destination":"Kolkata","departureTime":"07:30 AM","arrivalTime":"05:30 PM","duration":"10h 0m","days":["Tue","Thu","Sat"],"fare":1800},
    {"trainNumber":90123,"origin":"Bangalore City Jn.","destination":"Hyderabad Decan","departureTime":"12:00 PM","arrivalTime":"10:00 PM","duration":"10h 0m","days":["Daily"],"fare":1200},
    {"trainNumber":78901,"origin":"Ahmedabad Jn.","destination":"Jaipur Jn.","departureTime":"05:00 PM","arrivalTime":"03:00 AM","duration":"10h 0m","days":["Sun","Tue"],"fare":1000},
    {"trainNumber":34567,"origin":"Pune Junction","destination":"Goa","departureTime":"09:15 AM","arrivalTime":"07:15 PM","duration":"10h 0m","days":["Mon","Wed","Fri","Sat"],"fare":1400},
    {"trainNumber":67890,"origin":"Secunderabad Jn.","destination":"Bhubaneswar","departureTime":"02:00 PM","arrivalTime":"12:00 PM","days":"Travel time exceeds 24 hours (1d 22h)","fare":2500},
    {"trainNumber":10234,"origin":"Kanpur Central","destination":"Lucknow Nr.","departureTime":"06:30 AM","arrivalTime":"08:30 AM","duration":"2h 0m","days":["Daily"],"fare":500},
    {"trainNumber":98765,"origin":"Delhi","destination":"Mumbai Central","departureTime":"11:00 PM","arrivalTime":"09:00 AM","duration":"10h 0m","days":["Sun"],"fare":1600},
    {"trainNumber":87654,"origin":"Kolkata","destination":"Chennai Central","departureTime":"06:00 AM","arrivalTime":"04:00 PM","duration":"10h 0m","days":["Mon","Wed","Fri"],"fare":1700},
    {"trainNumber":76543,"origin":"Hyderabad Decan","destination":"Bangalore City Jn.","departureTime":"09:00 PM","arrivalTime":"07:00 AM","duration":"10h 0m","days":["Daily"],"fare":1300}
];

// find the trains with maximum and minimum fare
const getTrainsFare = trainsDetails.map((fares) => fares.fare);

console.log(getTrainsFare);

const getMaxFare = getTrainsFare
                    .sort((a, b) => b - a)
                    .slice(0, 1)

const getMaxFare1 = Math.max(...getTrainsFare)                    
console.log(getMaxFare1);
const getMinFare1 = Math.min(...getTrainsFare)                    
console.log(getMinFare1);

const calculateTotalFare = (trainNumber, passenger) => {
    const trainObj = trainsDetails.find((originSrc) => originSrc.origin === "Mumbai Central");
    const trainFare = trainObj.fare * passenger;
    return `"Total Fare is ${trainFare} of the Tran No. ${trainNumber} for the passenger ${passenger}. The maximum Fare of Train is ${getMaxFare} for the per person"`    
}
console.log(calculateTotalFare(12345, 5));
console.log("\n");
function getTrainsByDay(day){
    
    const filterTrainsByWeekDays = trainsDetails.filter((day) => day.days.includes("Mon")|| day.days.includes("Tue")|| day.days.includes("Wed")|| day.days.includes("Thu")|| day.days.includes("Fri")|| (day === "Daily"));

    const mapTrainsNum = filterTrainsByWeekDays.map((train) => `\n Train No. is ${train.trainNumber}  Runs on the Days ${train.days} \n`);
    const filterTrainsByWeekend = trainsDetails.filter((day) => day.days.includes("Sun")|| day.days.includes("Sat"));
    const filterTrainsByDaily = trainsDetails.filter((day) => day.days.includes("Daily"));

    if((day === "Mon") || (day === "Tue") || (day === "Wed") || (day === "Thu") ||( day === "Fri") || (day === "Daily")){
        return ` ${mapTrainsNum}`
    }else if((day === "Sat") || (day === "Sun") || (day === "Daily")){
        return filterTrainsByWeekend
    }else if(day === "Daily"){
        return filterTrainsByDaily
    }else{
        console.log("Please Enter The Day");
    }
}

console.log(getTrainsByDay("Daily"));



















