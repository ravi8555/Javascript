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

  console.log(userDetails.Department);
  console.log(userDetails);

  function addDepartment({Department:{name, designation}}){

  }
  const userData = {Department:{name:"IT", designation:"AVP"}} 

  const newDeparObj = addDepartment(userData)

  console.log(newDeparObj);


