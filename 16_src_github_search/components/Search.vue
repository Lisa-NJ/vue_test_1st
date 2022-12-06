<template>
    <section class="jumbotron">
        <h3 class="jumbotron-heading">Search Github Users</h3>
        <div>
          <input type="text" placeholder="enter the name you search" v-model="keyWord">
          &nbsp;
          <button @click="searchUsers">Search</button>
        </div>
      </section>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'Search',
        data() {
            return {
                keyWord: ""
            }
        },
        methods: {
            searchUsers() {
                console.log("Search begins...");
                this.$bus.$emit('updateInfo', {isFirst:false, isLoading:true, errMsg:"", users: []})
                console.log("----------");

                axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
                    response => {
                        console.log('Search successful!', response.data.items);
                        this.$bus.$emit('updateInfo', {isLoading:false, errMsg:"", users: response.data.items})
                        console.log("~~~~~~~~~~");
                    },
                    error => {
                        console.log('Search failed', error.message);
                        this.$bus.$emit('updateInfo', {isLoading:false, errMsg:error.message, users: []})
                    }
                )
                
            }
        }
    }
</script>

<style>
</style>