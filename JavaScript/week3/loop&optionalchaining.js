// this is the list of number iteratable means( doryauna milne )

let nums = [10, 20, 30, 40, 50]; // array as iteratable numbers

for (let num of nums) {
  // num will take each number from the nums as num
  console.log(num);
}

//String with the iterable objects
let strs = "Hi goodafternoon!";

for (let str of strs) {
  console.log(str);

}

// adding number

let string = '12345'

for(let str of string){
  let actualNum = Number(str)
  

   
   
}




// --------------------------------------------optional chaining

const person = {
  name: "jhon",
  age: 25,
  maal: null,
  address: {
    district: "Kathmandu",
    province: "bagmati",
  },
  occupation: "software developer",
};

console.log(person?.address?.province);
console.log(person.mall?.name)
// console.log(person.maal.name);


/// trying to access the properties of null or undefined will throw an error

let user = null;
const res = {
  data: undefined,
};
console.log(res?.data?.age, "khatra");
// console.log(user.name)


const fetchData = async()=>{
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/')
    const data = await response.json()
    console.log(data.previous?.data)
}

fetchData();