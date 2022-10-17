<template>
  <div >
    <input type="text" v-model="title" @click.enter="add">
  </div>
</template>

<script>

import {nanoid} from 'nanoid'
export default {
  name: "TodoHeader",
  props: ["addTodo"],
  data() {
    return {
      title: ""
    }
  },
  methods: {
    add() {
      if(!this.title) return
      console.log(this.title);
      this.addTodo({
        id: nanoid(),
        title: this.title,
        done: false
      })
    }
  }
};
</script>
