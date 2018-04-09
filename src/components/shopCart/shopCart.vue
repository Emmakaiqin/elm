<style lang="less" scoped>
.shopcart{
    position: fixed;
    height:48px;
    width: 100%;
    z-index:50;
    bottom:0;
    left:0;
    background-color:#e0e0e0;
}
</style>
<template>
  <div class="shopcart">
      <div class="content">
          <div class="content-left">
              <div class="logo-wrapper">
                  <div class="logo"><span></span></div>
              </div>
              <div class="price"></div>
              <div class="desc"></div>
          </div>
          <div class="content-right"></div>
      </div>
  </div>
</template>
<script>
export default {
  
}
</script>

