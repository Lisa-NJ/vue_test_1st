<template>
  <div>
    <button @click="isShow=!isShow">Show / Hide</button>
    <transition name="hello" appear>
      <h1 v-show="isShow">show something</h1>
    </transition>
    
  </div>
</template>

<script>
export default {
  name: "Test2",
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

  .hello-enter, .hello-leave-to {
    transform: translateX(-100%);
  }

  .hello-enter-active, .hello-leave-active {
    transition: 0.5s linear;
  }

  .hello-enter-to, .hello-leave {
    transform: translateX(0);
  }

</style>