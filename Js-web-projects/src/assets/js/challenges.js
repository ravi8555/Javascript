var testValue;
function test() { testValue = 3; }
console.log(testValue);

var myNum = 143;
let myWord = "I Love You";
// console.log(myNum, myWord);

const isTrueFlase = true;
// console.log(isTrueFlase);

var numDataType = 143;
let strindataType = "I Love You";
const boleanDataType = true;
const myObjDataType = {
    name: "Vihan",
    Age : 3
}
const arrayDataType = ["Time", "hardwork", "consitency"]
// console.log("arrayDataType", Array.isArray(arrayDataType));

// console.log(typeof numDataType, typeof strindataType, typeof boleanDataType, typeof myObjDataType, typeof arrayDataType);

let asignVal = "Its Raning";
 asignVal = "Its Cloudy";

//  console.log(asignVal);

 const reassign = "Its Sunny"
//  reassign = " Its Rainy again";
//  console.log(reassign);

function add(a, b){
    console.log(a + b);
}
add(3, 5);

let totalItem = 30;
const soldItem = 20;

const stockTotalItem = (item1, item2) =>{
    // console.log(item1 - item2);
}
stockTotalItem(totalItem, soldItem);

    const fruits = [
        { fruit: "Apple", price: 1.5, itemStock:20 },
        { fruit: "Pomegranate", price: 2, itemStock:25 },
        { fruit: "Orange", price: 8, itemStock:33 },
        { fruit: "Mango", price: 2.0, itemStock:3 },
        { fruit: "Pineapple", price: 3.0, itemStock:50 },
    ];

    const appleDetails = fruits.find(item => item.fruit === "Apple")
    const applePrice = appleDetails.price;
    const appleStock = appleDetails.itemStock;
    const appleAvgPrice =Math.round(appleStock/applePrice)

    console.log("Apple Avg",appleAvgPrice);

    const myAppleStockValue = `${appleDetails.fruit} stock value is ${appleDetails.price} * ${appleDetails.itemStock} = ${appleDetails.price * appleDetails.itemStock}` 

    let totalStockItem = fruits.reduce((accumalotor, currentFruit)=>{
        return accumalotor + currentFruit.itemStock
    }, 0);

    let totalFruitsPrice = fruits.reduce((accumolator, currentfruitPricr)=>{
        return accumolator + currentfruitPricr.price
    }, 0)

    console.log("TotalStock =>", totalStockItem);
    
    const getAvgPrice = `${Math.floor(totalStockItem / totalFruitsPrice)}`
    const getRemainder = `Total Remainder is ${Math.round(totalStockItem % totalFruitsPrice)}`
    // console.log(getTotalAvg, getRemainder);

    totalStockItem += 10;
    console.log(totalStockItem);

    totalItem -= 15;
    console.log(totalItem);

    if(applePrice > getRemainder){
        console.log("Apple Price Is Okay");
    }else{
        console.log("Apple Price Is less than Fruits Avarage");
    }

    if(applePrice < totalStockItem){
        console.log("Apple Price Is Okay");
    }else{
        console.log("Apple Price Is less than Fruits Avarage");
    }

    if(appleAvgPrice <= applePrice){
        console.log(`We are getting loss `);
    }
    if(appleAvgPrice >= applePrice){
        console.log(`We are getting Proffit `);
    }
    let converTostring = totalStockItem.toString()
    let converTostring1 = String(totalStockItem)
    let converTostring2 = "" + totalStockItem
    console.log("totalStockItem",converTostring1);
    console.log(typeof converTostring1);
    console.log(typeof totalStockItem);
    console.log(typeof converTostring2);

    if(converTostring1 == totalStockItem){
        console.log("The Value are same");
    }else{
        console.log("The Value are 'NOT' same");

    }

    if(converTostring1 === totalStockItem){
        console.log("The Value are same");
    }else{
        console.log("The Value are 'NOT' same");

    }
    console.log(getAvgPrice);
    
    if(getAvgPrice >= 8 && totalStockItem == "141" ){
        console.log("The && condition true");
    }else{
        console.log("The && condition False");

    }
    if(!converTostring){
        console.log("Negative codition true");
    }else{
        console.log("Negative codition False");
    }

    const myTernery = converTostring === 141 ? "Its string " : "Its Number";
    console.log(myTernery);



