<template>
  <div class="goods">
    <div class="menu-wrapper" ref="menuWrapper">
      <ul>
        <li v-for="item in goods" class="menu-item">
          <span class="text" >
            <span v-show="item.type>0" class="icon" :class="classMap[item.type]"></span>
            {{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper" ref="foodsWrapper">
      <ul>
        <li v-for="item in goods" class="food-list food-list-hook">
          <h1 class="title">{{item.name}}</h1>
          <ul>
            <li v-for="food in item.foods" class="food-item">
              <div class="icon">
                <img :src="food.icon">
              </div>
              <div class="content">
                <h2 class="name">{{food.name}}</h2>
                <p class="desc" v-show="food.description">{{food.description}}</p>
                <div class="extra">
                  <span class="count">月售{{food.sellCount}}份</span><span>好评率{{food.rating}}</span>
                </div>
                <div class="price">
                  <span class="now">￥{{food.price}}</span><span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';
const ERR_NO=0;
export default {
  data () {
    return {
      goods:[],//存放从json获取到的数据
      listHeight,//右侧菜单栏高度列表
      scrollY//滑动高度
    }
  },
  props:{
    seller:{
      type:Object
    }
  },
  created(){
    this.$http.get('/api/goods').then((res)=>{
      if(res.body.errno===ERR_NO){
        this.goods=res.body.data;
        this.$nextTick(() => { //dom渲染完成后实现方法
            this._initScroll();//滚动
            this._calculateHeight();//实时监测滚动高度
          });
      }
    });
    this.classMap=['decrease','discount','guarantee','special','invoice']
  },
  methods:{
    _initScroll(){//页面滚动方法
      this.menuScroll=new BScroll(this.$refs.menuWrapper,{});
      this.foodScroll=new BScroll(this.$refs.foodsWrapper,{
        probeType:3//实时监听
      });
    },
    _calculateHeight(){//计算右侧食品栏目高度
      let foodList=this.$refs.foodsWrapper.getElementsByClassName("food-list-hook");
      let height=0;
      this.listHeight.push(height);
      for(let i=0;i<foodList.length;i++){
        let item=foodList[i];
        height+=item.clientHeight;
        this.listHeight.push(height);//存入每一个food-list开始滑到的高度
      }
    }
  }
}
</script>
<style lang="less">
@import url('../../assets/css/common.less');
@imgUrl:"../../components/goods/";
.goods{
  position:absolute;
  top:174px;
  bottom:46px;
  left:0;
  display:flex;
  overflow: hidden;
  width:100%;
  .menu-wrapper{
    flex:0 0 80px;
    width:80px;
    background-color:#f3f5f7;
    .menu-item{
      display:table;
      height:54px;
      width:56px;
      line-height:14px;
      padding:0 12px;
      .text{
        position: relative;
        font-size:12px;
        display:table-cell;
        width:56px;
        vertical-align:middle;
        .border-bottom-1(rgba(7,17,27,0.1));
        .icon{
          display:inline-block;
          width:12px;
          height:12px;
          margin-right:2px;
          vertical-align:top;
          background-size:100% 100%;
          background-repeat:no-repeat;
          &.decrease{
            .bg-img("@{imgUrl}decrease_3.png");
          }
          &.discount{
            .bg-img('@{imgUrl}discount_3.png');
          }
          &.guarantee{
            .bg-img('@{imgUrl}guarantee_3.png');
          }
          &.special{
            .bg-img('@{imgUrl}special_3.png');
          }
          &.invoice{
            .bg-img('@{imgUrl}invoice_3.png');
          }
        }
      }
    }
  }
  .foods-wrapper{
    flex:1;
    .food-list{
      .title{
        padding-left:14px;
        height:26px;
        line-height:26px;
        border-left:2px solid #d9dde1;
        font-size:12px;
        color:rgb(147,153,159);
        background-color:#f3f5f7;
      }
    }
    .food-item{
      display:flex;
      margin:18px;
      padding-bottom:18px;
      .border-bottom-1(rgba(7,17,27,0.1));
      &:last-child{
        border-bottom:0;
        margin-bottom:0;
      }
      .icon{
        flex:0 0 57px;
        margin-right:10px;
        img{
          width:100%;
          height:auto;
        }
      }
      .content{
        flex:1;
        .name{
          font-size:14px;
          line-height:14px;
          margin:2px 0 8px 0;
          height:14px;
          color:rgb(7,17,27);
        }
        .desc,.extra{
          font-size:10px;
          line-height:10px;
          color:rgb(147,153,159);
        }
        .desc{
          margin-bottom:8px;
          line-height:12px;
        }
        .extra{
          height:10px;
          .count{
            margin-right:12px;
          }
        }
        .price{
          font-weight:700;
          line-height:24px;
          .now{
            font-size:14px;
            margin-right:8px;
            color: rgb(240,20,20);
          }
          .old{
            text-decoration:line-through;
            font-size:10px;
            color:rgb(147,153,159);
          }
        }
      }
    }
  }
}
</style>
