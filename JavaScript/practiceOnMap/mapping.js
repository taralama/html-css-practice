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

 

console.log(todoChanger(1));

//same above but trying to solve using splice

for (const a of students) {
    if (a.id ==3){
        
        students.splice(3,1,{id:3})
        console.log(students)

    }
}
