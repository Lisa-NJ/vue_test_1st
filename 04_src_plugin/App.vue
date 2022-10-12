<template>
  <dir>
    <h2>{{ msg | upperCase }}</h2>
    <School />
    <hr />
    <Student />
    <input type="text" v-fbind:value="msg" />
  </dir>
</template> 

<script>
import School from "./components/School.vue";
import Student from "./components/Student.vue";

export default {
  name: "App",
  components: {
    School,
    Student,
  },
  data() {
    return {
      msg: "input something",
    };
  },
};
</script>
