const removeDuplicates = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (newArr.includes(arr[i])) {
      //instead of in includes will be better because in (in) when there is no element it will return false as default
      console.log("found duplicate ", arr[i]);
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};
console.log(removeDuplicates([1, 3, 4, 2, 3, 2, 5, 6, 22, 3, 4, 4]));
