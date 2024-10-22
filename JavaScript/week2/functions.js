//arrow functions vs normal functions

// functions can take input as a parameter return as output

// add(50) this will be wrong as it cannot be call before the initialization 
//but the normal functions will not return as error

function square(number){
    return number * number;
}

square(10);
console.log(square(10));


// arrow functions

const add = (number) =>{
    return number + number;
}

add(20)
console.log(add(20));

//normal function supports this

const man = {
    name: 'John',
    age: 30,
    greet : function () {
        console.log(this)
    } 
}

man.greet();

//arrow functions 

const man2 = {
    name: 'cena',
    age: 40,
    greet : () => {
        console.log(this)
    }
}

man2.greet();

// default parameter is always undefined

function ab( a, b ){
    console.log(a, b)
}

ab();

function greet (){
    console.log("hello" +this)
}

greet();



// default parameter

function sum(a,b,c) {
    console.log(c)
    return a+b+c;   
}

console.log(sum(1,2));



