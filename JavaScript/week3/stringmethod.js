const str = "Hi, Good afternoon!";
const str2 = "Suren";
const fruits = ["Banana", "Apple", "Orange", "Mango", "Grapes"];
// returns the character of index nbr
console.log(str.charAt(5));

//returns lenght of string
console.log(str.length);

//returns the combined str and str2
console.log(str.concat(str2));

//returns boolean if the word is includes or discludes
console.log(str.includes("hi"));

//returns the index of the word
console.log(str.indexOf("d"));

//returns the indexof the last occurance string o is many times in str string and the last occurance index is return
console.log(str.lastIndexOf("o"));

//returns the replace strings the first occurance string o is replaced with 1
console.log(str.replace("o", "1"));

//returns the slice of the string which is indexed (0 is inclue and 5 is disclude)
console.log(str.slice(0, 5));

//returns the array with the split with the given string (',') creates the array of substrings
console.log(str.split(","));

//returns the specified number of characters from a string starting at given index (starting , number of string to include)
console.log(str.substr(7, 8));

//returns the subtring of given indices
console.log(str.substring(7, 12));

//return remove the given start and end white space  from the string
console.log(str.trim());

//return boolean if startswith the given character
console.log(str.startsWith("H"));

//return boolean if endswith the given character
console.log(str.endsWith("!"));

//return the values as repeated  given numbers
console.log(str.repeat(5));

//return the string for a match
console.log(str.match("oo"));

//returns the new array adding or removing the previous array
console.log(fruits.splice(1, 3, "Papaya", "Avocardo", "pears"));
console.log(fruits);

console.log(str.toLowerCase().includes('hi'))


