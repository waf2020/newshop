<template>
  <div class="tab-main">
    <div class="tab-shop">
      <span class="iconfont icon-dianpu my-icon"></span>
      <div class="text">店铺</div>
    </div>

    <div class="tab-custom">
      <span class="iconfont icon-10 my-icon"></span>
      <div class="text">客服</div>
    </div>

    <div class="tab-collect">
      <span class="iconfont icon-shoucang my-icon"></span>
      <div class="text">收藏</div>
    </div>

    <div class="addshopcart" @click="addcarts">
      <span>加入购物车</span>
    </div>

    <div class="nowbuy">
      <span>立即购买</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabbar",
  methods:{
    addcarts(){
     //像父组件发出监听事件
     this.$emit('addcart')
    }
  }
};
</script>
<style lang="scss" scoped>
.tab-main {
  height: 49px;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  z-index: 99999;
  background-color: #fff;
}
.text {
  font-size: 14px;
  color: #666;
}

.my-icon {
  font-size: 25px;
  color: #666;
}
.icon-10 {
    color: #ff5777 !important;
}

.tab-custom div {
    color: #ff5777 !important;
}
.tab-shop,
.tab-custom,
.tab-collect {
  text-align: center;
  width: 16%;
  border-right: 1.2px solid rgb(237, 237, 237);
}
.addshopcart,
.nowbuy {
  width: 26%;
  text-align: center;
  vertical-align: middle;
  line-height: 49px;
}
.addshopcart {
  color: #ff5777;
  background-color: #ffe6e8;
}
.nowbuy {
  color: #fff;
  flex: 1;
  background: linear-gradient(90deg, #ff5777, #ff468f);
}
</style>