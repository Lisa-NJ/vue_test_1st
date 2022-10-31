<template>
  <div>
    <ul class="todo-main">
      <TodoItem
        v-for="todo in todos"
        :todoObj="todo"
        :swapStatus="swapStatus"
        :delID="delID"
        :key="todo.id"
      />
    </ul>
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";
export default {
  name: "TodoList",
  components: {
    TodoItem,
  },
  props: ["todos", "swapStatus", "delID"],
};
</script>

<style scoped>
/* main */
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
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

