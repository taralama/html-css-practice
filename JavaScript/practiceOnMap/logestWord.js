const findLongestWord = (str) => {
  const words = str.split(" ");
  let maxLength = 0;
  words.forEach((s) => {
    if (s.length < maxLength) {
      console.log("less value");
    } else {
      maxLength = s.length;
    }
  });
  return maxLength;
};

console.log(findLongestWord("Javascript is awesome "));
