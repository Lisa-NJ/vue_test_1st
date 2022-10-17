<template>
  <div>
    <ul class="todo-main">
    
        <TodoItem v-for="todo in todos" :title="todo.title" :done="todo.done" :key="todo.id"/>
    
           
    </ul>
    
  </div>
</template>

<script>

import TodoItem from "./TodoItem.vue"
export default {
  name: "TodoList",
  components: {
    TodoItem
  },
  props:["todos"]
};
</script>

<style scoped>
/* main */
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}

</style>

