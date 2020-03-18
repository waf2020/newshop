<template>
    <div class="recommend">
        
        <a v-for="item in recommendlist" :key="item.title">
            <img :src="item.image" alt="">
            <div class="title">{{item.title}}</div>
            </a>
    </div>
</template>

<script>
export default {
    name:'recommend',
    props:{
         recommendlist:{
             type:Array
         }
    }

}
</script>

<style lang="scss" scoped>
.recommend {
    display: flex;
  //  margin-top: 7px;
    
}
.recommend a {
 padding: 7px 3px;
    height: 100%;
    flex: 1;color: var(--color-text);
   font-size: var(--font-size);

}
.recommend a img {
    width: 100%;
    height: 85%;
    
}

.recommend .title{
    text-align: center;
}
//  .recommend{
//      display: flex;
//      text-align: center;
     
//  }

//  .recommend a {
//      width: 85px;
//      height: 85px;
//      flex: 1;
//      color: var(--color-text);
//      font-size: var(--font-size);
//      padding: 7px 5px;
    
//  }
//  .recommend img {
//      width: 100%;
//      height: 100%;
//  }
//  .recommend .title {
//   margin-top: -15px;
//  }
</style>