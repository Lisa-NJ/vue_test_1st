<template>
  <div class="demo">   
    <h2 @click="showName">name:{{ name }}</h2>
    <h2>age:{{ age }}</h2>
  </div>
</template>

<script>
// import {show} from '../show.js'
export default {
  name: "Student",
  data() {
    return {
      name: "Tom",
      age: 15,
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
