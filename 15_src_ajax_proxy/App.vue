<template>
  <dir>
    <button @click="getStudents">students</button>
    <button @click="getCars">cars</button>
  </dir>
</template> 

<script>
import axios from "axios";

export default {
  name: "App",

  methods: {
    getStudents() {
      axios.get("http://localhost:8080/stu/students").then(
        (response) => {
          console.log("success", response.data);
        },
        (error) => {
          console.log("fail", error.message);
        }
      );
    },
    getCars() {
      axios.get("http://localhost:8080/car/cars").then(
        (response) => {
          console.log("success", response.data);
        },
        (error) => {
          console.log("fail", error.message);
        }
      );
    },
  },
};
</script>
