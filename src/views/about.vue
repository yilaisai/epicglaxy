<template>
  <div class="about-page">

      <!-- 关于我们 -->
      <div class="box1">
          <div class="innerBox">
                <h5 class="title scroll">关于我们</h5>
                <p class="scroll">
                    <span>企业简介</span>
                    <span>发展历程</span>
                    <span>企业文化</span>
                    <span>招贤纳士</span>
                    <span>联系方式</span>
                </p>
          </div>
      </div>

      <!-- 企业简介 -->
      <div class="box2">
          <div class="innerBox">
              <h5 class="title">企业简介</h5>
              <p class="tips">总部设在深圳，在悉尼、香港、上海和洛杉矶有分公司的大型跨境贸易综合服务商。<br/>
               通过跨境贸易互联网技术和整合跨境供应链上下游资源，为国内外各大品牌商和经销商提供大宗商品交易、跨境物流通关、品牌孵化和代运营、渠道与平台对接及销售等品牌全渠道管理。可在全球范围内调度商品进入中国，中国优质商品出口海外，打造从源头商家到消费者的全球性供销网络，实现品牌、渠道、平台三方的强绑定关系，实现共赢。</p>
                <img src="../assets/img/about_img1.png" alt="">
          </div>
      </div>

      <!-- 公司历程 -->
      <div class="box3">
          <div class="innerBox">
              <img src="../assets/img/about_img2.png" alt="">
              <div class="left1 left">
                  <h5>2017年3月公司成立</h5>
                  <p>由拥有15年中澳跨境贸易经验和资源的团队组建。</p>
              </div>
              <div class="left2 left">
                  <h5>2018年10月</h5>
                  <p>完成阿里系、唯品会、云集等国内大型平台的合作洽谈，成为其部分品牌的直采供应商。</p>
              </div>
              <div class="left3 left">
                  <h5>2019年3月</h5>
                  <p>在海外拥有30多家社区门店和4家连锁超市达成合作，中国品牌直达海外社区门店。</p>
              </div>
              <div class="left4 left">
                  <h5>2019年7月</h5>
                  <p>璨宇国际邀请了投资人和合作方召开全员年中大会，对过去一年做了回顾和总结，并公布了未来的目标和发展规划。</p>
              </div>
              <div class="right1 right">
                  <h5>2018年8月</h5>
                  <p>公司正式更名为璨宇。</p>
              </div>
              <div class="right2 right">
                  <h5>2018年11月</h5>
                  <p>双十一期间全网销售达到6000万元人民币。</p>
              </div>
              <div class="right3 right">
                  <h5>2019年05月</h5>
                  <p>接入数字化清关，bbc商品最快7天即可从海外直达中国消费者手中</p>
              </div>
          </div>
      </div>

      <!-- 企业文化 -->
      <div class="box4">
      </div>

      <!-- 招贤纳士 -->
      <div class="box5">
          <div class="innerBox">
              <h5 class="title">招贤纳士</h5>
              <div class="jobBox">
                <div class="top"></div>
                <div class="bottom"></div>
                <div class="bg-box"></div>
                <ul class="tab">
                    <li v-for="(item,index) in jobList" :key="index" :class="{'active':activeJob == index}" @click="activeJob = index">{{item}}</li>
                </ul>
              </div>
          </div>
      </div>

      <!-- 联系方式 -->
      <div class="box6">
            <h5 class="title">联系方式</h5>
            <img src="../assets/img/about_bg3.png" alt="">
      </div>

      <!-- 底部 -->
      <Footer></Footer>
  </div>
</template>

<script>
    import Footer from '@/components/footer'
    export default {
        data() {
            return {
                jobList:['BD经理','采购(一般贸易)','财务主管','自媒体运营'],
                activeJob:0
            }
        },
        mounted() {
            this.$ScrollReveal().reveal('.scroll',this.$store.state.ScrollConfig)
        },
        components:{
            Footer
        }
    }
</script>

<style lang="less" scoped>
    .about-page {
        width:100%;
        background: #FFF;
        .box1 {
            width:100%;
            height:612px;
            background: url('../assets/img/about_bg1.png') center/cover no-repeat;
            .innerBox {
                width:1200px;
                margin:0 auto;
                padding-top:270px;
                color:#FFF;
                .title {
                    margin-bottom:30px;
                    font-size:50px;
                    font-family: PingFang-SC-Bold;
                    font-weight: bold;
                }
                .tips {
                    font-size:21px;
                    font-family: PingFang-SC-Regular;
                }
            }
        }
        .box2 {
            width:100%;
            padding:120px 0 200px;
            .innerBox {
                width:1200px;
                margin:0 auto;
                .title {
                    margin-bottom:33px;
                    font-family: SourceHanSansCN-Bold;
                    font-weight: bold;
                    font-size:35px;
                    color:#272727;
                }   
                .tips {
                    width:1000px;
                    margin:0 auto 90px; 
                    color:#818282;
                    font-family: PingFang-SC-Medium;
                    font-size:17px;
                    line-height: 30px;
                }
                img {
                    width:848px;
                    height:564px;
                }
            }
        }
        .box3 {
            position: relative;
            width:100%;
            padding:125px 0 150px;
            background:linear-gradient(0deg,rgba(184,208,244,.58) 0%,rgba(255,255,255,.58) 100%);
            .innerBox {
                position: relative;
                width:1200px;
                // height:745px;
                margin: 0 auto;
                img {
                    width:431px;
                    height:745px;
                }
                div {
                    position: absolute;
                    width:380px;
                    h5 {
                        color:#010000;
                        font-size:23px;
                        font-weight: PingFang-SC-Bold;
                        font-weight: bold;
                    }
                    p {
                        color:#323232;
                        font-size:17px;
                        font-family: PingFang-SC-Medium;
                    }
                }
                .left {
                    text-align: right;
                }
                .right {
                    text-align: left;
                }
                .left1 {
                    top:40px;
                    left:0;
                }
                .left2 {
                    top:220px;
                    left:0;
                }
                .left3 {
                    top:420px;
                    left:0;
                }
                .left4 {
                    top:600px;
                    left:0;
                }
                .right1 {
                    top:140px;
                    right:0;
                }
                .right2 {
                    top:320px;
                    right:0;
                }
                .right3 {
                    top:440px;
                    right:0;
                }
            }
        }
        .box4 {
            position: relative;
            top:-32px;
            width:100%;
            height:950px;
            background: url('../assets/img/about_bg2.png') center/cover no-repeat;
            z-index:2;
        }
        .box5 {
            width:100%;
            padding-top:160px;
            background: linear-gradient(0deg,rgba(184,208,244,.58) 0%,rgba(255,255,255,.58) 100%);
            .innerBox {
                width:1200px;
                margin:0 auto;
                .title {
                    margin-bottom:100px;
                    font-size:35px;
                    font-family: SourceHanSansCN-Bold;
                    font-weight: bold;
                    color:#272727;
                }
                .jobBox {
                    position: relative;
                    width:870px;
                    height:540px;
                    left:100px;
                    margin:0 auto;
                    z-index:1;
                    .top {
                        width:100%;
                        height:300px;
                        border-top-right-radius: 10px;
                        border-top-left-radius: 10px;
                        background: #FFF;
                    }
                    .bottom {
                        width:100%;
                        height:240px;
                        border-bottom-left-radius: 10px;
                        border-bottom-right-radius: 10px;
                        background: #FBFBFB;
                    }
                    .bg-box {
                        position: absolute;
                        top:10px;
                        left:10px;
                        width:100%;
                        height:100%;
                        background: #B7D8FF;
                        border-radius: 10px;
                        z-index:-1;
                    }
                    .tab {
                        position: absolute;
                        top:0;
                        left:-160px;
                        width:200px;
                        display: flex;
                        flex-direction: column;
                        align-items: flex-end;
                        li {
                            width:170px;
                            height:58px;
                            line-height: 58px;
                            margin-bottom:10px;
                            background: #FFF;
                            box-shadow: 0 5px 5px rgba(0,0,0,.15);
                            color:#707275;
                            font-size:22px;
                            font-family: PingFang-SC-Medium;
                            transition: all  .5s;
                            cursor: pointer;
                            &.active {
                                background: #D3E7FF;
                                width:185px;
                                color:#111D32;
                            }   
                        }
                    }
                }
            }
        }
        .box6 {
            width:100%;
            padding-top:170px;
            box-sizing: border-box;
            .title {
                margin-bottom:80px;
                color:#272727;
                font-size:35px;
                font-family: SourceHanSansCN-Bold;
                font-weight: bold;
            }
            img {
                width:100%;
                height:615px;
            }
        }
    }
</style>