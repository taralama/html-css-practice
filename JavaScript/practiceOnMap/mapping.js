const students = [
  { id: 1, firstName: "Anish", lastName: "shrestha", address: "kapan" },
  { id: 2, firstName: "Raj", lastName: "gurung", address: "kapan" },
  { id: 3, firstName: "amir", lastName: "dong", address: "kapan" },
];

const nameList = students.map((todo) => todo.firstName + todo.lastName);
console.log(nameList);

//excluding address and adding fullnames

const newStudents = students.map((s) => [
  { id: s.id, fullName: s.firstName + s.lastName },
]);

console.log(newStudents);

//checking it firstname is starting with capital

const studentNamesWithCapital = students.map((s) => {
  if (s.firstName[0] == s.firstName[0].toUpperCase()) {
    return s.firstName + " " + s.lastName;
  } else {
    return "not name format";
  }
});

console.log(studentNamesWithCapital);

//index match practice // if the index matches then the number will be change or the todo have to be changed

// console.log(todoChanger(1));

//same above but trying to solve using splice

// const stu = [];

// const b = students.splice(4,1,{id:3,firstName:'hero',lastName:'lam',address:'tusal'} );
// stu.push(b)
// console.log(stu)
