<template>
  <div>
    <h1>{{msg}}</h1>
    <School/>
    <Student/>
  </div>
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
      msg: 'How are you!',
    }
  }
};
</script>
