const restaurants = [
    { name: "The Curry House", cuisine: "Indian", averagePrice: 25, isOpen: true, },
    { name: "Mamma Mia", cuisine: "Italian", averagePrice: 30, isOpen: false, },
    { name: "Masala Dosa", cuisine: "Indian", averagePrice: 30, isOpen: false, },
    { name: "Pizza", cuisine: "America", averagePrice: 50, isOpen: true, },
    { name: "ZoolIce", cuisine: "Fance", averagePrice: 20, isOpen: true, },
    // Add more restaurant objects as needed
];
// task -1
// console.log(`Name ${(restaurants[0].name)} : ${(restaurants[0].cuisine)}}`);
// task-2
// create a multi-line string using template literals and log it to the console
const quote = `"feel pain accept pain know pain
those who do not know pain
will never understand true peace!"`
// console.log(quote);

// task -3 
//  use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
const numbers = [10, 20, 30, 40, 50];

const [first, second, ...remaining] = numbers;
// console.log(first);
// console.log(remaining);

// task - 4
// use object destucturing to extract the title and autor froma book object and log them to the console.
const booknw = {
    title : "Passinated",
    author: "Javascript",
    year: 2000,
    getupdat : {
        library : "khandwa",
        city : 'khandwa',
    }
}
const {title : BootTitle, author:AuthorName} = booknw
// console.log(BootTitle, AuthorName);
// task - 4 -2
function bookDestrcture ({title, author}){
    console.log("Title : ",title, author);
}
bookDestrcture(booknw)

// task - 4 -3
const Bookslibrary = {
    name :'City Library',
    books: [
      {
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        year: 1813,
        price: 10.99,
      },
      {
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        year: 1960,
        price: 12.5,
      },]
  }

for(const book of Bookslibrary.books){
    const {title, year} = book;
    // console  .log("Title :",title, "Year :",year);

}  
// console.log(title);

// task - 4 -4

const mapDestrucuter = restaurants.map(({name, cuisine})=>{
    return `Name: =>${name} ${"\n"} cuisine => ${cuisine}`
})
// console.log(mapDestrucuter);


// Task - 5.

// use the spread operator to create a new array that includes all elemnt of an exisiting array plus additoinal elements and log the new array to the console
const weatherData = [ "London", "UK","temperature", "description"]
const copyweatherData = [...weatherData, "windSpeed", " Celsius"]
// console.log(copyweatherData);

// Task -6
// use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result

function sumAll (...numbers){
    return numbers.reduce((accumulator, currentNum) => accumulator +currentNum, 0)
}
// console.log(sumAll(1,2,3));

//Task 7. write a function that takes two parameter and returns their product, with the second parameter having a default value of 1.log the result of calling this function with and without the second paramtere

function twoParaDefault(para1, para2 =1){
    return para1*para2
}
console.log(twoParaDefault(4));
console.log(twoParaDefault(4,2));

// Task -8  use enhanced object literals to create an object with mehtod and properties, and log the 

const person = {
    name: "Ravindra",
    lastname : "Dhadave",
    greet(){
        return `Hello I am ${this.name} ${this.lastname}`
    },
    age(){
        return 30
    },
    logDeatails(){
        return greet() 
    }
}
// console.log(person.greet());

// Task -8 (2)
const name = "Advait";
const age = 23;

const person1 = {
    name,
    age,
    greet(){
        console.log(`I am ${this.name} I am ${this.age} Years old`);
    },
    ["isAdult"]: age >= 18
}
// console.log(person1.greet());
// console.log(person1.isAdult);

// Task -9
// create an object with computed property names based on variable and log the object to the console
const propName = "Name";
const propValue = 4;

const person2 = {
    [propName] : "Vihaan",
    Age : propValue,
    AccessProerty: "Jai Gajanan",
    [`_Computed_Prop ${propName}`]:propValue +1
}
console.log(person2);


