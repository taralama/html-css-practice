const Todos = [
  { id: 1, firstName: "Anish", lastName: "shrestha", address: "kapan" },
  { id: 2, firstName: "Raj", lastName: "gurung", address: "kapan" },
  { id: 3, firstName: "amir", lastName: "dong", address: "kapan" },
];


const newTodo = Todos.filter((data)=> data.id<2)
console.log(newTodo);