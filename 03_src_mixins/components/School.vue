<template>
  <div>   
    <h2 @click="showName">name:{{ name }}</h2>
    <h2>address:{{ address }}</h2>
  </div>
</template>

<script>
// import {show} from '../show.js'
export default {
  name: "School",
  data() {
    return {
      name: "Shang",
      address: "Beijing",
    };
  },
  // mixins: [show]
  methods: {
        showName() {
            console.log(this.name);
        }
    }
};
</script>
