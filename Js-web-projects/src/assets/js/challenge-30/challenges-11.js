import { error } from "jquery";

const myPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve()
    },2000)
})
myPromise.then(()=>{
    console.log("Promise is resolved");
})

const myNewPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error = true;
        if(!error){
            resolve()
        }else{
            reject();
        }
    },2000)
})

myNewPromise.then(()=>{
    console.log("Promise is resolved");
})
.catch((error)=>{
    console.log("Error", error);
})

new Promise((resolve, reject)=>{
    let error = false;
    if(!error){
        resolve({
            Name : "Ravindra",
            Company : "LS"
        })
    }else{
        reject(console.log(error))
    }
}).then((res)=>{
    console.log(res);
}).catch((console.log(error)))

// const getdata = async ()=>{
//     try{
//         const fetchdata = await fetch("https://the-trivia-api.com/api/questions/")
//         const response = await fetchdata.json();
//     if(!response.ok){
//         throw new Error("The Network not Ok")
//     }
//     console.log("Data=>", response);
//     return response
//     }catch(err){
//         console.log(err);
//     }
    
// }

// console.log(getdata());