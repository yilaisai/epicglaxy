<template>
  <div class='footer'>
    <div class="top">
      <div class="innnerBox">
        <div class="top-left scroll">
          <h5><span>中国</span></h5>
          <p>联系电话：0755-86575084</p>
          <p>联系地址：广东省深圳市南山区凯达尔集团中心大厦A座19楼</p>
        </div>
        <div class="top-right scroll">
          <h5><span>悉尼</span></h5>
          <p>联系电话：02-8542-1012</p>
          <p>联系地址：2304/ 66 goulburn st，sydney，nsw</p>
        </div>
      </div>
    </div>
    <div class="btm">备案号：粤xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</div>
  </div>
</template>
<script>
  export default {
    data() {
      return { }
    },
    mounted() {
      this.$ScrollReveal().reveal('.scroll',this.$store.state.ScrollConfig)
    },
    methods: {
    },
  }
</script>
<style lang='less' scoped>
  .footer {
    width:100%;
    height:450px;
    .top {
      height:362px;
      background: #192B4B;
      font-family: SourceHanSansCN-Regular;
      text-align: left;
      color:#FFF;
      .innnerBox {
        width:1200px;
        margin:0 auto;
        padding-top:124px;
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
        h5 {
          margin-bottom:15px;
          span {
            display: inline-block;
            padding-bottom:5px;
            font-size:17px;
            border-bottom:1px solid #FFF;
          }
        }
        p {
          margin-bottom:15px;
          font-size:15px;
        }
      }
    }
    .btm {
      height:88px;
      line-height: 88px;
      background: #000001;
      color:#999999;
      font-size:16px;
    }
  }
</style>