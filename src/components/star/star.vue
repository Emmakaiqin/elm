<template>
  <div class="star" :class="starType">
      <span class="star-item" v-for="itemClass in itemClasses" :class="itemClass"></span>
  </div>
</template>

<script>
const STAR_LEGTH=5;//分数星星长度
const CLS_ON='on';//分数星星类型class
const CLS_HALF='half';//分数星星类型class
const CLS_OFF='off';//分数星星类型class
export default {
  data () {
    return {
    }
  },
  props:{//接受父组件传值
    score:{//分数1-5分
        type:Number
    },
    size:{//尺寸:48 36 24
        type:Number
    }
  },
  computed:{//顶部图标切换
    starType(){
        return "star-"+this.size;
    },
    itemClasses(){
        let result=[];
        let score=Math.floor(this.score*2)/2;
        let hasDecimal=score%1!==0;//半个星星个数
        let integer=Math.floor(score);//整数星星个数
        for(let i=0;i<integer;i++){//全星class名放入数组
            result.push(CLS_ON);
        }
        if(hasDecimal){//半星class名放入数组，最多一个半星
            result.push(CLS_HALF);
        }
        while(result.length<STAR_LEGTH){//空白class名放入数组
            result.push(CLS_OFF);
        }
        return result;
    }
  },
  methods:{
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import url('../../assets/css/common.less');
@imgUrl:"../../components/star/";
.star{
    &.star-48{
        .star-item{
            display: inline-block;
            width:20px;
            height:20px;
            margin-right:22px;
            background-size:100% 100%;
            &:last-child{margin-right:0;}
            &.on{
                .bg-img('@{imgUrl}star48_on.png');
            }
            &.half{
                .bg-img('@{imgUrl}star48_half.png');
            }
            &.off{
                .bg-img('@{imgUrl}star48_off.png');
            }
        }
    }
    &.star-36{
        .star-item{
            display: inline-block;
            width:15px;height:15px;
            margin-right:6px;
            background-size:100% 100%;
            &:last-child{margin-right:0;}
            &.on{
                .bg-img('@{imgUrl}star48_on.png');
            }
            &.half{
                .bg-img('@{imgUrl}star48_half.png');
            }
            &.off{
                .bg-img('@{imgUrl}star48_off.png');
            }
        }
    }
    &.star-24{
        .star-item{
            display: inline-block;
            width:10px;height:10px;
            margin-right:3px;
            background-size:100% 100%;
            &:last-child{margin-right:0;}
            &.on{
                .bg-img('@{imgUrl}star24_on.png');
            }
            &.half{
                .bg-img('@{imgUrl}star24_half.png');
            }
            &.off{
                .bg-img('@{imgUrl}star24_off.png');
            }
        }
    }
    
}
</style>
