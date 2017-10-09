<template>
  <header class="center_header">
    <a :href="setLeftHeaderUrl" :class="setLeftHeader" @click="leftHeader"></a>
    <h1>{{pageInfo.headerTitle}}</h1>
    <div :class="searchShow"><input type="text" value="搜索目的地"></div>
    <a :href="setRightHeaderUrl" :class="setRightHeader" :data-count="messageCount" @click="rightHeader">{{pageInfo.right.font}}</a>
  </header>
</template>

<script>
  import {Common} from 'js/base'
  import {mapGetters, mapState} from 'vuex'
  export default {
      computed: {
          setLeftHeader: function () {
              return {
                  'header_left my_setting': this.$store.getters.getPageInfo.left === '',
                  'header_left back': this.$store.getters.getPageInfo.left.className === 'back'
              }
          },
          setRightHeader: function () {
              return {
                  'header_right my_message': this.$store.getters.getPageInfo.right === '',
                  'header_right hide': this.$store.getters.getPageInfo.right.hide === true && this.$store.getters.getPageInfo.right.userFont === undefined,
                  'header_right font': this.$store.getters.getPageInfo.right.userFont === true
              }
          },
          searchShow: function () {
              return {
                  'search hide': this.$store.getters.getPageInfo.type === '',
                  'search': this.$store.getters.getPageInfo.type !== ''
              }
          },
          setLeftHeaderUrl: function () {
              if (this.$store.getters.getPageInfo.left === '') {
                  return '#/setting'
              } else {
                  return 'javascript:void(0)'
              }
          },
          setRightHeaderUrl: function () {
              if (this.$store.getters.getPageInfo.right.userFont === undefined) {
                  return '#/message'
              } else {
                  return 'javascript:void(0)'
              }
          },
          ...mapGetters({
              pageInfo: 'getPageInfo',
              messageCount: 'getMessageCount'
          })
      },
      methods: {
          leftHeader (e) {
              if (e.target.getAttribute('href') === 'javascript:void(0)') {
                  Common.goBack()
              }
          },
          rightHeader (e) {
              if (this.$store.getters.getPageInfo.right.userFont === undefined) {
                  return
              }
              this.$store.commit('SHOW_CHECKBOX')
          }
      }
  }
</script>
