<template>
  <dir>
    <School/>
    <hr>
    <Student/>
  </dir>
</template> 

<script>
import School from "./components/School.vue";
import Student from "./components/Student.vue";

export default {
  name: "App",
  components: {
    School,
    Student
  },
};
</script>
