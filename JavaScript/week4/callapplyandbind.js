const person = {
  firstName: "Surendra",
  lastName: "Tamang",
  fullName: function () {
    return this.firstName + this.lastName;
  },
};

const person2 = {
  firstName: "Rohan",
  lastName: "Pyatha", 
};
const person3 = {
  firstName: "Anish",
  lastName: "Shrestha",
};

console.log('full nameis '+person.fullName.call(person2));

const newFullname = person.fullName.bind(person2);
console.log(newFullname());

//method borrowing fromthe properties of obj this can be used to another
//using the method of another obj to another

//using call
function fullName() {
  return this.firstName + this.lastName;
}

console.log(fullName.call(person3));

// using bind
// bind create new function can be assign to another value

function fullName(animal1, animal2) {
  console.log(animal1, animal2);
  const msg  = this.firstName + ' hates ' + animal2
  return msg;
}

const fullName2 = fullName.bind(person3, "cow", "dog"); //person3 is setting the value of this //to be used of person3 assigned to another variable the bind creates new function // can also be console ()
console.log(fullName2());

// apply takes the arguments in the form of array

const numbers = [10, 20, 30, 40];

function fullName3(arg1,arg2) {
  console.log(arg1,arg2); // after writing the arguments dont have to specify the paraments
  return this.firstName + this.lastName;
}

console.log("apply result : " + fullName3.apply(person3,numbers)); //in this numbers the argument is epected to be array
