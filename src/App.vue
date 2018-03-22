<template>
  <div id="app">
    <!--header-->
    <v-header></v-header>
    <!--header end-->
    <!--tab-->
    <div class="tab">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">商家</router-link>
      </div>
    </div>
    <router-view></router-view>
    <!--tab end-->
    <!--foot-->
    <div class="foot"></div>
    <!--foot end-->
  </div>
</template>

<script>
import VHeader from "./components/header/header.vue"
export default {
  name: 'App',
  components: {
    VHeader
  },
  data(){
    return{
      seller:{}
    };
  }
}
</script>

<style lang="less">
@import url('./assets/css/common.less');
#app{
  .tab{
    display:flex;
    width:100%;
    height:40px;
    line-height:40px;
    .border-bottom-1(rgba(7,17,27,0.1));
    .tab-item{
      flex:1;
      text-align:center;
      &>a{
        display:block;
        font-size:14px;
        color:rgb(77,85,93);
        &.router-link-active{
          color:red;
        }
      }
      
    }
  }
}
</style>
