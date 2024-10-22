// able to vote or not

function votingtest() {
  if (false && true) {
    //as soon as false the first condition is the operation is false
    console.log("you are eligible for voting");
  } else {
    console.log("you not are eligible for voting");
  }
}

votingtest();

function votingTest2() {
  if (true || false) {
    console.log("you are eligible for voting");
  } else {
    console.log("you are not eligible for voting");
  }
}

votingTest2();

a = 0 ?? 20;
b = 0 || 10;
console.log(a, b);
