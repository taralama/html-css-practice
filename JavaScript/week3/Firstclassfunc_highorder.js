// function are treated as variable which can be assigned to another values
//first class means flexibitily and versatility
//return as functions and pass as arguments;
// stored in data structure like arrays and object


//function assigning to another values

const greet = function (name) {
  return `Hello,${name};`;
};

//assigning to another variable
const sayHello = greet; //() is not used in function greet other wise it will be called here greet function is being assigned to sayHello
console.log(sayHello("John")); //Hello,John;

//passing function greet as parameter name fn
const againGreet = (fn, name) => {
  console.log(fn(name));
};

// passing arguments
againGreet(sayHello, "anish");

//returning functions

const add = (a, b) => {
  return function (a, b) {
    return a + b;
  };
};

const sum = add(); //assigning add() to sum variable -- the add is return the function with parameter a and b 
console.log(sum(2, 6)); //8

console.log(add()(10, 20));

// example of highorder function is setTimeout and setTimeinterval

function printIT() {
    
    clearInterval();
}

// setTimeout(printIT, 5000);
// setInterval(() => {
//   console.log("Hello after 4 sec");
  
// }, 2000);



//finding the square of the number

const square = (num) => {
    return num * num;
}



console.log(square(6))






