<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox">
    </label>
    <span>
      <span> 已完成{{doneN}}</span> / 全部{{allN}}
    </span>
    <button class="btn btn-danger">clear done tasks</button>
  </div>
</template>

<script>
export default {
  name: "TodoHeader",
  data() {
    return {
      doneN: 0,
      allN: 3
    };
  },
};
</script>

<style>
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left:6px;
  margin-top:5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer
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