<template lang="html">
  <div>
    <img src="../assets/logo.png">
    <form @submit.prevent="login($event)">
      <input type="text" v-model="username" name="username" placeholder="username" @keydown="resetForm()"/>
      <input type="password" v-model="password" name="password" placeholder="password" @keydown="resetForm()"/>
      <input type="text" v-model="capcha" name="capcha" placeholder="capcha" @keydown="resetForm()"/><img :src="capcha_img" @click="refreshCapcha()"/>
      <button >submit</button>
      <div class="error">{{error_msg}}</div>
    </form>
  </div>
</template>
<script>
import ajax from '@/core/http'
export default {
  data: () => {
    return {
      capcha_img: '',
      username: '',
      password: '',
      capcha: '',
      error_msg:''
    }
  },
  methods: {
    resetForm: function(){
      this.error_msg = '';
    },
    refreshCapcha: function() {
      let self = this;
      ajax.getStream('/api/user/get_captha', { "_": new Date().getTime() }).then(function(response, err) {
        self.capcha_img = self.transBufferToImageCode(response.data);
      })
    },
    login: function(e) {
      let self = this;
      let formdata = new FormData(e.target);
      ajax.post('/api/user/login', formdata).then(function(response, err) {
        if(+response.data.code === 1){
          self.$router.push('room');
        }else{
          self.error_msg = response.data.msg;
        }
      });
    }
  },
  mounted: function() {
    this.refreshCapcha();
  }
}
</script>

<style lang="css">
  .error{ height:2rem;text-align:center;color:red;font-size:.5rem;}
</style>
