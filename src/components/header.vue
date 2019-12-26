<template>
  <div class='header'>
    <div class="big-header">
      <img src="../assets/img/logo.png" alt="" class="logo">
      <el-tabs v-model="activeIndex" @tab-click="handleClick" class="tagList">
        <el-tab-pane :label="item"  v-for="(item,index) in list" :key="index" :name="index.toString()"></el-tab-pane>
      </el-tabs>
      <div class="langBox">
        <div @click="activeLang = 'zh'" :class="[{'active':activeLang == 'zh'},'lang-zh lang']">
          <span class="lang-top">中</span>
          <img src="../assets/svg/xiegang.svg" alt="" class="lang-mid">
          <span class="lang-btm">CH</span>
        </div>
        <div @click="activeLang = 'en'" :class="[{'active':activeLang == 'en'},'lang-en lang']">
          <span class="lang-top">英</span>
          <img src="../assets/svg/xiegang.svg" alt="" class="lang-mid">
          <span class="lang-btm">EN</span>
        </div>
      </div>
    </div>
    <div class="min-header">
      <img src="../assets/img/logo.png" alt="" class="logo">
      <div class="min-header-right"></div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return { 
        list:['首页','跨境品牌全渠道管理','服务模式','关于我们'],
        activeIndex:'0',
        activeLang:'zh'
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab.index)
      }
    },
  }
</script>
<style lang='less' scoped>
  .header {
    width:100%;
    position: absolute;
    top:0;
    left:0;
    background: transparent;
    z-index:9;
    .big-header {
      width:1200px;
      padding-top:47px;
      margin:0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;
      .logo {
        height:45px;
      }
      .tagList {
        height:45px;
        display: flex;
        align-items: center;
        /deep/ .el-tabs__header {
          margin:0;
          .el-tabs__nav-wrap::after {
            background-color: transparent;
          }
          .el-tabs__item {
            max-width:180px;
            min-width:120px;
            height:45px;
            line-height: 45px;
            color:#FFF;
            box-sizing: border-box;
            &.is-active {
              color:#FFF;
            }
          }
          .el-tabs__active-bar {
            background: #FFF;
          }
        }
        li {
          width:150px;
          height:100%;
          line-height: 45px;
          color:#FFF;
          font-size:14px;
          box-sizing: border-box;
          cursor: pointer;
          &.active {
            border-bottom:1px solid #FFF;
          }
        }
      }
      .langBox {
        position: relative;
        width:90px;
        height:30px;
        border-radius: 20px;
        color:#FFF;
        .lang {
          position: absolute;
          top:0;
          width:50px;
          height:100%;
          background: #959595;
          color:#fdfdfe;
          font-size:12px;
          cursor: pointer;
          transition: all .2s;
          &.active {
            background: #FFF;
            color:#000;
            // transform: scale(1.05);
            z-index:9;
            .lang-top {
              position: absolute;
              top:2px;
              left:11px;
            }
            .lang-mid {
              position: absolute;
              top:8px;
              left:15px;
              width:15px;
            }
            .lang-btm {
              position: absolute;
              top:15px;
              left:23px;
            }
          }
          .lang-top {
            position: absolute;
            top:2px;
            left:8px;
          }
          .lang-mid {
            position: absolute;
            top:8px;
            left:12px;
            width:15px;
          }
          .lang-btm {
            position: absolute;
            top:15px;
            left:20px;
          }
        }
        .lang-zh {
          left:0;
          border-radius: 15px 10px 10px 15px;
        }
        .lang-en {
          left:37px;
          border-radius: 10px 15px 15px 10px;
          .lang-top {
            position: absolute;
            top:2px;
            left:13px;
          }
          .lang-mid {
            position: absolute;
            top:8px;
            left:18px;
            width:15px;
          }
          .lang-btm {
            position: absolute;
            top:15px;
            left:25px;
          }
        }
      }
    }
    .min-header {
      display: none;
    }
  }
  @media screen and (max-width: 750px) { 
    .header {
      .big-header {
        display: none;
      }
      .min-header {
        display: block;
        position: absolute;
        top:0;
        left:0;
        width:100%;
        padding:.4rem .4rem 0;
        font-size:.24rem;
        background: transparent;
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-sizing: border-box;
        .logo {
          height:.4rem;
        }
        &-right {
          width:.44rem;
          height:.38rem;
          background:url(../assets/img/xiala.png) no-repeat center/cover;
        }
      }
    }
  }
</style>