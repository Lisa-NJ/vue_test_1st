<template>
  <dir class="todo-container">
    <dir class="todo-wrap">
      <TodoHeader :inputTodo="addTodo" />
      <TodoList :todos="todoList" :swapStatus="swapTodoStatus" :delID="delID" />
      <TodoFooter :allN="allN" :doneN="doneN" :setAllDone="setAll" />
    </dir>
  </dir>
</template> 

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";

export default {
  name: "App",
  components: {
    TodoHeader,
    TodoList,
    TodoFooter,
  },
  data() {
    return {
      todoList: [
        { id: "001", title: "swimming", done: false },
        { id: "002", title: "lunch", done: false },
        { id: "003", title: "reading", done: true },
      ],
    };
  },
  methods: {
    addTodo(todoObj) {
      this.todoList.unshift(todoObj);
    },
    swapTodoStatus(id) {
      this.todoList.forEach((todo) => {
        if (todo.id === id) {
          todo.done = !todo.done;
        }
      });
    },
    delID(id) {
      this.todoList = this.todoList.filter((todo) => todo.id !== id);
    },
    setAll(flg) {
      this.todoList.forEach((todo) => (todo.done = flg));
    },
  },
  computed: {
    allN() {
      return this.todoList.length;
    },
    doneN() {
      // either reduce or filter works well!
      // return this.todoList.filter((todo) => todo.done).length;
      return this.todoList.reduce((pre, todo) => pre + todo.done, 0);
    },
    flg() {
      return this.allN === this.doneN;
    },
  },
};
</script>

<style>
/* base */
.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0,
    1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}

.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
