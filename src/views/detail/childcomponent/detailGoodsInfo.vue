<template>
  <div class="goodsinfomain" v-if="Object.keys(productInfo).length>0">
    <div class="goods-info-desc">
      <div class="lineBar">
        <div class="line"></div>
      </div>
       <div class="line-desc">
         {{productInfo.desc}}  
       </div>
      <div class="lineBarR">
        <div class="lineR"></div>
      </div> 
    </div>
    <div class="infokey">
{{productInfo.detailImage[0].key}}
    </div>

   
      <div  class="detaileimg-list" v-for="(item,index) in productInfo.detailImage[0].list" :key="index">
          <img :src="item" @load="imgisload"/>
      
     
    </div>

    <br><br>
  </div>
</template>

<script>
export default {
  name: "detailGoodsInfo",
  props: {
    productInfo: {
      type: Object
    }
  },
  data(){
      return{
          count:0,
          
      }
  },
  computed:{
      countisimglength(){
          return this.count===this.productInfo.detailImage[0].list.length
      }
  },
  methods:{
      imgisload(){
         this.count++;
          if(this.countisimglength){
           console.log('详情图加载完成');
          this.$emit('detailimgload');
          }
         
      }
  }
};
</script>

<style lang="scss" scoped>
.goodsinfomain {
  //margin-top: 16px 0;
//   padding: 18px;
border-bottom: 6px solid var(--color-border);
}
.goods-info-desc {
    margin: 16px 0;
    padding: 0 2px;
}
.lineBar,
.lineBarR {
  height: 4px;
  width: 4px;
  background-color: #000;
  position: relative;
}
.lineBar {
  float: left;
}
.line,
.lineR {
  width: 80px;
  height: 1px;
  background-color: #a3a3a5;
  position: absolute;
  top: 1px;
  
}
.line {
  left: 4px;
}
.lineR {
  right: 4px;
}

.lineBarR {
  float: right;
}

.line-desc {
    padding:15px 3px;
    font-size: 13px;
    line-height: 18px;
    letter-spacing: 0.8px;
}
.detaileimg-list {
    width: 100%;
    
}
.detaileimg-list img{
 width: 100%;

}
</style>