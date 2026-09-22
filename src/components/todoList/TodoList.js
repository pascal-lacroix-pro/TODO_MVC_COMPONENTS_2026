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
}
