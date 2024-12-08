let sentences =
  "hello world hello everyone everyone everyone tara tara lama lama";
const obj = {};

let word = "";

for (let letter = 0; letter <= sentences.length; letter++) {
  if (sentences[letter] == " " || sentences.length == letter) {
    obj[`${word}`] = (obj[`${word}`] || 0) + 1;
    word = "";
  } else {
    word = word + sentences[letter];
  }
}

console.log(obj);
