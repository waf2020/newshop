<template>
    <div class="nav">
        <div class="left"><slot name="left"></slot></div>
        <div class="center"><slot name="center"></slot></div>
        <div class="right"><slot name="right"></slot></div>
    </div>
</template>
<script>
export default {
    name:'navbar'
}
</script>

<style lang="scss" scoped>
   .nav {
       height: 44px;
       line-height: 44px;
       display: flex
   }
   .nav >.left,.nav >.right{
     width: 22%;
    
   }

   .center {
       flex:1;
        //background-color: hotpink;
   }
</style>