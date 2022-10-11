<template>
  <dir>
    <h1 v-text="msg" ref="title"></h1>
    <button ref="btn" @click="show">click to output DOM</button>
    <School ref="sch" />
  </dir>
</template> 

<script>
import School from "./components/School.vue";

export default {
  name: "App",
  data() {
    return {
      msg: "welcome to Australia",
    };
  },
  methods: {
    show() {
      //let element = document.getElementsByTagName("h1")[0];
      let element = this.$refs.title;
      console.log(this.$refs.title); // DOM element
      console.log(this.$refs.btn); // DOM element
      console.log(this.$refs.sch); // School Component Instance Obj (vc)
    },
  },
  components: {
    School,
  },
};
</script>

<style>
</style>