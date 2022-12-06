<template>

  <div class="container">
    <Category />
    <Category />
    <Category />
  </div>
  
</template> 

<script>

import Category from './components/Category'

export default {
  name: "App",
  components: {
    Category
  },
  data() {
    return {
      foods:['hotpot', 'pizza', 'noodle', 'steak'],
      games:['red', 'green', 'dance', 'poker'],
      films:['God Father', 'Expert', 'Square or There', 'Vue']
    }
  }
};
</script>

<style>
  .container {
    display: flex;
    justify-content: space-around;
  }
</style>