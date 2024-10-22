console.log(Number("0x11"));
const y = "6.4";

const x = 5.4;
const q = parseFloat(y);
console.log(q);
console.log(`Type of q : ${typeof q}`);
console.log(`Type of q : ${typeof String(q)}`);
console.log(`Type of x :${typeof x.toString()}`);

let date = new Date();
console.log(date.getDate());

console.log("0" + null);
console.log(typeof null);

let value1 = NaN;

console.log(typeof NaN)
//converting NaN to Boolean
console.log(Boolean(value1));

console.log(typeof value1);

console.log(Boolean(undefined));

console.log(typeof undefined);

let food = "pizza";

console.log(Boolean(food));
console.log(typeof Number(food));
