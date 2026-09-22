import TodoList from "./components/todoList/TodoList";

window.todoList = new TodoList({
  el: "#app",
  title: "À FAIRE !",
  apiURL: "https://6aa7f8559b08676cd32bb8f9.mockapi.io",
});
window.todoList.render();
