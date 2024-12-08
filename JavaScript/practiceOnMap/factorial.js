const factorial = (num) => {
  if (num == 0) {
    return 1;
  } else {
    console.log(num);
    f = factorial(num - 1) * num;
    return f;
  }
};

console.log(factorial(3));








