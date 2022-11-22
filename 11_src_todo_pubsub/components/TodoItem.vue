<template>
  <li>
    <label>
      <!-- either 'change' or 'click' works -->
      <input type="checkbox" :checked="todoObj.done" @click="swap(todoObj.id)" />
      <!-- v-model alone can do the job, not recommended: Vue can not detect the prop change -->
      <!-- <input type="checkbox" v-model="todoObj.done" /> -->
      <span>{{ todoObj.title }}</span>
    </label>
    <button class="btn btn-danger" @click="delMe(todoObj.id)">delete</button>
  </li>
</template>

<script>
import pubsub from 'pubsub-js'

export default {
  name: "TodoItem",
  props: ["todoObj"],
  methods: {
    swap(id) {
      this.$bus1.$emit('swapTodoStatus', id);
    },
    delMe(id) {
      if (confirm("delete this item?"+id)) {
        // this.$bus1.$emit('delID', id);
        pubsub.publish('delTodo', id)
      }
    },
  },
};
</script>

<style scoped>
/* item */
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #ddd;
}

li:hover button {
  display: block;
}
</style>
