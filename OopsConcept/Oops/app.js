// let student = {
//     name: "Mohit Kucheriya",
//     age: 23,
//     talk() {
//         console.log(`hi my name is ${this.name}`);
//     }
// };
// console.log(student);

// Factory function --(normal function only)
console.log("----------Factory function----------");
function personMaker(name, age) {
    let person = {
        name: name,
        age: age,
        talk() {
            console.log(`Hello my name is ${this.name}`);
        }
    };
    return person;
}

let p1 = personMaker("Mohit Kucheriya", 23);
console.log(p1);
let p2 = personMaker("Harry Potter", 23);
console.log(p2);

// Constructor function ->generallystarts with capital letter & doesn't return anything
console.log("----------Constructor function using 'new' keyword----------");
function People(name, age) {
    this.name = name;
    this.age = age;
}
People.prototype.hello = function () {
    console.log(`Hi I'm ${this.name}`);
}

let pp1 = new People("Hermoine", 25);
console.log(pp1);
console.log(pp1.hello());
let pp2 = new People("Ron", 25);
console.log(pp2);

// Classes
console.log("----------Classes----------");
class Common {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log(`Hello ${this.name}`);
    }
}

class Student extends Common {
    constructor(name, age, marks) {
        super(name, age);
        this.marks = marks;

    }
}

class Teacher extends Common {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;

    }
}

let st1 = new Student("Draco", 25, 58);
console.log(st1);
let st2 = new Student("Nevile", 26, 55);
console.log(st2);

let t1 = new Teacher("Snape", 40, "Potion");
console.log(t1);
let t2 = new Teacher("Dumbledore", 40, "Dark Art");
console.log(t2);

// Example of Classes using Inheritance 
class Wildanimal { //Parent Class -> base class
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
    characteristics() {
        console.log(`cell structure, movement, consumer habits, and reproduction habits - are the four common characteristics of all animals.`);
    }
}

class Animal extends Wildanimal { //Animal ->child class 
    constructor(name, type, feature) {
        super(name, type);
        this.feature = feature;
    }
}

let a1 = new Animal("Tiger", "carnivore", "Tigers have reddish-orange coats with prominent black stripes, white bellies and white spots on their ears");
console.log(a1);
console.log(a1.characteristics());

let a2 = new Animal("Dog", "omnivores", "The dog is a mammal with sharp teeth, an excellent sense of smell, and a fine sense of hearing. ");
console.log(a2);






