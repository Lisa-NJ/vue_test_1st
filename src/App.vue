<template>
  <dir>
    <TodoHeader :inputTodo="addTodo"/>
    <TodoList :todos="todoList"/>
    <TodoFooter />
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
    TodoFooter
  },
  data(){
    return {
        todoList: [
        {id: "001", title: "swimming", done: false},
        {id: "002", title: "lunch", done: false},
        {id: "003", title: "reading", done: true}
      ]}
  },
  methods:{
    addTodo(todoObj) {
      this.todoList.unshift(todoObj)
    }
  }
};
</script>
