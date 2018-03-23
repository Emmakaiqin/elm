<template>
  <div class="header">
    <div class="content-wrapper">
      <!--头像-->
      <div class="avatar">
        <img :src="seller.avatar">
      </div>
      <!--头像 end-->
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">{{seller.description}}/{{seller.deliveryTime}}分钟送达</div>
        <div v-if="seller.supports" class="support">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div v-if="seller.supports" class="support-count" @click="detailShowFun">
        <span class="count">{{seller.supports.length}}个</span>
        <i class="fa fa-angle-right"></i>
      </div>
    </div>
    <div class="bulletin-wrapper" @click="detailShowFun">
      <span class="title"></span><span class="text">{{seller.bulletin}}</span><i class="fa fa-angle-right"></i>
    </div>
    <div class="background">
      <img :src="seller.avatar">
    </div>
    <div v-show="detailShow" class="detail">
      <div class="wrapper clearfix">
        <div class="main"></div>
      </div>
      <div class="close" @click="detailShowFun">
        <i class="fa fa-close"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      detailShow:false
    }
  },
  props:{//接受父组件传值
    seller:{
      type:Object
    }
  },
  created(){//顶部图标切换
    this.classMap=['decrease','discount','guarantee','special','invoice']
  },
  methods:{
    detailShowFun(){//控制关闭和显示弹出层
      this.detailShow=!this.detailShow;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import url('../../assets/css/common.less');
.header{
  color:#fff;
  position: relative;
  background-color:rgba(7,17,27,.5);
  overflow: hidden;
  .content-wrapper{
    font-size:0;
    position:relative;
    padding:24px 12px 18px 24px;
    .avatar{
      display:inline-block;
      vertical-align:top;
      img{
        border-radius:2px;
        width:64px;
        height:64px;
      }
    }
    .content{
      display:inline-block;
      font-size:14px;
      margin-left:16px;
      .title{
        margin:2px 0 8px 0;
        .brand{
          display:inline-block;
          width:30px;
          height:18px;
          background:url(./brand.png) no-repeat;
          background-size:100% 100%;
          vertical-align:top;
        }
        .name{
          margin-left:6px;
          font-size:16px;
          line-height:18px;
          font-weight:bold;
        }
      }
      .description{font-size:12px;margin-bottom:10px;line-height:12px;}
      .support{
        .icon{
          display:inline-block;
          width:12px;
          height:12px;
          margin-right:4px;
          vertical-align:top;
          background-size:100% 100%;
          background-repeat:no-repeat;
          &.decrease{
            .bg-img('../../components/header/decrease_1.png');
          }
          &.discount{
            .bg-img('../../components/header/discount_1.png');
          }
          &.guarantee{
            .bg-img('../../components/header/guarantee_1.png');
          }
          &.special{
            .bg-img('../../components/header/special_1.png');
          }
          &.invoice{
            .bg-img('../../components/header/invoice_1.png');
          }
        }
        .text{
          line-height:12px;
          font-size:10px;
          vertical-align:top;
        }
      }
    }
    .support-count{
      position: absolute;
      right:12px;
      bottom:18px;
      padding:0 8px;
      height:24px;
      line-height:24px;
      border-radius:14px;
      background-color:rgba(0,0,0,.2);
      text-align: center;
      .count{
          font-size:10px;
          vertical-align:top;
      }
      .fa-angle-right{
        font-size:10px;
        line-height:24px;
        margin-left:2px;
      }
    }
  }
  .bulletin-wrapper{
    position: relative;
    height:28px;
    line-height:28px;
    padding:0 22px 0 12px;
    white-space: nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
    background-color: rgba(7,17,27,.2);
    .title{
      display: inline-block;
      width:22px;
      height:12px;
      .bg-img('../../components/header/bulletin.png');
      background-size:100% 100%;
      background-repeat:no-repeat;
      vertical-align:top;
      margin-top:8px;
    }
    .text{
      margin:0 4px;
      font-size:10px;
      vertical-align:top;
    }
    .fa-angle-right{
      position: absolute;
      right:12px;
      font-size:10px;
      top:8px;
    }
  }
  .background{
    position: absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    z-index:-1;
    filter:blur(10px);
    img{width:100%;height:100%;}
  }
  .detail{
    position:fixed;
    top:0;left:0;
    z-index:100;
    width:100%;
    height:100%;
    overflow: hidden;
    background-color:rgba(7,17,27,0.8);
    .wrapper{
      min-height:100%;
      .main{
        margin-top:64px;
        padding-bottom:64px;
      }
    }
    .close{
      position: relative;
      width:32px;
      height:32px;
      margin:-64px auto 0 auto;
      font-size:32px;
      clear: both;
    }
  }
}
</style>
