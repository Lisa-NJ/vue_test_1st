<template>
  <div>
    <button @click="isShow=!isShow">Show / Hide</button>
   <h1 v-show="isShow" class="come">show something</h1>
  </div>
</template>

<script>
export default {
  name: "Test",
  data() {
    return {
      isShow: true
    }
  }
};
</script>

<style>
  h1{
    background-color: orange;
  }

  .come {
    animation: atguigu 1s linear;
  }

  .go {
    animation: atguigu 1s reverse;
  }

  @keyframes atguigu {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0px);
    }
  }
</style>