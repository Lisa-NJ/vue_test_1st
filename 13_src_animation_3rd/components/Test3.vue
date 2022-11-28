<template>
  <div>
    <button @click="isShow=!isShow">Show / Hide</button>
    <transition-group
      appear
      name="animate__animated animate__bounce" 
      enter-active-class="animate__swing"
      leave-active-class="animate__backOutUp"
    >
      <h1 v-show="!isShow" key="1">show something</h1>
      <h1 v-show="isShow" key="2">show some other thing</h1>
    </transition-group>
    
  </div>
</template>

<script>
  import 'animate.css'
  export default {
    name: "Test3",
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