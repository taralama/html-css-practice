let sentences =
  "hello world hello everyone everyone everyone tara tara lama lama";
const obj = {};

let word = "";

// const list = Object.keys(obj);
// const alreadyInWord = (word) => {
//   if (word in list) {
//     console.log(list);
//     return 1;
//   } else {
//     list.push(word);
//     return 2;
//   }
// };

for (let letter = 0; letter <= sentences.length; letter++) {
  if (sentences[letter] == " " || sentences.length == letter) {
    obj[`${word}`] = (obj[`${word}`] || 0) + 1;
    word = "";
  } else {
    word = word + sentences[letter];
  }
}

console.log(obj);
