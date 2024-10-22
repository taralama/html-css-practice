// premitive and non premitive or references


let a = 10;
let b = a; // primitive value is copied

a = 20; // changing the value of a 
//checking the value of b if it has changed

console.log(b); //not changed primitive actual value proved


const obj = {
    name: "John",
    age: 30
}

//changing the name of the name of an object

obj.name = 'Tara' 

const obj2 = obj;

//the value of obj2 is copied 

obj2.age = 20;

//checking the value of obj if it has changed

console.log(obj)
 
console.log(obj) // the object name  value is changed to Tara