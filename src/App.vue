<template>
  <div id="app">
    <tabBarMainIcon></tabBarMainIcon>
     <router-view></router-view>
  </div>
</template>

<style lang="scss">
  
</style>

<script>
import tabBarMainIcon from '@/component/common/tabbar/tabBarMainIcon.vue'



export default {
    components:{
     tabBarMainIcon
    }
}
</script>

<style lang="scss" scoped>
  #app{
    // background-color: #fff;
  }
</style>
