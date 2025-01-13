console.log("Currency Tracker Loaded");
async function getCurrency(){   
        const respose = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        const data = await respose.json();        
        return data
}
const disRate = async ()=>{
    const getrates = await getCurrency();
    console.log(getrates.rates);
    return getrates.rates

}
const handleClick = async (event)=>{
    event.preventDefault()
    const result = document.getElementById("results")
    const input = document.getElementById("currencyInput");
    const inputVal = input.value.toUpperCase();
    const rates = await disRate()

    if (rates[inputVal]) { 
        result.innerHTML = `Rate for ${inputVal}: ${rates[inputVal]}`; 
    } else { 
        result.innerHTML = `No rate found for ${inputVal}`;
    }
    
}
window.getCurrency = getCurrency;
window.handleClick = handleClick;
window.disRate = disRate;
export {getCurrency, handleClick, disRate}

