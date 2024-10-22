const agegroup  = [10,20,30,40,50];

// console.log(agegroup)
// Output: [10, 20, 30, 40, 50]

//destructuring array
const [a , b] = agegroup;
console.log(a,b)

console.log(agegroup);


console.log(a)


const obj = {
    name: 'John',
    age: 30,
    city: 'New York',

}

const { name , age ,city} = obj

console.log(name, age, city)

// can be used for spreading the parameter of the function

//spread operator

const nums = [1,2,3]

function volumn(length,breath,height)  { // defining paramenters 
    return  length * breath * height

}

console.log(...nums) //passing arguments
console.log('volume of cuboid : '+volumn(...nums))

//rest parameters

const numbers = [10,20,30,40,50,60,70,80,90,100];


function multiply(a,b,...remains){
    console.log(...remains)
    console.log(a)
    console.log(b)

}



multiply(...numbers);

// -----------------------------------------------------


// spread

function subtract(...[a,b,c]) {
    console.log(a);
    console.log(b);
    console.log(c); // this will be undefined no argument is passeed
    return a-b;
}

console.log(subtract(10,20,30))
