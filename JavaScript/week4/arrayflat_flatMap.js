//flat
//normalize the complex or nested arrays with specific depth flat(depth)
const arr = [10, 20, [30, [30, [89, 80]]]];

const flat = arr.flat(3);
console.log(flat);

//flatMap
//new array is return

const data = [
  [1, 2],
  [3, 4],
  [5, 6],
];

const incremented = data.flatMap((num) => {
  console.log(num); // num is taking the array [1,2]
  return num.map((x) => {
    //again mapping is run taking 1, 2 from the num
    console.log(x);
    return x + 10; //returning the value
  });
});
console.log(incremented);

// real life example

const guest = [
  ['Anish , Kritina'],
  ['Rahul , Priya'],
  ['Rohan , Anushka']
]

const guestList = guest.flatMap(guest => guest)
console.log(guestList);

// for extracting hobbies

const users = [
  //given array of object
  { name: "John", hobbies: ["reading", "swimming", "coding"] },
  { name: "Jane", hobbies: ["reading", "dancing", "singing"] },
];

const allHobbies = users.flatMap((user) => {
  console.log(user); //each user detail is coming
  return user.hobbies; //return is putting the hobbies in the allHobies flatMap is making an array
});

console.log(allHobbies);
