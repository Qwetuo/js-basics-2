
const dog = {
    name: 'corgi',

    bark() {
        console.log("woof, I'm " + dog.name + "!")
    }
}

console.log(dog.name);
console.log(dog.bark());
console.log(dog);

const person = {
    firstName: 'Min',
    lastName: 'Chew',
    birthYear: 1995,
    
    name() {
        return (this.firstName + " " + this.lastName);
    },

    ageThisYear() {
        return (2018 - Number(this.birthYear))
    }
}

console.log(person.name());
console.log(person.ageThisYear());

var someString = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

console.log(someString.length)

someString.length = 200

console.log(someString.length);

console.log(someString.toLowerCase());

var decimalNumber = 2

console.log(decimalNumber.toFixed(3))

function sum(arg1,arg2) {
    return arg1 + arg2;
}

console.log(sum.name);

console.log(sum.toString());

