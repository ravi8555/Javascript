// class Person{
//     constructor(name, age){
//          this.name  = name;
//          this.age =  age;
//     }

//     greet(){
//         return `Hello my Name is ${this.name} and age is ${this.age}`
//     }
// }
// const person1 = new Person("Ravindra", 42);
// console.log(person1.greet());
// export default Person;


/* Create a Car Class

Define a Car class with a constructor that takes make, model, and year as parameters.

Implement a method called getDetails that returns a string in the format: This car is a [year] [make] [model].

Create an instance of the Car class and call the getDetails method to test it.*/

// class Car{
//     constructor(make, model, year){
//         this.make = make;
//         this.model = model;
//         this.year = year
//     }
//     getDetails(){
//         return `This car is a ${this.year} ${this.make} ${this.model}`
//     }
// }
// const myCar = new Car("Honda", "Amaze", "2025");
// const myCarDetails = myCar.getDetails();
// console.log(myCarDetails);
// export default Car;

// class Book{
//     constructor(title, author, isbn, isAvailable){
//         this.title = title;
//         this.author = author;
//         this.isbn = isbn;
//         this.isAvailable = isAvailable
//     }
//     markAsBorrowed(){
//         this.isAvailable = true
//     }
//     markAsReturned(){
//         this.isAvailable = false
//     }
// }

// const newBook = new Book("Rich Dad Poor Dad", "Robert Kiyosaki", "150002020");;
// console.log(newBook);

// export default Book

function classInheritance (){

class Person{
    constructor(firstName, lastName){
        if (!firstName || !lastName) {
            throw new Error("Both firstName and lastName are required");
        }
        this.firstName = firstName;
        this.lastName = lastName
    }
    fullName(){
        return `MY Full Name Is ${this.firstName} ${this.lastName}`
    }

}

class Employee extends Person{
    constructor(firstName, lastName, position, salary){
        super(firstName, lastName);

        if (typeof position !== "string" || position.trim() === "") {
            throw new Error("Position must be a valid string");
        }
        if (typeof salary !== "number" || salary < 0) {
            throw new Error("Salary must be a positive number");
        }

        this.position = position;
        this.salary = salary
    }
    toString(){
       return `${this.fullName()}, Position: ${this.position}, Salary ${this.salary}`
    }
}


const emp = new Employee("Prafulla", "Patil", "Front End Dev", 500);
console.log(emp.toString());

}
classInheritance()

class Item{
    constructor(title, author, year){
        this.title = title
        this.author = author
        this.year = year
    }
    getDetails(){
        return `Book Title: ${this.title} Author name ${this.author} Published year: ${this.year}`
    }
}

class Book extends Item{
    constructor(title, author, year, genre, ISBN){
        super(title, author, year)
        this.genre = genre;
        this.ISBN = ISBN
    }
    getDetails(){
        return `${super.getDetails()} Gener : ${this.genre} ISBN ${this.ISBN}`
    }
}

const liberyItem = new Item("Mindset", "Carol Dweck", "2006", "", "1254825BN");
const bookItem = new Book("Mindset", "Carol Dweck", "2006", "Self help Book", "1254825BN");

// console.log(bookItem.getDetails());

console.log(liberyItem.getDetails());

// LBPWQSVU9LX7YZTCYCT95A46
/* 
Stage 1 User Registeration
After fill form Email, mobile, password and confirm password data post on server and recevied it through the api
admin can get the access of all data on admin page
user will received email on Email Id successfuly, "User register sucessfully"

Stage 2
user will login using mobile otp first time after that mobile number or email ID is User ID, and password is from the filled form data
will get

I have done the stage1 
I want to complete the stage 2

*/


