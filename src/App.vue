<template>
  <div id="app">
    <Header></Header>
    <router-view/>
  </div>
</template>
<script>
  import Footer from '@/components/footer'
  import Header from '@/components/header'
  export default {
    components:{
      Header,
    }
  }
</script>
<style lang="less">
@import "./common/less/base.less";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
