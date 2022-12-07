<template>

  <div>
    <Count />
  </div>
  
</template> 

<script>

import Count from './components/Count'

export default {
  name: "App",
  components: {
    Count
  },
  data() {
    return {     
      sum : 0
 
    }
  }
};
</script>

<style>
  button {
    margin: 3px;
  }
</style>