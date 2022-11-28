<template>
  <dir class="todo-container">
    <dir class="todo-wrap">
      <TodoHeader @inputItem="addTodo" />
      <TodoList :todos="todoList"/>
      <TodoFooter
        :todos="todoList"
        @setAllDone="setAll"
        @clearDone="clearDone"
      />
    </dir>
  </dir>
</template> 

<script>

import pubsub from 'pubsub-js'

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
      todoList: JSON.parse(localStorage.getItem("todos")) || [],
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
    updateTitle(_, todoRec) {
      console.log(`App receives: ${todoRec.id} + ${todoRec.title}`);
      this.todoList.forEach((todo) => {
        if (todo.id === todoRec.id) {
          console.log(`todo.tile: ${todo.title} --> ${todoRec.title}`);
          todo.title = todoRec.title;          
        }
      });
    },
    delID(_, id) {
      console.log('delete ID', id);
      this.todoList = this.todoList.filter((todo) => todo.id !== id);
    },
    setAll(flg) {
      this.todoList.forEach((todo) => (todo.done = flg));
    },
    clearDone() {
      this.todoList = this.todoList.filter((todo) => !todo.done);
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
  watch: {
    todoList: {
      deep: true,
      handler(value) {
        localStorage.setItem("todos", JSON.stringify(value));
      },
    },
  },
  mounted() {
    // this.$bus1.$on('swapTodoStatus', this.swapTodoStatus)
    // this.$bus1.$on('delID', this.delID)   
    this.msgId = pubsub.subscribe('delTodo', this.delID) 
    this.msgIdUpdate = pubsub.subscribe('updateTodo', this.updateTitle) 
  },
  beforeDestroy() {
    // this.$bus1.$off('swapTodoStatus')
    // this.$bus1.$off('delID')
    pubsub.unsubscribe(this.msgId);
    pubsub.unsubscribe(this.msgIdUpdate);
  }
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

.btn-edit {
  color: #fff;
  background-color: skyblue;
  border: 1px solid rgb(58, 100, 117);
  margin-right: 5px;
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
