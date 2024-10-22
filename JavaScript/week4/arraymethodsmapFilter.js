const numbers = [10,20,30,40]

//for each

numbers.forEach((num)=>{ //does not return anything
    console.log(num)
})

//map

const newNum = numbers.map((num)=>{  //return new array in map 
    return num + 1
})
console.log(newNum);

//filter

const filteredNumber = numbers.filter((num)=> num>20// put in array which satisfy the condtitions
   
)
console.log(filteredNumber)


//reduce

const reduceValue = numbers.reduce((accumulator,cValue)=>{  // the initial value is going in accumulator given 0 and the return result will go to accumulator
   return accumulator + cValue
   
    
},0)

console.log( 'the total is : ' + reduceValue)


//some
//check if the given num is greater than in given array or not// checks the condition
//real life example
const users = [
    { name: 'Alice', roles: ['user', 'editor'] },
    { name: 'Bob', roles: ['user'] },
    { name: 'Charlie', roles: ['admin'] }
  ];
  
  const hasAdmin = users.some(user => user.roles.includes('admin'));
  console.log(hasAdmin); // Logs: true



const result = numbers.some((num)=>{
    console.log(num)
    return num > 35
})
console.log(result)


const roles = ['admin','user','superadmin']

console.log('the user is in roles is  ' + roles.some((role)=>role==='user'))

//find 
console.log('find')
//returns the first elements which satisfiy the conditions if there is no matching it returns undefined // doesnot modify the original array

const findValue = numbers.find((num)=>{
    
    return num > 20
})

console.log(findValue)



//findindex
console.log('findIndex')
//find the index of the elements that satisfiy the conditions

const indexIs = numbers.findIndex((num)=>{
    console.log(num)
    return num>20

})

console.log('The first item index that is greater than 20 is '+indexIs)

