<template>
  <div class="home" >
    <!-- banner -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide banner-container1">
          <div class="innerBox">
            <div class="title">海外品牌进入中国的快车道</div>
            <div class="tips">
              <p class="text-tips">助推中国品牌打入海外市场</p>
              <i class="text-line">大型跨境贸易综合服务商</i>
            </div>
          </div>
        </div>
        <div class="swiper-slide banner-container2">
          <div class="innerBox">
            <div class="title">跨境品牌全渠道管理</div>
          </div>
        </div>
        <div class="swiper-slide banner-container3">
          <div class="innerBox">
            <div class="title">覆盖全区的供销网络</div>
          </div>
        </div>
        <div class="swiper-slide banner-container4">
          <div class="innerBox">
          </div>
        </div>
        <div class="swiper-slide banner-container5">
          <div class="innerBox">
            <div class="title">多种合作模式</div>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>

    <!-- 公司介绍 -->
    <div class="introduce">
      <div class="innerBox">
        <h5 class="title scroll">公司介绍</h5>
        <div class="content">
          <div class="content-top">
            <div class="content-top-left scroll">
              <h5>进出口跨境品牌全渠道管理和全球直采网络</h5>
              <p>总部设在深圳，在悉尼、香港、上海和洛杉矶有分公司的大型跨境贸易综合服务商。<br/><br/>通过跨境贸易互联网技术和整合跨境供应链上下游资源，为国内外各供应商和渠道商提供提供商品数字化管理、跨境供销系统搭建、大宗商品交易、跨境物流通关、供应链金融、品牌孵化和代运营、渠道与平台对接及销售等品牌全渠道管理服务。</p>
            </div>
            <div class="content-top-right scroll">
              <img src="../assets/img/introduce_img1.png" alt="">
              <p>璨宇贸易进出口核心目标国家和地区</p>
            </div>
          </div>
          <div class="content-btm scroll">
            <div class="content-btm-left">
              <img src="../assets/img/introduce_img2.png" alt="">
            </div>
            <div class="content-btm-right">
              <h5>为国内外品牌、渠道商、电商平台提供跨境贸易综合解决方案</h5>
              <p>可在全球范围内调度商品进入中国，中国优质商品出口海外，打造从源头商家到消费者的全球性供销网络，实现品牌、大经销商、平台/门店的强绑定关系，实现共赢。</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 专业团队 -->
    <div class="team">
      <div class="innerBox scroll">
        <h5 class="title">专业团队</h5>
        <p class="text">由前大型跨境电商平台CEO领衔国际化团队，核心成员拥有15年以上跨境行业和电商平台运营经验，深谙进出口贸易及跨境品牌市场行情，精耕线上线下消费市场，拥有深厚的行业深厚资源和品牌运营托管能力。</p>
      </div>
    </div>

    <!-- 公司优势 -->
    <div class="advantage">
      <div class="innerBox">
        <h5 class="title scroll">公司优势</h5>
        <div class="top">
          <div class="top-left scroll">
            <h5>品牌强绑定优势</h5>
            <p>贸易网络涵盖澳新、欧美、日韩等区域，可从全球各地调度商品进入中国，让中国优质商品出口海外，打造从源头商家到消费者的全球性供销网络，实现品牌、渠道、平台三方的强绑定关系</p>
            <br/>
            <p>运动潮牌、天然奶粉、保健品、热门母婴、奢侈品、时尚装饰、品质日化，从质量、商家信誉、市场接受度等多维度评估，为客户精选优质海外商品，为品牌方对接好国内第三方平台和商家，解决双方的后顾之忧。</p>
          </div>
          <div class="top-right scroll">
            <img src="../assets/img/advantage_bg.jpg" alt="">
          </div>
        </div>
        <div class="btm">
          <h5 class="btm-title scroll">汇集热销品类</h5>
          <p class="btm-text scroll">依托强大的供销网络，璨宇贸易汇集了各类国际热销和特色商品。</p>
          <ul class="scroll">
            <li>澳洲奶粉</li>
            <li>营养保健品</li>
            <li>运动潮牌</li>
            <li>进口商超百货</li>
            <li>美妆护肤</li>
            <li>欧美大牌</li>
            <li>奢侈品</li>
            <li>其它特色商品</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 合作模式 -->
    <div class="teamwork">
      <div class="innerBox">
        <h5 class="title scroll">多种合作模式</h5>
        <img src="../assets/img/teamwork_bg.png" alt="" class="scroll">
      </div>
    </div>

    <!-- 底部 -->
    <Footer ref="footer"></Footer>
  </div>
</template>

<script>
  import Footer from '@/components/footer'
  export default {
    name: 'home',
    data() {
      return {

      }
    },
    mounted(){
      this.$ScrollReveal().reveal('.scroll',this.$store.state.ScrollConfig)
      this.intSwiper()
    },
    methods:{
      intSwiper() {
        //初始化banner轮播图
        var mySwiper = new Swiper ('.swiper-container', {
          loop: true, // 循环模式选项
          autoplay: 3000,
          // 如果需要分页器
          pagination:'.swiper-pagination'
        })
      }
    },
    components:{
      Footer
    }
  }
</script>
<style lang="less" scoped>
  .home {
    width:100%;
    .swiper-container {
      width:100%;
      min-width: 1200px;
      height:1180px;
      .swiper-wrapper {
        .swiper-slide {
          width:100%;
          height:1180px;
          .innerBox {
            width:1200px;
            height:100%;
            position: relative;
            margin:0 auto;
            display: flex;
            box-sizing: border-box;
            color:#FFF;
            text-align: center;
            .title {
              width:100%;
              font-size:52px;
              font-family: SourceHanSansCN-Bold;
            }
          }
        }
        .banner-container1 {
          background: url('../assets/img/banner1.jpg') center/cover no-repeat;
          .innerBox {
            padding-top:289px;
            flex-direction: column;
            text-align: left;
            .title {
              margin-bottom:40px;
              font-size:52px;
              font-family: SourceHanSansCN-Bold;
            }
            .tips {
              display: flex;
              .text-tips {
                margin-right:25px;
                font-size:38px;
              }
              .text-line {
                padding-bottom:5px;
                font-size:27px;
                border-bottom:2px solid #FFF;
              }
            }
          }
        }
        .banner-container2 {
          background: url('../assets/img/banner2.jpg') center/cover no-repeat;
          .innerBox {
            padding-top:240px;
          }
        }
        .banner-container3 {
          background: url('../assets/img/banner3.jpg') center/cover no-repeat;
          .innerBox {
            padding-top:200px;
          }
        }
        .banner-container4 {
          background: url('../assets/img/banner4.jpg') center/cover no-repeat;
        }
        .banner-container5{
          background: url('../assets/img/banner5.jpg') center/cover no-repeat;
          .innerBox {
            padding-top:260px;
          }
        }
      }
      .swiper-pagination {
        bottom:154px;
        /deep/ .swiper-pagination-bullet {
          width:14px;
          height:14px;
          margin:0 8px;
          background:#282a75;
          opacity:1;
          &.swiper-pagination-bullet-active {
            background: #88abda;
          }
        }
      }
    }
    .introduce {
      width:100%;
      background: #FFF;
      .innerBox {
        width:1200px;
        margin:0 auto;
        padding:42px 0 67px;
        font-family: PingFang-SC-Medium;
        .title {
          font-size:37.5px;
          font-weight: bold;
          color:#272727;
          margin-bottom:47px;
        }
        .content {
          width:100%;
          &-top {
            margin-bottom:55px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            &-left {
              width:550px;
              text-align: left;
              h5 {  
                margin-bottom:40px;
                font-size:25px;
                color:#111D32;
                font-weight: 600;
              }
              p {
                line-height: 30px;
                color:#818282;
                font-size:17px;
              }
            }
            &-right {
              display: flex;
              align-items: center;
              img {
                width:391px;
                height:425px;
                margin-right:47px;
              }
              p {
                width:42px;
                padding:13px;
                border:1px solid #fff;
                border-radius: 21px;
                box-shadow: 0.45px 1.949px 7.92px 0.08px rgba(55, 75, 103, 0.35);
                box-sizing: border-box;
                line-height: 1.1em;
                font-size:15px;
              }
            }
          }
          &-btm {
            display: flex;
            justify-content: space-between;
            align-items: center;
            &-left {
              padding-left:62px;
              img {
                width:386px;
                height:392px;
              }
            }
            &-right {
              width:530px;
              text-align: left;
              h5 {
                margin-bottom:30px;
                line-height: 45px;
                font-size:25px;
                color:#111D32;
                font-weight: 600;
              }
              p {
                line-height: 30px;
                font-size:17px;
                color:#818282;
              }
            }
          }
        }
      }
    }
    .team {
      width:100%;
      height:951px;
      background: url('../assets/img/team_bg.png') center/cover no-repeat;
      box-sizing: border-box;
      .innerBox {
        width:1200px;
        margin:0 auto;
        padding-top:200px;
        position: relative;
        text-align: center;
        .title {
          margin-bottom:40px;
          font-size:37.5px;
          font-family: SourceHanSansCN-Bold;
          color:#FEFDFD;
        }
        .text {
          width:820px;
          margin:0 auto;
          line-height: 35px;
          font-size:21px;
          font-family: PingFang-SC-Medium;
          color:#FEFEFF;
        }
      }
    }
    .advantage {
      width:100%;
      background: #FFF;
      .innerBox {
        width: 1290px;
        padding:110px 0 77px;
        margin:0 auto;
        .title {
          margin-bottom:44px;
          font-family: SourceHanSansCN-Bold;
          font-weight: bold;
          font-size:37.5px;
        }
        .top {
          width:1200px;
          margin:0 auto;
          margin-bottom:56px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          &-left {
            width:550px;
            font-family: PingFang-SC-Medium;
            text-align: left;
            h5 {
              margin-bottom:30px;
              color:#111D32;
              font-size:25px;
              font-weight: bold;
            }
            p {
              line-height: 25px;
              color:#818282;
              font-size:17px;
            }
          }
          &-right {
            img {
              width:536px;
              height:332px;
            }
          }
        }
        .btm {
          font-family: PingFang-SC-Medium;
          &-title {
            margin-bottom:27px;
            font-size:25px;
            color:#111D32;
            font-weight: 600;
          }
          &-text {
            margin-bottom:34px;
            font-size:17px;
            color:#818282;
          }
          ul {
            width:100%;
            display: flex;
            flex-wrap: wrap;
            li {
              width:319px;
              height:223px;
              line-height: 200px;
              margin-right:4px;
              margin-bottom:14px;
              font-size:32px;
              color:#FFF;
              font-family: PingFang-SC-Bold;
              transition: all .5s;
              transform: scale(1);
              &:nth-of-type(1) {
                background: url('../assets/img/advantage_icon1.png') center/cover no-repeat;
              }
              &:nth-of-type(2) {
                background: url('../assets/img/advantage_icon2.png') center/cover no-repeat;
              }
              &:nth-of-type(3) {
                background: url('../assets/img/advantage_icon3.png') center/cover no-repeat;
              }
              &:nth-of-type(4) {
                background: url('../assets/img/advantage_icon4.png') center/cover no-repeat;
                margin-right:0;
              }
              &:nth-of-type(5) {
                background: url('../assets/img/advantage_icon5.png') center/cover no-repeat;
              }
              &:nth-of-type(6) {
                background: url('../assets/img/advantage_icon6.png') center/cover no-repeat;
              }
              &:nth-of-type(7) {
                background: url('../assets/img/advantage_icon7.png') center/cover no-repeat;
              }
              &:nth-of-type(8) {
                background: url('../assets/img/advantage_icon8.png') center/cover no-repeat;
                margin-right:0;
              }
              &:hover {
                transform: scale(1.1);
              }
            }
          }
        }
      }
    }
    .teamwork {
      width:100%;
      height:1130px;
      background: linear-gradient(to bottom, #fff, #D8E5F9);
      .innerBox {
        width:1290px;
        height:100%;
        padding-top:132px;
        margin:0 auto;
        box-sizing: border-box;
        .title {
          margin-bottom:126px;
          font-size:37.5px;
          font-weight: bold;
          color:#272727;
          font-family: SourceHanSansCN-Bold;
        }
        img {
          width:100%;
          height:425px;
        }
      }
    }
  }
  @media screen and (max-width: 750px) {
    .home {
      .swiper-container {
        min-width: auto;
        height:10rem;
        .swiper-wrapper { 
          .swiper-slide { 
            height:10rem;
            .innerBox {
              width:100%;
            }
          }
        }
      }
      .introduce {
        .innerBox {
          width: 100%;
          padding:.42rem 0  .67rem;
          .title {
            font-size:.54rem;
          }
          .content {
            padding:0 .2rem;
            box-sizing: border-box;
            .content-top {
              flex-direction: column;
              margin-bottom:.6rem;
              &-left {
                width:100%;
                box-sizing: border-box;
                h5 {
                  margin-bottom:.4rem;
                  font-size:.35rem;
                }
                p {
                  line-height: .4rem;
                  font-size:.25rem;
                }
              }
              &-right {
                width:100%;
                margin-top:.5rem;
                box-sizing: border-box;
                display: flex;
                justify-content: space-between;
                img {
                  width:5.5rem;
                  height:auto;
                  margin-right:0;
                }
              }
            }
            .content-btm {
              flex-direction: column;
              &-left {
                padding-left:0;
                margin-bottom:.4rem;
                img {
                  width:100%;
                  height:auto;
                }
              }
              &-right {
                width:100%;
                h5 {
                  margin-bottom:.3rem;
                  font-size:.35rem;
                  line-height: .45rem;
                }
                p {
                  line-height: .4rem;
                }
              }
            }
          }
        }
      }
      .team {
        height:9.5rem;
        .innerBox {
          width: 100%;
          padding:1.5rem .2rem 0;
          box-sizing: border-box;
          .title {
            font-size:.54rem;
            margin-bottom:.4rem;
          }
          .text {
            width:100%;
            font-size:.25rem;
            line-height: .4rem;
          }
        }
      }
      .advantage {
        .innerBox {
          width: 100%;
          padding-top:1.1rem;
          .title {
            margin-bottom:.4rem;
            font-size:.54rem;
          }
          .top {
            width:100%;
            padding:0 .2rem;
            margin-bottom:.56rem;
            box-sizing: border-box;
            flex-direction: column;
            &-left {
              width:100%;
              h5 {
                margin-bottom:.3rem;
                font-size:.4rem;
                text-align: center;
              }
              p {
                font-size:.25rem;
                line-height: .4rem;
              }
            }
            &-right {
              img {
                width:100%;
                height:auto;
              }
            }
          }
          .btm {
            &-title {
              margin-bottom:.27rem;
              font-size:.4rem;
            }
            &-text {
              margin-bottom:.34rem;
              font-size:.25rem;
              line-height: .4rem;
            }
            ul {
              display: flex;
              flex-wrap: wrap;
              li {
                width:30%;
                height:auto;
              }
            }
          }
        }
      }
      .teamwork {
        .innerBox {
          width: 100%;
        }
      }
    }
  }
</style>
