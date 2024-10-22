const  fetchData = async() =>{
    try{
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
        console.log(response.ok)
    const result = await response.json();
    console.log(result.name)
    }
    catch(error){
        console.log(error)
    }
}


fetchData();


// using async and await 
// async()=>{
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     console.log(response)
// }



const fetchData2 = async() =>{
    try{
        const promise = new Promise((resolve,reject)=>{
            setTimeout(() => {
                reject('cannot fetch to server')
            }, 5000);
        
        })
        const response2 = await promise;
    
    }
    catch(error){
        console.log(error)
    }
}

fetchData2()