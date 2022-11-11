<template>
  <div class="demo">
    <h2>name:{{ name }}</h2>
    <h2>age:{{ age }}</h2>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: "tom",
      age: 15,
    };
  },
};
</script>

<style scoped>
.demo {
  background-color: skyblue;
}
</style>
