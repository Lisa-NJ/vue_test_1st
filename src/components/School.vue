<template>
  <div class="demo">
    <h2>name:{{ name }}</h2>
    <h2 class="guigu">address:{{ address }}</h2>
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

<style lang='less' scoped>
.demo {
  background-color: blanchedalmond;
  .guigu {
    font-size: 40px;
  }
}
</style>
