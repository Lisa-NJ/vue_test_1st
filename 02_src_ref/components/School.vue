<template>
  <div class="demo">
    <h2>name:{{ name }}</h2>
    <h2>address:{{ address }}</h2>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name: "Shang",
      address: "Beijing",
    };
  },
};
</script>

<style>
.demo {
  background-color: orange;
}
</style>