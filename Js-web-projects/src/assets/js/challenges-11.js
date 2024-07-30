const getdata = async ()=>{
    try{
        const fetchdata = await fetch("https://the-trivia-api.com/api/questions/")
        const response = await fetchdata.json();
    if(!response.ok){
        throw new Error("The Network not Ok")
    }
    console.log("Data=>", response);
    return response
    }catch(err){
        console.log(err);
    }
    
}

console.log(getdata());