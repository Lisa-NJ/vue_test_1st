<template>

  <div class="container">
    <Category title="food">
      <img slot="center" src="https://s3.ax1x.com/2021/01/16/srJ1q0.jpg" alt="">
      <a slot="footer" href="https://baidu.com">more</a>
    </Category>
    <Category title="game" >
      <ul slot="center">
        <li v-for="(item, index) in games" :key="index">{{item}}</li>        
      </ul>
      <div class="foot" slot="footer" >
        <a href="https://baidu.com">single</a>
        <a href="https://baidu.com">multiple</a>
      </div>
    </Category>
    <Category title="movie" >
      <video slot="center" controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
      <template v-slot:footer>
        <div class="foot" >
          <a href="https://baidu.com">classic</a>
          <a href="https://baidu.com">hot</a>
          <a href="https://baidu.com">recommend</a>
        </div>
        <h4>Welcome to the movies!</h4>
      </template>
      
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

  .foot {
    display: flex;
    justify-content: space-around;
  }
 
  h4 {
    text-align: center;
  }
</style>