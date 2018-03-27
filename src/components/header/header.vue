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
    <transition name="detail">
      <div v-show="detailShow" class="detail">
        <div class="wrapper clearfix">
          <div class="main">
            <h1 class="name">{{seller.name}}</h1>
            <div class="star-wrapper">
              <v-star :size="48" :score="seller.score"></v-star>
            </div>
            <div class="title">
              <div class="line"></div>
              <div class="text">优惠信息</div>
              <div class="line"></div>
            </div>
            <ul v-if="seller.supports" class="supports">
              <li class="support-item" v-for="(item,index) in seller.supports">
                <span class="icon" :class="classMap[seller.supports[index].type]"></span>
                <span class="text">{{seller.supports[index].description}}</span>
              </li>
            </ul>
            <div class="title">
              <div class="line"></div>
              <div class="text">商家公告</div>
              <div class="line"></div>
            </div>
            <div class="bulletin">
              <p class="content">{{seller.bulletin}}</p>
            </div>
          </div>
        </div>
        <div class="close" @click="detailShowFun">
          <i class="fa fa-close"></i>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import VStar from '../star/star';
export default {
  components:{
    VStar
  },
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
@imgUrl:"../../components/header/";
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
          .bg-img("@{imgUrl}brand.png");
          background-repeat:no-repeat;
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
            .bg-img("@{imgUrl}decrease_1.png");
          }
          &.discount{
            .bg-img('@{imgUrl}discount_1.png');
          }
          &.guarantee{
            .bg-img('@{imgUrl}guarantee_1.png');
          }
          &.special{
            .bg-img('@{imgUrl}special_1.png');
          }
          &.invoice{
            .bg-img('@{imgUrl}invoice_1.png');
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
      .bg-img('@{imgUrl}bulletin.png');
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
    // 动画效果
    &.detail-enter-active,&.detail-leave-active{
      opacity:1;
      transition:all  .5s;
    }
    &.detail-enter,&.detail-leave-to{
      opacity:0;
      background-color:rgba(7,17,27,0);
    }
    .wrapper{
      min-height:100%;
      width:100%;
      .main{
        margin-top:64px;
        padding-bottom:64px;
        .name{
          line-height:16px;
          text-align:center;
          font-size:16px;
          font-weight:700;
        }
        .star-wrapper{
          text-align:center;
          margin-top:18px;
          padding:2px 0;
        }
        .title{
          display:flex;
          width:80%;
          margin:28px auto 24px auto;
          .line{
            flex:1;
            position: relative;
            top:-6px;
            border-bottom:1px solid rgba(255,255,255,.2);
          }
          .text{
            padding:0 12px;
            font-size:14px;
            font-weight:700;
          }
        }
        .supports{
          width:80%;
          margin:0 auto;
          .support-item{
            padding:0 12px;
            margin-bottom:12px;
            font-size:0;
            &:last-child{margin-bottom:0;}
            .icon{
              display: inline-block;
              width:16px;
              height:16px;
              vertical-align:top;
              margin-right:16px;
              background-size:100% 100%;
              background-repeat: no-repeat;
              &.decrease{
                .bg-img('@{imgUrl}decrease_2.png');
              }
              &.discount{
                .bg-img('@{imgUrl}discount_2.png');
              }
              &.guarantee{
                .bg-img('@{imgUrl}guarantee_2.png');
              }
              &.special{
                .bg-img('@{imgUrl}special_2.png');
              }
              &.invoice{
                .bg-img('@{imgUrl}invoice_2.png');
              }
            }
            .text{
              font-size:12px;
              line-height:16px;
            }
          }
          
        }
        .bulletin{
          width:80%;
          margin:0 auto;
          .content{
            font-size:12px;
            line-height:24px;
            padding:0 12px;
            text-indent:2em;
          }
        }
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
