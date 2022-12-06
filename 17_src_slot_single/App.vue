<template>

  <div class="container">
    <Category title="food">
      <img src="https://s3.ax1x.com/2021/01/16/srJ1q0.jpg" alt="">
    </Category>
    <Category title="game" >
      <ul>
        <li v-for="(item, index) in games" :key="index">{{item}}</li>
      </ul>
    </Category>
    <Category title="movie" >
      <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
    </Category>>
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

  img {
    width: 100%;
  }

  video {
    width: 100%;
  }
</style>