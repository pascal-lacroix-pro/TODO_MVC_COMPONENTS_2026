import DB from "../../DB";
import Todo from "../todo/Todo";
import getTemplate from "./template";

export default class TodoList {
  constructor(data) {
    DB.setApiURL(data.apiURL);
    this.title = data.title ?? "My TodoList";
    this.domEl = document.querySelector(data.el);
    this.todos = [];
  }
  async loadTodos() {
    const todos = await DB.findAll();
    this.todos = [...todos.map((todo) => new Todo(todo))];
  }
  async render() {
    await this.loadTodos();
    this.domEl.innerHTML = getTemplate(this);
  }

  storeInArray(todo) {
    this.todos.push(new Todo(todo));
  }

  storeInDOM(data) {
    const newTodo = document.createElement("div");
    this.domEl.querySelector(".todo-list").prepend(newTodo);
    newTodo.outerHTML = this.todos
      .filter((todo) => todo.id == data.id)[0]
      .render();
  }

  async store(data) {
    const newTodo = await DB.store({ content: data, completed: false });
    console.table(newTodo);
    this.storeInArray(newTodo);
    this.storeInDOM(newTodo);
  }
}
