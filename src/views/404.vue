<template>
  <div class='index'>
    <p class="header"></p>
    <p>页面不存在</p>
  </div>
</template>
<script>
  export default {
    data() {
      return { }
    },
    methods: {
    },
  }
</script>
<style lang='less' scoped>
  .index {
    min-height: calc(100vh - 450px);
    background: #FFF;
    box-sizing: border-box;
    .header {
      height:100px;
      background: #000;
    }
    p {
      font-size:20px;
      text-align: center;
    }
  }
</style>