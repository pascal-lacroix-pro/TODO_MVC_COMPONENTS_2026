export default function getTemplate(todoList) {
  return `
      <h2>${todoList.title} - ${todoList.todos.length}</h2>
      <ul>
      ${todoList.todos.map((todo) => todo.render()).join("")}
      </ul>
    `;
}
