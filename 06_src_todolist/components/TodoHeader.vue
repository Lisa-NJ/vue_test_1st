<template>
  <div class="todo-header">
    <input type="text" v-model="title" @keyup.enter="add">
  </div>
</template>

<script>

import {nanoid} from 'nanoid'
export default {
  name: "TodoHeader",
  props: ["inputTodo"],
  data() {
    return {
      title: ""
    }
  },
  methods: {
    add() {
      if(!this.title) return
      console.log(this.title);
      this.inputTodo({
        id: nanoid(),
        title: this.title,
        done: false
      })
    }
  }
};
</script>

<style scoped>

/* header */
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px rgba(0,0,0,0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
</style>