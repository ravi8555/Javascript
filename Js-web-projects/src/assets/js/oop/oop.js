class Person{
    constructor(name, age){
         this.name  = name;
         this.age =  age;
    }

    greet(){
        return `Hello my Name is ${this.name} and age is ${this.age}`
    }
}
export default Person;
const person1 = new Person("Ravindra", 42);
console.log(person1.greet());


/* Create a Car Class

Define a Car class with a constructor that takes make, model, and year as parameters.

Implement a method called getDetails that returns a string in the format: This car is a [year] [make] [model].

Create an instance of the Car class and call the getDetails method to test it.*/

