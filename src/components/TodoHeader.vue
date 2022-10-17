<template>
  <div >
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
