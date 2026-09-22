import TodoList from "./components/todoList/TodoList";

new TodoList({
  el: "#app",
  title: "My Amazing TodoList",
  apiURL: "https://6aa7f8559b08676cd32bb8f9.mockapi.io",
}).render();
