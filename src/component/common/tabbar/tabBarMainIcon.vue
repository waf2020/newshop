<template>
    <div class="tabmain">
        <tabitemIcon class="tabitems" activecolor="#ff5777" path="/home">
            <span slot="icon" class="iconfont icon-shouye-"></span>
            <div slot="text">首页</div>
        </tabitemIcon>

        <tabitemIcon class="tabitems" path="/category">
            <span slot="icon" class="iconfont icon-xitong-"></span>
            <div slot="text">分类</div>
        </tabitemIcon>

        <tabitemIcon class="tabitems" path="/shopcart">
            <span slot="icon" class="iconfont icon-gouwuche"></span>
            <div slot="text">购物车</div>
        </tabitemIcon>

        <tabitemIcon class="tabitems" path="/profile">
            <span slot="icon" class="iconfont icon-wode-1"></span>
            <div slot="text">我的</div>
        </tabitemIcon>

       
    </div>
    
</template>

<script>
import tabitemIcon from './tabitemIcon.vue'
export default {
    name:'tabBarMainIcon',
    components:{
        tabitemIcon
    }
}
</script>
<style scoped>
  .tabmain {
      z-index: 2;
      display: flex;
      text-align: center;
      position: fixed;
      bottom: 0;
      right: 0;
      left: 0;
    font-size: 13px;
      box-shadow: 0px 0px 2px #d1d0d0;
      background-color: #fff;
  }
  .tabitems {
      flex: 1;
      height: 49px;
  }
</style>