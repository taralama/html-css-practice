const todos = [
  { id: 1, description: "wake up ", remarks: "null" },
  {
    id: 2,
    description: "walk the dog ",
    remarks: null,
  },
];

function todoModifier(id) {
  const name = todos.map((todo) => {
    return todo.id == id ? { ...todo, description: "name" } : todo;
  });
  return name;
}

console.log(todoModifier(1));
