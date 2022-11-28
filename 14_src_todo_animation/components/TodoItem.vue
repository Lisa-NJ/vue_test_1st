<template>
  <!-- or use transiton-group for TodoList -->
  <transition name="todo" appear>
    <li>
      <label>
        <!-- either 'change' or 'click' works -->
        <input type="checkbox" :checked="todoObj.done" @click="swap(todoObj.id)" />
        <!-- v-model alone can do the job, not recommended: Vue can not detect the prop change -->
        <!-- <input type="checkbox" v-model="todoObj.done" /> -->
        <span v-show="!todoObj.isEdit">{{ todoObj.title }}</span>
        <input v-show="todoObj.isEdit" type="text" :value="todoObj.title" @blur="handleBlur(todoObj, $event)" ref="inputRef">
      </label>
      <button class="btn btn-danger" @click="delMe(todoObj.id)">delete</button>
      <button v-show="!todoObj.isEdit" class="btn btn-edit" @click="editMe(todoObj)">edit</button>
    </li>   
  </transition>

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
    editMe(todo) {
      console.log('editMe', todo.title);
      if(!todo.hasOwnProperty('isEdit')) {
        this.$set(todo, 'isEdit', true)
      } else {
        todo.isEdit = true
      }

      this.$nextTick(function() {
        this.$refs.inputRef.focus()
      })
    },
    handleBlur(todo, e) {
      console.log(todo);
      todo.isEdit = false
      if(!e.target.value.trim()){
        return alert('Title can not be empty!')
      }
      pubsub.publish('updateTodo', {...todo,'title': e.target.value})
      console.log(e.target.value)
    }
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

  .todo-enter-active {
    animation: atguigu 1s linear;
  }

  .todo-leave-active {
    animation: atguigu 1s reverse;
  }

  @keyframes atguigu {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0px);
    }
  }
</style>
