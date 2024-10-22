const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true; // Simulate an operation's outcome
    if (success) {
      resolve("Operation succeeded!"); // Call resolve on success
    } else {
      reject("Operation failed!"); // Call reject on failure
    }
  }, 2000); // The operation happens after a 1-second delay
});

myPromise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });

fetch("https://jsonplaceholder.typicode.com/posts15")
  .then((actualData) => {
    // console.log(actualData)
    if (!actualData.ok) {
      throw new Error("Error fetching data");
    }

    return actualData.json();
  })
  .then((jsonData) => {
    console.log(jsonData);
  })
  .catch((error) => {
    console.log(error);
  });


  //fetching the pokemon data


fetch('https://pokeapi.co/api/v2/pokemon/')
  .then((data)=>{
    console.log(data.ok)
    if (!data.ok) {
        throw new Error("error in fetching data");
    }
    return data.json();
  })
  .then((data)=>{
    console.log(data)
  })

//promisifying the setTimeout

const p = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("resolved");
    },3000)

    if(true){
        // reject("rejected")
    }
})

p.then((data)=>{
    console.log(data)
}).catch((error)=>{
   console.log(error)
    
})


// promise all
let response ;

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then((data)=>{
    
    return data.json();
  })
  .then((actualData)=>{
    response = actualData
    console.log(response)
    
  })


  const promise1 = Promise.resolve(3)
  const promise2  = 42
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(reject,100,'foo')
  })


  Promise.all([promise1,promise2,promise3]).then((values)=>{
    console.log(values)
    return values
  }).catch(( error)=>{
    console.log('the error is' , error)
  })
