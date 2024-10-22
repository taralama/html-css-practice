// looping objects object key , values and entries

const obj = {
  name: "John",
  age: 30,
  city: "New York",
};



console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

console.log(typeof Object.values(obj));

for (let prop of Object.keys(obj)) {
  console.log(prop);
}

for (const [key, value] of Object.entries(obj)) {
  console.log(`${key},${value}`);
}
