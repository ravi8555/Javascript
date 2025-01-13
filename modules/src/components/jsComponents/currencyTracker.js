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
