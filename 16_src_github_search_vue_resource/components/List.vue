<template>
    <div class="row">
      <div v-show="info.users.length" v-for="user in info.users" class="card" :key="user.login">
        <a :href="user.html_url" target="_blank">
          <img :src="user.avatar_url" style="width:100px">
        </a>
        <p class="card-text">{{user.login}}</p>
      </div>
      <h1 v-show="info.isFirst">Welcome</h1>
      <h1 v-show="info.isLoading">Loading...</h1>
      <h1 v-show="info.errMsg!=''">{{info.errMsg}}</h1>
    </div>
</template>


<script>
    export default {
        name: 'List',
        data() {
            return {
                info : {
                    isFirst: true,
                    isLoading: false,
                    errMsg: '',
                    users: [] 
                }                
            }
        },
        mounted(){
            this.$bus.$on('updateInfo', this.receiveUsers)
        },
        methods: {
            receiveUsers(userListObj) {
                console.log("List received users:", userListObj.users)
                this.info = { ...this.info, ...userListObj}
            }
        }
    }
</script>


<style scoped>
  .album {
    min-height: 50rem;
    padding-top: 3rem;
    padding-bottom: 3rem;
    background-color: #f7f7f7;
  }

  .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }

  .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }

  .card-text {
    font-size: 85%;
  }

</style>
