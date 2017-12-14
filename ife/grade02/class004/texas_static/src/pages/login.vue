<template lang="html">
  <div>
    <img src="../assets/logo.png">
    <form @submit.prevent="login($event)">
      <input type="text" v-model="username" name="username" placeholder="username"/>
      <input type="password" v-model="password" name="password" placeholder="password"/>
      <input type="text" v-model="capcha" name="capcha" placeholder="capcha"/><img :src="capcha_img" @click="refreshCapcha()"/>
      <button >submit</button>
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
      capcha: ''
    }
  },
  methods: {
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
        self.$router.push('room');
      });
    }
  },
  mounted: function() {
    this.refreshCapcha();
  }
}
</script>

<style lang="css">
</style>
