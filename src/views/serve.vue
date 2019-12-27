<template>
  <div class='serve-page'>
    <div class="box1">
      <div class="innerBox">
        <h5 class="title">服务模式</h5>
        <p>
          <span>进口贸易</span>
          <span>出口贸易</span>
          <span>跨境物流清关</span>
          <span>供应链金融</span>
        </p>
      </div>
    </div>
    <div class="box2">
      <div class="innerBox">
        <h5 class="title">进口服务系统</h5>
        <p class="tips">璨宇国际根据跨境品牌和大经销商不同的需求，提供不同类型的服务，如一般贸易，跨境贸易，BBC一件代发，品牌托盘运营等，构建完善的跨境贸易服务体系</p>
        <img src="../assets/img/serve_img1.png" alt="">
        <ul>
          <li>
            市场调研<br/>跨境品牌筛选
          </li>
          <li>
            跨境品牌孵化系统<br/>海外品牌，本土化运作
          </li>
          <li>
            大宗商品跨境交易<br/>报关清关
          </li>
          <li>托盘运营<br/>价格管控、平台对接</li>
        </ul>
      </div>
    </div>
    <div class="box3">
      <div class="innerBox">
        <div class="left">
          <h5>出口服务系统</h5>
          <p>为国内品牌提供跨境贸易和运维服务，将优质国内产品引进到国外，进驻国外线上电商平台，线下大连锁商超、专卖店和社区店。</p>
        </div>
        <img src="../assets/img/serve_img2.png" alt="" class="right">
      </div>
    </div>
    <div class="box4">
      <div class="innerBox">
        <h5 class="title">
          <span class="big">出口销售渠道</span>
          <span class="small">中国品牌、全球化运作</span>
        </h5>
        <p class="tips">为国外门店搭建跨境新零售系统，将国内优质商品引进到国外，进驻国外各大超市连锁、中小商超、社区店、电商平台、阿里巴巴海外“Taobao Selection”专柜等，服务1亿华人，助力商家“一品卖全球”</p>
        <div class="imgs">
          <img src="../assets/img/serve_img3.png" alt="">
          <img src="../assets/img/serve_img4.jpg" alt="">
        </div>
      </div>
    </div>
    <div class="box5">
      <div class="innerBox">
        <h5 class="title">跨境物流清关</h5>
        <p class="tips">与20多家国际、国内的物流仓储服务商深度合作，在海关备案的商品有20000多个，能够为客户提供灵活多样的物流选择及自动拼单、拆单等附加服务。无论在中国还是海外，我们均有战略合作的物流公司和保税仓，无论是B2B还是B2C,我们均能提供有特色的不同的物流选择。</p>
        <ul class="imgs">
          <li>
            <img src="../assets/img/serve_icon1.png" alt="">
          </li>
          <li>
            <img src="../assets/img/serve_icon2.png" alt="">
          </li>
          <li>
            <img src="../assets/img/serve_icon3.png" alt="">
          </li>
        </ul>
      </div>
    </div>
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
  .serve-page {
    width:100%;
    background: #FFF;
    .box1 {
      width:100%;
      height:631px;
      background: url('../assets/img/serve_bg.jpg') center/cover no-repeat;
      .innerBox {
        width:1200px;
        margin:0 auto;
        padding-top:275px;
        box-sizing: border-box;
        color:#FFF;
        .title {
          margin-bottom:25px;
          font-size:50px;
          font-weight: bold;
          font-family: PingFang-SC-Bold;
        }
        p {
          display: flex;
          align-items: center;
          justify-content: center;
          span {
            line-height: 1em;
            padding:0 20px;
            border-right:2px solid #FFF;
            font-size:21px;
            font-family: PingFang-SC-Regular;
            &:last-of-type {
              border-right:none;
            }
          }
        }
      }
    }
    .box2 {
      width:100%;
      .innerBox {
        width:1200px;
        margin:0 auto;
        padding-top:80px;
        .title {
          margin-bottom:35px;
          color:#272727;
          font-size:35px;
          font-family: SourceHanSansCN-Bold;
          font-weight: bold;
        }
        .tips {
          width:1020px;
          margin:0 auto 56px;
          line-height: 35px;
          color:#818282;
          font-size:19px;
          font-family: PingFang-SC-Medium;
        }
        img {
          width:1016px;
          margin-bottom:36px;
        }
        ul {
          width:1016px;
          margin:0 auto;
          display: flex;
          justify-content: space-between;
          li {
            width:200px;
            line-height: 30px;
            font-size:17px;
            font-family: PingFang-SC-Regular;
            color:#7C7C7C;
          }
        }
      }
    }
    .box3 {
      width:100%;
      .innerBox {
        width:1120px;
        margin:0 auto;
        padding:95px 0 44px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .left {
          width:365px;
          text-align: left;
          h5 {
            margin-bottom:40px;
            color:#272727;
            font-size:35.5px;
            font-family: SourceHanSansCN-Bold;
            font-weight: bold;
          }
          p {
            line-height: 30px;
            color:#818282;
            font-size:19px;
            font-family: PingFang-SC-Medium;
          }
        }
        .right {
          width:579px;
          height:398px;
          padding-right:30px;
        }
      }
    }
    .box4 {
      width:100%;
      background:linear-gradient(0deg,rgba(184,208,244,.58) 0%,rgba(255,255,255,.58) 100%);
      .innerBox {
        width:1200px;
        padding:100px 0;
        margin:0 auto;
        .title {
          margin-bottom:35px;
          display: flex;
          justify-content: center;
          align-items: flex-end;
          .big {
            margin-right:25px;
            line-height: 1em;
            color:#272727;
            font-size:35px;
            font-family: SourceHanSansCN-Bold;
            font-weight: bold;
          }
          .small {
            line-height: 1em;
            color:#111D32;
            font-size:25px;
            font-family: PingFang-SC-Medium;
          }
        }
        .tips {
          width:1000px;
          line-height: 30px;
          margin:0 auto 90px;
          color:#818282;
          font-size:19px;
          font-family: PingFang-SC-Medium;
        }
        .imgs {
          display:flex;
          justify-content: space-between;
          img {
            height:571px;
          }
        }
      }
    }
    .box5 {
      width:100%;
      .innerBox {
        width:1200px;
        padding:46px 0 100px;
        margin:0 auto;
        .title {
          color:#272727;
          font-size:35px;
          font-family: SourceHanSansCN-Bold;
          font-weight: bold;
        }
        .tips {
          width:1000px;
          margin:33px auto 68px;
          line-height: 35px;
          color:#818282;
          font-size: 19px;
          font-family: PingFang-SC-Medium;
        }
        .imgs {
          width:900px;
          margin:0 auto 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          li {
            width:250px;
            img {
              width:113px;
            }
            &:last-of-type {
              img {
                width:103px;
              }
            }
          }
        }
      }
    }
  }
</style>