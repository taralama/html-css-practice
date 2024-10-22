if (true) { //block scope
    let x = 10;
    const z = 30;
}

function greet(y) {
    var  x = 10;
    console.log(y)
    console.log(x);
}


greet(50)

function numbers() {
    let a = 40;

}


// console.log(a)
// // console.log(x);
// // console.log(z);
// console.log(y);


// ---------------------scoping--------------

// nested scope


(()=> {
    console.log('this is immediately inlvoked functions they will be run with out calling ') // this should wrap with paranthesis to run 
})();



function one (){
    const value1 = 10
    console.log('this is a function one ')
    function two(){
        const value2 = 20
        console.log(value1)
        console.log('this is a function two ');
    }

    two();
    // console.log(value2)
}

one();

{
    var name = 'anish'
}

if (true) {
    var name2 = 'Tara'
}

function getName() {
    console.log(age) 
    var age = 30
}
getName()

// console.log(age)

console.log(name)
console.log(name2)

