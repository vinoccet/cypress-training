import { capitalize } from "./string-util.js";
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

const person1 = new Person(capitalize('John'), 20);
console.log(person1.age);