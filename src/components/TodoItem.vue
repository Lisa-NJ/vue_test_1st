<template>
  <div >
    <input type="checkbox" :checked="done">
    <span>{{title}}</span>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["title", "done"]
};
</script>

<style scoped>
</style>
