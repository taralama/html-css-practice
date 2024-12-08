const evenAdder = (arr) => {
  const evens = arr.filter((e) => e % 2 == 0);
  let reduceTotal = evens.reduce((a, c) => {
    return a + c;
  }, 0);
  console.log("reducedTodal", reduceTotal);
  return total;
};

console.log(evenAdder([2, 3, 4, 2, 5, 6, 4, 5, 3, 2, 1]));
