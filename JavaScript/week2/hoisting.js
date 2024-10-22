console.log(x);
// value of x is hoisted only the declaration 
var x = 'This is output';

function name() {
    // console.log(y) -- this works
    var y = ' this is y output'
}


// console.log(y) // value of y is inside the function it cannot get the value of y hence working arise 

console.log(greet2());
function greet2(){
    console.log("Hi Good Morning ");
}





var greeting  = function greet() {
    console.log('Hi good afternoon!');
}

// greeting(); // this will work as it is a function declaration

console.log(greeting());