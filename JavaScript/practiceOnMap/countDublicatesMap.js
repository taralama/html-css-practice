const countOccurrences = (numbers) => {
  let obj = {};

  numbers.map((n) => {
    obj[`${n}`] = (obj[`${n}`] || 0) + 1;
  });
  return obj;
};

console.log(countOccurrences([1, 2, 3, 4, 4, 2, 3, 5, 3, 1, 4, 6]));
