<template>
  <div class="list_bottom"><span class="text">{{loadingText}}</span></div>
</template>
<script>
export default {
    data () {
        return {
            loadingText: '数据加载中...',
            finishText: '没有更多数据了',
            errorText: '出错了，请点击重试'
        }
    }
}
</script>
