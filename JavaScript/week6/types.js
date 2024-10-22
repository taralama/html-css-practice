//numbers 
function add(num, num2) {
    return num + num2;
}
console.log(add(5, 0));
//bolean and string
function multiply(num, num2, showResult, phase) {
    var result = num * num2;
    if (showResult === true) {
        console.log(phase + result);
    }
}
multiply(3, 4, true, 'The result is ');
//objects
// const person:{
//     name: string ,
//     age: number ,                not prefered
//     city: string ,
// }
var person = {
    name: 'John',
    age: 30,
    city: 'New York',
};
console.log(person);
// array
var obj = {
    name: 'surendra',
    age: 24,
    hobbies: ['singing', 'dancing']
};
// tuples
//-push is exception
var obj2 = {
    name: 'Anish',
    age: 25,
    hobbies: [2, 'rohan'] //-> only 2 can be stored
};
obj2.hobbies.push('animal');
console.log(obj2);
//nums
//human readable
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
})(Role || (Role = {})); //Admin will be automatically 0 can be manaully added  
console.log(Role.Admin);
//any
//any is like using not typescript
//union
function combine(input1, input2) {
    if (typeof input1 === 'number' && typeof input2 === 'number') { //mostof time this may not used
        return input1 + input2;
    }
    else {
        return input1.toString() + input2.toString();
    }
}
console.log(combine('3', 4));
// function return void
var combined;
combined = function (num) { return console.log('hello'); }; //!!error no parameter in function type
combined = function () { return console.log('hello'); };
