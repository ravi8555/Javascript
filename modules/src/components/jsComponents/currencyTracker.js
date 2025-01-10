console.log("Currency Tracker Loaded");

async function getCurrency(){
    const fetchData = async ()=>{
        const respose = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        const data = await respose.json();
        console.log("Data",data);
        return data
    }
    return fetchData()
}
getCurrency()

// async function getCurrency(){   
//         const respose = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
//         const data = await respose.json();
//         console.log("Data",data);
//         return data


// }
// getCurrency()