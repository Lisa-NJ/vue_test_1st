<template>
  <div>
    <input type="checkbox">
    <span>已完成{{doneN}} / 全部{{allN}}</span>
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

