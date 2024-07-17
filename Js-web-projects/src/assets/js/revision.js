// console.log("Revision");

// const { event } = require("jquery");

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


  // const userDetails = {
  //   name: {
  //     first: "Kapil",
  //     last: "Raghuwanshi",
  //   },
  //   jobTitle: "JS Instructor @ Crio.do",
  //   email: {
  //     work: "kapil@epsilon.com",
  //     personal: "",
  //   },
  //   status: {
  //     isOnline: true,
  //     isVerified: false,
  //   }
  // }

  // userDetails.name = {...userDetails.name, first:"Rizwana", last: "Kandekar"}
  // userDetails.Department = {...userDetails.Department, name:"IT", designation:"AVP"}  
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


// function bikeRepair(funcToExecuteLater){
//   console.log("Working on bike");
//   //once the work is done
//   funcToExecuteLater();
// }

// function callOwner(){
//   console.log("Take back bike");
// }
// bikeRepair(callOwner);

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
// const oddNoArray = [1, 3, 5];
// oddNoArray[50] = 199;
// console.log( oddNoArray.length );

// function teacher(){

//   const TeacherName = "Dinesh patil";
//   // let Qulification = "MCA";
//   function student(){
//     console.log(`I am from Teacher function ${TeacherName}`);
//     return TeacherName
//   }
//   return student

// }




// // console.log(NameOfTeacher());
// const NameOfTeacher = teacher()
// NameOfTeacher()

// function createSecreteNum(){
//   const mysecretNum = Math.floor(Math.random() * 100);

//   function getSecreteNum(){
//     console.log(`Random Secrete Num is ${mysecretNum}`);
//     return mysecretNum
//   }
//   return getSecreteNum
// }

// const generateSecretNum = createSecreteNum()
// console.log(generateSecretNum());

// function getCount(){
//   let count = 0;

//   function createCount(){
//     count++;
//     return count
//   }

//   return createCount
// }
// const myCount = getCount();

// console.log(myCount());
// console.log(myCount());
// console.log(myCount());
// console.log(myCount());
// console.log(myCount());


// localStorage.setItem("name", "LSD");
// localStorage.getItem("name")

// console.log(localStorage.getItem("name"));

// sessionStorage.setItem("Tech","JS");
// sessionStorage.getItem("Tech")

// console.log(sessionStorage.getItem("Tech"));


// function greeting(day) {
//   // You only need to implement this function.
//   message = `Today is : ${day}`
//   function msg (){
//     return message
//   }
//   return msg
// }

// console.log(greeting("Sunday")());

// function createButtonHandler(message){
//     return function(){  
//       console.log(`Element ${message} id is ${this.id}`);  
    
//   }
// }
// const btn1 = document.getElementById("button1")
// const btn2 = document.getElementById("button2")

// const createHandle1 = createButtonHandler(`Button 1 Clicked and id is ${this.id}`)
// const createHandle2 = createButtonHandler(`Button 2 Clicked and id is ${this.id}`)

// btn1.addEventListener('click', createHandle1)
// btn2.addEventListener('click', createHandle2)

// const data = [
//   { _id: "1", name: "Vivek" },
//   { _id: "2", name: "Neha" },
//   { _id: "3", name: "Satya" },
//   { _id: "4", name: "Amit" },
// ];

// for (var itr = 0; itr < data.length; itr++){
//     if(data[itr]._id === "4"){
//        console.log(data[itr]);
// 	//  break;
//     }
// }

// const res = data.find((item) => item._id === "4");
// console.log(res);

const numArray =  [1,4,5,6,7,8,9];
// const evenUm = numArray.find((num) => num % 2 === 0?num : undefined)
// // console.log(evenUm);

// for(let i = 0; i <numArray.length; i++){
//   const evenNum =numArray[i] %2 ===0
//   if(evenNum  ){
//     console.log(numArray[i]);
//   }
// }

// for(const num of numArray){
//   if(num  %2 ===0){
//     console.log(num);
//   }
// }

// numArray.forEach ((item, idx)=>{
//   const evenNum = item %2 ===0 ? item : undefined;
//   console.log(evenNum);
// })


// we want to arrange a bunch of students according to their names in alphabetical order.

// const shoppingList = [
//   { name: "Milk", price: 3 },
//   { name: "Eggs", price: 5 },
//   { name: "Bread", price: 2 },
//   { name: "Cheese", price: 12 }
// ];

// const getItem = shoppingList.find((item)=> item.price >= 5);
// console.log(getItem);

// for(const item of shoppingList){
//   if(item.price <= 12){
//     console.log(item);
//   }
// }

// function getListName(){
//   let res = [];
//   for(const item of shoppingList){
//     if(item.price <= 12){
//       res.push(item.name)
//     }
//   }
// }

// const students = [
//   "Bob",
//   "Susy",
//   "Ted",
//   "Sarah",
//   "Bill"
// ];
// const nums = [4, 20, 12, 1, 100];

// console.log(students.sort());
// console.log(nums.sort((a,b) => a-b));

// function multiplY(num){
//   const res = [];
//   for(let i =0; i < num.length; i++){
//     res[i] = num[i] * 2
//   }
//   console.log(res);
//   return res
  
// }
// multiplY(numArray);

// function result(arr){
//   const res = [];
//   for(let i =0; i < arr.length; i++){
//     res[i] = mutiplyDouble(arr[i])
//   }
//   return res
// }


// function getDouble(arr, mulitiplyFn){
//   const resArr = [];
//   for(let i =0; i < arr.length; i++){
//     resArr[i] = mulitiplyFn(arr[i])
//   }
//   return resArr
// }
// function mulitiplyFn(num){
//   return num * 2
// }
// const doubleArr = getDouble(numArray, mulitiplyFn);
// console.log("third",doubleArr);

// const products = [
//   { name: 'Product 1', price: 10.99 },
//   { name: 'Product 2', price: 29.99 },
//   { name: 'Product 3', price: 15.49 },
//   { name: 'Product 4', price: 59 },
//   { name: 'Product 5', price: 49.99 }
// ];
// products.map((item)=> console.log(`Name : ${item.name}, Price : $${item.price.toFixed(2)}`))

// const temperaturesCelsius = [20, 25, 18, 30, 22, 27];

// function celciousTofahrenheit(celcious){
//   return (celcious * 9/5)+32
// }

// const getFahrenheit = temperaturesCelsius.map((celc) =>{
//   const farhrenheit = celciousTofahrenheit(celc)

//   return farhrenheit
// })

// console.log(getFahrenheit);

// const users = [
//   { username: 'user1', email: 'user1@example.com' },
//   { username: 'user2', email: 'user2@example.com' },
//   { username: 'user3', email: 'user3@example.com' },
//   { username: 'user4', email: 'user4@example.com' },
//   { username: 'user5', email: 'user5@example.com' }
// ];
// const userName = users.map((user) => user.username);

// console.log(userName);

const imageGallery = [
  {
    albumId: 1,
    id: 1,
    title: "accusamus beatae ad facilis cum similique qui sunt",
    url: "https://via.placeholder.com/600/92c952",
    thumbnailUrl: "https://via.placeholder.com/150/92c952",
  },
  {
    albumId: 1,
    id: 2,
    title: "reprehenderit est deserunt velit ipsam",
    url: "https://via.placeholder.com/600/771796",
    thumbnailUrl: "https://via.placeholder.com/150/771796",
  },
  {
    albumId: 1,
    id: 3,
    title: "officia porro iure quia iusto qui ipsa ut modi",
    url: "https://via.placeholder.com/600/24f355",
    thumbnailUrl: "https://via.placeholder.com/150/24f355",
  },
  {
    albumId: 1,
    id: 4,
    title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
    url: "https://via.placeholder.com/600/d32776",
    thumbnailUrl: "https://via.placeholder.com/150/d32776",
  },
  {
    albumId: 1,
    id: 5,
    title: "natus nisi omnis corporis facere molestiae rerum in",
    url: "https://via.placeholder.com/600/f66b97",
    thumbnailUrl: "https://via.placeholder.com/150/f66b97",
  },
  {
    albumId: 1,
    id: 6,
    title: "accusamus ea aliquid et amet sequi nemo",
    url: "https://via.placeholder.com/600/56a8c2",
    thumbnailUrl: "https://via.placeholder.com/150/56a8c2",
  },
];

// const main = document.getElementById('main')
// const createDom = (thumbnailUrl) => {
//   let div = document.createElement('div');
//   div.style.width = "200px";
//   div.style.height = "200px";
//   const img = document.createElement('img');
//   img.src = thumbnailUrl; // Use 'src' instead of 'setAttribute'
//   div.appendChild(img);
//   return div;
// }

// const thumbs = imageGallery.map((img) => createDom(img.thumbnailUrl));

// thumbs.forEach((img)=>{
//   // console.log(img);
//   main.appendChild(img)
// })

// console.log(thumbs);

// const products = [
//   { name: 'Product 1', price: 50, discountPercentage: 10 },
//   { name: 'Product 2', price: 30, discountPercentage: 20 },
//   { name: 'Product 3', price: 25, discountPercentage: 15 },
//   { name: 'Product 4', price: 40, discountPercentage: 5 },
//   { name: 'Product 5', price: 60, discountPercentage: 25 }
// ];

// const getdiscountedProductPrice = products.map((product) => {

//   const discountAmount = product.price * (product.discountPercentage / 100);
//   const discountedPrice = product.price - discountAmount

//   return {
//     name: product.name,
//     price : product.price,
//     discountPercentage : product.discountPercentage+'%',
//     discountdPrice : discountAmount.toFixed(2)
//   }

// })

// console.log(getdiscountedProductPrice);

// const element = document.createElement('div');

// const event1 = new CustomEvent('UpdatedContent', {
//   detail: { Name: "React" }
// });

// // Dispatch the event on the document or any parent element
// document.dispatchEvent(event1);

// // Listen for the custom event on the document or any parent element
// document.addEventListener('UpdatedContent', (event1) => {
//   console.log(event1.detail);
// });

// function show(){
//   this.lang = "React";
//   this.showLang = ()=>{
//     this.lang = "Javascript"
//     console.log(this.lang)
//   }
// }

// const data = new show();
// const fn = data.showLang;
// fn()

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function seperteNum (arr){
//   const evenNum = arr.filter((num)=> num % 2 === 0)
//   const OddNum = arr.filter((num) => num % 2 !== 0)
//   return {evenNum, OddNum}
// }
// console.log(seperteNum(numbers));

// const strings = ["apple", "banana", "kiwi", "grape", "strawberry", "melon"];
// const maxLengthString = (strArr)=>{
//   const minLength = 5;
//   const getMaxLenstr = strArr.filter((res) => res.length >= minLength);
//   return getMaxLenstr
// }
// console.log(maxLengthString(strings));

// const products = [
//   { name: "Laptop", price: 999.99 },
//   { name: "Smartphone", price: 699.99 },
//   { name: "Tablet", price: 399.99 },
//   { name: "Smartwatch", price: 199.99 },
//   { name: "Headphones", price: 149.99 },
//   { name: "Camera", price: 499.99 },
//   { name: "Printer", price: 129.99 },
//   { name: "Monitor", price: 179.99 },
//   { name: "Keyboard", price: 49.99 },
//   { name: "Mouse", price: 29.99 }
// ];

// const getPriceFromObj = (product)=>{
//   threshold = 200
//   const price = product.filter((item) => item.price < threshold);
//   return price 
// }
// console.log(getPriceFromObj(products));

// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 35 },
//   { name: "Diana", age: 28 },
//   { name: "Ethan", age: 22 },
//   { name: "Fiona", age: 27 },
//   { name: "George", age: 32 },
//   { name: "Hannah", age: 29 },
//   { name: "Ian", age: 26 },
//   { name: "Jane", age: 24 }
// ];

// function olderAge(person){
//   const adult = 25;
//   const getAdultPerson = person.filter((per) => per.age > adult);
//   return getAdultPerson
// }
// console.log(olderAge(users));
// function sayHi() {
//   console.log(name);
//   console.log(age);
//   let age = 21;
//   var name = 'Lydia';
// }

// console.log(sayHi());

// for(var i =0 ; i <5; i++){
//   setTimeout(()=> console.log(i), 1)
// }
// for(let i =0 ; i <3; i++){
//   setTimeout(()=> console.log(i), 1)
// }

// const shape = {
//   radius : 10,
//   diameter(){
//     return this.radius * 2
//   },
//   perimeter: () => 2* Math.PI * this.radius,
// }

// console.log(shape.diameter());
// console.log(shape.perimeter());

// var testValue;
// !function test(){
//     testValue = 3
// }(); 
 
// +true;
// console.log(!'Lydia');

// const bird = {
//   size: 'small',
// };

// const mouse = {
//   name: 'Mickey',
//   small: true,
// };

// const bird = {
//   size: 'small',
// };

// const mouse = {
//   name: 'Mickey',
//   small: true,
// };

// // console.log(mouse.bird.size);
// // console.log(mouse[bird.size]);
// console.log(mouse[bird["size"]]);

// let a = 3;
// let b = new Number(3);
// let c = 3;

// // console.log(a == b);
// console.log(a === b);
// console.log(b === c);


// class Chameleon {
//   static colorChange(newColor) {
//     this.newColor = newColor;
//     return this.newColor;
//   }

//   constructor({ newColor = 'green' } = {}) {
//     this.newColor = newColor;
//   }
// }

// const freddie = new Chameleon({ newColor: 'purple' });
// console.log(freddie.colorChange('orange'));

// class Chameleon {
//   static colorChange(newColor) {
//     this.newColor = newColor;
//     return this.newColor;
//   }

//   constructor({ newColor = 'green' } = {}) {
//     this.newColor = newColor;
//   }
// }

// const freddie = new Chameleon({ newColor: 'purple' });
// console.log(freddie.newColor);



// console.log(mouse.bird.size);
// console.log(mouse[bird.size]);
// console.log(mouse[bird["size"]]);

// let c = { greeting: 'Hey!' };
// let d;

// d = c;
// c.greeting = 'Hello';
// console.log(d.greeting);
// "use strict"
// let greeting;
// greetign = {}; // Typo!
// console.log(greetign);

// function bark() {
//   console.log('Woof!');
// }
// bark.animal = 'dog'

// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }


// const member = new Person('Lydia', 'Hallie');
// Person.prototype.getFullName = function() {
//   return `${this.firstName} ${this.lastName}`;
// };

// // console.log(member.member);
// console.log(member.getFullName());

// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// const lydia = new Person('Lydia', 'Hallie');
// const sarah = Person('Sarah', 'Smith');

// console.log(lydia);
// console.log(sarah);

// function sum(a, b) {
//   return a + b;
// }

// // sum(1, '2');

// console.log(sum(1, '2'));

// let number = 0;

// console.log(number++);
// console.log(++number);
// console.log(number);

// function getPersonInfo(one, two, three) {
//   console.log(one);
//   console.log(two);
//   console.log(three);
// }

// const person = 'Lydia';
// const age = 21;

// getPersonInfo`${person} is ${age} years old`;
// getPersonInfo(`${person} is ${age} years old`)

// console.log(getPersonInfo(`${person} is ${age} years old`));

// var testValue;
// function test() { testValue = 3; }
// function getAge(...args) {
//   console.log(typeof args);
// }

// getAge(21);

// function getAge() {
//   'use strict';
//   age = 21;
//   console.log(age);
// }

// getAge();

// const sum = eval('10*10+5');
// console.log(sum);

// sessionStorage.setItem('cool_secret', 123);

// var num = 8;
// var num = 10;

// console.log(num);


// const obj = { 1: 'a', 2: 'b', 3: 'c' };
// const set = new Set([1, 2, 3, 4, 5]);

// console.log(obj.hasOwnProperty('1'));
// console.log(obj.hasOwnProperty(1));
// console.log(set.has('1'));
// console.log(set.has(1));

// const obj = { a: 'one', b: 'two', a: 'three' };
// console.log(obj);

// for (let i = 1; i < 5; i++) {
//   if (i === 2) continue;
//   console.log(i);
// }

// String.prototype.giveLydiaPizza = () => {
//   return 'Just give Lydia pizza already!';
// };

// const name = 'Lydia';

// console.log(name.giveLydiaPizza())

// const a = {};
// const b = { key: 'b' };
// const c = { key: 'c' };

// a[b] = 123;
// a[c] = 456;

// console.log(a[b]);

// const foo = () => console.log('First');
// const bar = () => setTimeout(
//   () =>{ console.log('Second'), 1}
// );
// const baz = () => console.log('Third');

// bar();
// foo();
// baz();


