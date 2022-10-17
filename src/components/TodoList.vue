<template>
  <div>
    <TodoItem v-for="todo in todos" :title="todo.title" :done="todo.done" :key="todo.id"/>
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

