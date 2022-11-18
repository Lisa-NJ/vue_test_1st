<template>
  <div class="todo-footer" v-show="allN > 0">
    <label>
      <input type="checkbox" v-model="isAll" />
    </label>
    <span>
      <span> done{{ doneN }}</span> / total{{ allN }}
    </span>
    <button class="btn btn-danger" @click="handleClearDone">
      clear done tasks
    </button>
  </div>
</template>

<script>
export default {
  name: "TodoFooter",
  props: ["todos"],
  computed: {
    doneN() {
      return this.todos.filter((todo) => todo.done).length;
    },
    allN() {
      return this.todos.length;
    },
    isAll: {
      get() {
        return this.allN === this.doneN;
      },
      set(flg) {
        this.$emit("setAllDone", flg);
      },
    },
  },
  methods: {
    handleClearDone() {
      this.$emit("clearDone");
    },
  },
};
</script>

<style>
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>