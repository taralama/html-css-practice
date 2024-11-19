// const name2 : Array<string> = []


// const promise : Promise<string> = new Promise((resolve,reject)=>{ //this is yelding that the promise will be string which is generic thype
//     setTimeout(() => {
//         resolve('this is the string')
//     })
// })

// promise.then(data =>{
//     data.toUpperCase()
//     console.log(data)
// })


//creating own generic

//why is generic use
//1. type safety
//2. reusability
//knows about the data type with out loosing the data type



// function merge<T, U>(objA: T, objB: U){
//     return Object.assign({},objA,objB);
// }

// const mergedObj = merge({name:'max',hobbies:['sdkf']},{age:30})



// function genericFunc <T> (para: T):T{
//     return para

// }

// console.log(genericFunc<number>(10));
// genericFunc<string>('10')
// genericFunc<boolean>(true)


// working with constraints
// making the generic accepts the data types with the generics

// using the extend



//using generic fetching the data 


const fetchData =async<T> (url:string): Promise<T> =>{
    const response = await fetch(url)
    const res = await response.json();
    return res


}
    

interface User{
    id:number
    name: string
    username: string
}

interface Post {
    title: string
    body: string
}

(async () => {
    const users = await  fetchData <User[]>("https://jsonplaceholder.typicode.com/users");
    console.log('user', users[0].name)
})();
(async () => {
    const users = await  fetchData <Post[]>("https://jsonplaceholder.typicode.com/posts");
    console.log('user', users[0].body)
})();




const fetchDataWithConstraint = async <T extends { id: number }>(data: T): Promise<T> => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(data), 1000); // Simulate a delay
    });
}

interface Product {
    id: number;
    name: string;
    price: number;
}

interface Order {
    id: number;
    productName: string;
    quantity: number;
}

// Mock local data for products and orders
const productData: Product = { id: 1, name: 'Laptop', price: 1500 };
const orderData: Order = { id: 101, productName: 'Laptop', quantity: 2 };

// Fetching product data using the generic function with constraints
const product = fetchDataWithConstraint<Product>(productData);

product.then(data => {
    console.log(`Product ID: ${data.id}`);
    console.log(`Product Name: ${data.name}`);
    console.log(`Product Price: $${data.price}`);
}).catch(error => {
    console.error("Error fetching product data:", error);
});



//this function will accept the array of any type with out loosing the data type
function loggingIdentity <T> (arg: Array <T>): Array <T>{

    console.log(arg.length)
    return arg
}

loggingIdentity(['hello',"good afternoon"])
loggingIdentity([98,980])  // the data this will return is number of array




