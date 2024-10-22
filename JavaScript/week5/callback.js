function greet (callback){ 
    console.log('first ') //firstly display this
    let greeting = 'Hi' 
    let name = "Surendra"
    console.log(callback)
    callback(greeting,name)  //go down to the callback
    console.log('third ')
    
}



greet(function (greeting,name){  // greet is called first and goes up
    console.log('secound ')
    console.log(greeting + ' '+ name)
})

//first the greet function is run and after its completion the anoymous function is run


function addNum (callback){
    let num1 = 5;
    let num2 = 5
    setTimeout(()=>{
        callback(num1,num2)
    },3000)
}

addNum((num1,num2)=>{
    console.log(num1 + num2);
})