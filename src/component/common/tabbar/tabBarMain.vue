<template>
<div>
  <tabBar class="taBar">
    <!-- path：路由跳转的路径
    activecolor:处于活跃时的字体颜色-->
    <tabitem class="tabitem" path="/home" activecolor="pink">
      <img slot="imgsrc" src="@/assets/img/tabbar/home.svg" />
      <img slot="active-imgsrc" src="@/assets/img/tabbar/home_active.svg" />
      <div slot="title">首页</div>
    </tabitem>

    <tabitem class="tabitem" path="/category" activecolor="pink">
      <img slot="imgsrc" src="@/assets/img/tabbar/category.svg" />
      <img slot="active-imgsrc" src="@/assets/img/tabbar/category_active.svg" />
      <div slot="title">分类</div>
    </tabitem>

    <tabitem class="tabitem" path="/shopcart" activecolor="pink">
      <img slot="imgsrc" src="@/assets/img/tabbar/shopcart.svg" />
      <img slot="active-imgsrc" src="@/assets/img/tabbar/shopcart_active.svg" />
      <div slot="title">购物车</div>
    </tabitem>

    <tabitem class="tabitem" path="/profile" activecolor="pink">
      <img slot="imgsrc" src="@/assets/img/tabbar/profile.svg" />
      <img slot="active-imgsrc" src="@/assets/img/tabbar/profile_active.svg" />
      <div slot="title">购物车</div>
    </tabitem>
  </tabBar>
  <router-view></router-view>
 </div> 
</template>
<script>
import tabBar from "./tabBar.vue";
import tabitem from "./tabitem.vue";
export default {
  name: "tabBarMain",
  components: {
    tabBar,
    tabitem
  }
};
</script>

<style lang="scss" scoped>
.tabitem img {
  width: 26px;
  height: 26px;
}
.taBar {
  z-index: 99;
}
</style>