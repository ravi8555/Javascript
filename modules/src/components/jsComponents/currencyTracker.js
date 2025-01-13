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

async function getCurrency(event) {    
  event.preventDefault();
  const fetchApi = async () => {
    try {
     const response = await fetch("https://api.exchangerate-api.com/v4/latest/USD");
     if(!response.ok){
        throw new Error(`API request failed with status ${response.status}`)
     }
    const data = await response.json();
    console.log(data);
    return data;
        
    } catch (error) {
        console.error('Error fetching the currency data', error);
        return null
    }
    
  };

  const handleInput = async () => {
    const currencyInput = document.getElementById("currencyInput");
    const resultContainer = document.getElementById("results");
    const currecyCode = currencyInput.value.toUpperCase();
    console.log(currecyCode);
    
    const ratesData = await fetchApi();
    if (ratesData.rates[currecyCode]) {
      const currecyRate = ratesData.rates[currecyCode]  
      resultContainer.innerHTML = `1 $ =  ${currecyRate} ${currecyCode}`;
    } else {
        resultContainer.innerHTML = `${currecyCode} does not exist`;
      
    }
  };
  handleInput()
 
}

window.getCurrency = getCurrency;
export { getCurrency };
