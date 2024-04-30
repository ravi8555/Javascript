// console.log("Revision");

// const arr = [1,2,8,9,6]
// const n = arr.length
// function findElement(n, arr, x) {
//     for(let idx = 0; idx <n; idx++){
//         if(arr[idx] == x){
//             return idx
//         }
//     }
//     return -1
// }

// console.log(findElement(5, arr, 6));

// const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// const sum = matrix.reduce((acc, row) => {
//   return acc + row.reduce((rowSum, num) => rowSum + num, 0);
// }, 0);
// console.log(sum);

// function toUpperCase(c){
//     const assci = c.charCodeAt(0)
//     return String.fromCharCode(assci - 32)
//   }
//   function capitalise(paragraph) {
//     let n = paragraph.length;
//     let array = Array.from(paragraph);
//     for(let i = 0; i < n; i++){
//       if(i == 0 || array[i-1] == " " || array[i-1] == "."){
//         if(array[i] >= 'a' && array[i] <= 'z'){
//           array[i] = toUpperCase(array[i])
//         }
//       }
  
//     }
//     return array.join("")
//   }
// const para = "the quick Brown fox jumps over The lazy dog."
//   console.log(capitalise(para));
//   const personObj = () => {
//     const person = {
//         name: "Aman Sharama",
//         jobTitle: "Jr Front End Developer",
//         email: "aman.s@gm.com",
//         isVerified: false
//     };
//     person.isVerified = true;
//     let divElement = document.createElement('div');
//     delete  person.name
//     person.firstName = "Ravindra";
//     person.lastName = "Dhadave"
//     divElement.innerHTML =  `${person}
//     <p>FirstName : ${person.firstName}</p> <br/> <p>LastName : ${person.lastName}</p> <br/> <p>Verified Person : ${person.isVerified}</p>`;
//     document.body.append(divElement);

//     let jsonStringify = JSON.stringify(person, null, 2);
//     console.log(jsonStringify);

//     if (person.isVerified) {
//         // personObj(); // Call again only once (remove recursion)
//     } else {
//         console.log("Person does not exist");
//     }
// };

// personObj(); // Call the function


// for (let x = 0; x < 3; x++) console.log("x==>", x );
// for (let y = 1; y < 3; ++y) console.log( y );

// const oddNoArray = [1, 3, 5];
// oddNoArray[100] = 199;
// console.log( oddNoArray.length );

// let letterArray = ['a','b','c','d','e','f'];
// const anotherLetterArray = letterArray;
// letterArray = [];
// console.log(anotherLetterArray);

// const personalDetails = {
//   name: "John Doe",
//   designation: "Data Analyst",
//   age: 24,
//   address: {
//      locality: "1600 roselane colony",
//      city: "Mumbai",
//      state: "Maharashtra",
//      country: "India"
//   }
// }

// console.log(personalDetails.address.city);
// console.log(personalDetails[address][city]);//error


  const userDetails = {
    name: {
      first: "Kapil",
      last: "Raghuwanshi",
    },
    jobTitle: "JS Instructor @ Crio.do",
    email: {
      work: "kapil@epsilon.com",
      personal: "",
    },
    status: {
      isOnline: true,
      isVerified: false,
    }
  }

  userDetails.name = {...userDetails.name, first:"Rizwana", last: "Kandekar"}
  userDetails.Department = {...userDetails.Department, name:"IT", designation:"AVP"}  
  // console.log(userDetails['Department'].name);

// console.log(userDetails.Department);
// console.log(userDetails);

// const obj = {
//     name: "Ravi"
// }

// const {x} = obj;
// console.log(x);

// let a = 0;
// let b = 0;
// console.log(a/b);

// let a = 0;
// var b;
// console.log(a/b);

// 1.What will be the output:

// const readBooks = (book1, book2) => console.log(`I read '${book1}' published in '${book2}'`);
// readBooks("Rework", "2010");

// if(1){
//   let a = 10;
//   let a = 20;
// }
// let a = 10;

// func();
// function func() {
//   var a = 20;
// }
// console.log(a);

// var a = 10;
// console.log(a);
// Lexical Scope
// if(a==10)
//   {
//       const a = 20;
//       console.log(a);
//   }

// var a = 30;
// console.log(a);

// function parent() {
//   const message = "I am from parent =>";

//   function child() {
//     console.log(message + " Called from child function ");
//   }
//   child();
// }

// parent();

// var x = 10; // global scope

// var outerFunc = function (){ // outermost function
//     var y = 20;
//     console.log(x + " " + y);

//       var innerFunc= function (){ // innermost function
//         var z = 30;
//         console.log(x + " " + y + " " + z);
//     }
//     innerFunc();
// }
// outerFunc();

// var a;
// console.log(a);
// a = 10;


// func ();

// var func = () => {
//   console.log("hello");
// }

// func ();

// let func = function() {
//   console.log("hello");
// }



// var func;

// func(); 

// const func = function() {
//   console.log("hello");
// }


function bikeRepair(funcToExecuteLater){
  console.log("Working on bike");
  //once the work is done
  funcToExecuteLater();
}

function callOwner(){
  console.log("Take back bike");
}
bikeRepair(callOwner);

// function waitFunction(doSomethingAfterWaiting){
//   console.log("waiting for the game start")
//   doSomethingAfterWaiting()
// }

// function gameSetTime(){
//   setTimeout(()=>{
//     console.log("Game Now Started after 2 sec");
//   }, 3000)
// }
// waitFunction(gameSetTime)

// function waitFunction(callback){
//   console.log("Game Loding...");
//   setTimeout(callback, 2000)
// }

// function doSomethingAfterWaiting(){
//   console.log("Welcome to my game");
// }
// waitFunction(doSomethingAfterWaiting)


// }
// if(aman === yatish){
//   console.log("The number are same");
// }else{
//   console.log("hello");
// }

// let winHe = window.innerHeight
// console.log(winHe);
// const sec = document.querySelectorAll('section')

// sec.forEach((ele)=>{
//   ele.style.height = winHe + "px";
// })

// const list = document.getElementById('list');
// let loadMoreBtn = document.getElementById('loadMore');

// let listP = document.querySelectorAll('#list p')

// // console.log("LoadmoreBtn",loadMoreBtn);
// loadMoreBtn.addEventListener("click", (ele)=>{
  
//   for(let i = 0; i < listP.length; i++){

//     listP[i].style.display = "block"
//     console.log(listP[i]);
//   }
//   console.log("Click");
// })

// let e = 10 * "5";
//     console.log(e);
const oddNoArray = [1, 3, 5];
oddNoArray[50] = 199;
console.log( oddNoArray.length );





