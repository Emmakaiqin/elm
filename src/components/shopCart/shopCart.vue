<style lang="less" scoped>
@import url('../../assets/css/common.less');
.shopcart{
    position: fixed;
    height:48px;
    width: 100%;
    z-index:50;
    bottom:0;
    left:0;
    background-color:#141d27;
    .content{
        display:flex;
        color:rgba(255,255,255,.4);
        .content-left{
            flex:1;
            font-size:0;
            .logo-wrapper{
                display:inline-block;
                position: relative;
                top:-10px;
                margin:0 12px;
                padding:6px;
                width:56px;
                height:56px;
                box-sizing: border-box;
                vertical-align:bottom;
                border-radius:50%;
                background-color:#141d27;
                .logo{
                    width:100%;
                    height:100%;
                    border-radius:50%;
                    background-color:#2b343c;
                    text-align:center;
                    &.hight-light{
                        background-color:rgb(0,160,220);
                    }
                    .fa-shopping-cart{
                        font-size:24px;
                        color:#80858a;
                        line-height:44px;
                        &.hight-light{
                            color:#fff;
                        }
                    }
                }
                .num{
                    position: absolute;
                    top:0;
                    right:0;
                    width:24px;
                    height:16px;
                    line-height:16px;
                    text-align:center;
                    font-size:9px;
                    border-radius:16px;
                    color:#fff;
                    font-weight:700;
                    background-color:rgb(240,20,20);
                    box-shadow:0 4px 8px 0 rgba(0,0,0,.4);
                }
            }
            .price,.desc{
                display:inline-block;
                vertical-align:top;
                line-height: 24px;
                box-sizing: border-box;
            }
            .price{
                margin-top:12px;
                padding-right:12px;
                border-right:1px solid rgba(255,255,255,.1);
                font-size:16px;
                font-weight:700;
                &.hight-light{
                    color:#fff;
                }
            }
            .desc{
                line-height: 24px;
                margin:12px 0 0 12px;
                font-size:10px;
            }
        }
        .content-right{
            flex:0 0 105px;
            width: 105px;
            background-color:#2b333b;
            .pay{
                height:48px;
                line-height:48px;
                text-align:center;
                font-size:12px;
            }
        }
    }
}
</style>
<template>
  <div class="shopcart">
      <div class="content">
          <div class="content-left">
              <div class="logo-wrapper">
                  <div class="logo" :class="{'hight-light':totalCount>0}">
                      <i class="fa fa-shopping-cart" :class="{'hight-light':totalCount>0}"></i>
                  </div>
                  <span class="num" v-show="totalCount>0">{{totalCount}}</span>
              </div>
              <div class="price" :class="{'hight-light':totalCount>0}">￥{{totalPrice}}</div>
              <div class="desc">另需配送费￥{{deliveryPrice}}元</div>
          </div>
          <div class="content-right">
              <div class="pay">￥{{minPrice}}元起送</div>
          </div>
      </div>
  </div>
</template>
<script>
export default {
    data () {
        return {
            
        }
    },
    props:{
        selectFood:{//选中的食品
            type:Array,
            default(){
                return [
                    {
                        price:10,
                        count:2
                    }
                ];
            }
        },
        deliveryPrice:{//配送费
            type:Number,
            default:0
        },
        minPrice:{//最低价格
            type:Number,
            default:0
        }
    },
    computed:{
        totalPrice(){//总价
            let total=0;
            this.selectFood.forEach((food)=>{
                total+=food.price*food.count;
            });
            return total;
        },
        totalCount(){//所选商品总数
            let count=0;
            this.selectFood.forEach((food)=>{
                count+=food.count;
            });
            return count;
        },
        payDesc(){
            if(this.totalPrice===0){
                return ''
            }
        }
    }
        
}
</script>

