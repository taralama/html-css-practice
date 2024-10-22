//numbers 
function add(num: number,num2 : number): number{
    return num + num2

}

console.log(add(5,0))

//bolean and string

function multiply (num: number , num2: number , showResult: boolean, phase: string){
    const result: number = num * num2
    if(showResult === true){
        console.log(phase + result)
    }
}


multiply(3,4,true,'The result is ') 

//objects

// const person:{
//     name: string ,
//     age: number ,                not prefered
//     city: string ,

// }

const person: object
={
    name: 'John',
    age: 30,
    city: 'New York',
}

console.log(person)



// array

const obj : {
    name: string ,
    age: number ,
    hobbies: string[] //  array explicitly infering
}={
    name: 'surendra',
    age:24,
    hobbies:['singing','dancing']
}


// tuples
//-push is exception

const obj2 :{
    name: string ,
    age: number ,
    hobbies: [number,string]  //->2 is allowed
}={
    name:'Anish',
    age: 25,
    hobbies:[2,'rohan']  //-> only 2 can be stored
}

obj2.hobbies.push('animal')
console.log(obj2)

//nums
//human readable
enum Role {Admin}  //Admin will be automatically 0 can be manaully added  
console.log(Role.Admin)

//any
//any is like using not typescript


//union

function combine(input1: number | string ,input2: number | string){
    if (typeof input1 === 'number' && typeof input2 === 'number' ) { //mostof time this may not used
        return input1 + input2
    }else{
        return input1.toString() + input2.toString()
    }
}

console.log(combine('3',4))

// function return void

let combined : ()=> void
//combined = (num) => console.log('hello') //!!error no parameter in function type
combined = () => console.log('hello') 