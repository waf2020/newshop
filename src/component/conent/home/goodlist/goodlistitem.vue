<template>
  <div class="item" @click="godetaile">
    <img v-lazy="showimg" class="item-img" @load="imgload"/>
    <div class="title">{{goodsObj.title}}</div>
    <div class="item-bd">
      <span class="price">{{goodsObj.price}}</span>
      <img src="@/assets/img/home/collect.png" class="collect" />
      <span>{{goodsObj.cfav}}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "goodlistitem",
  props: {
    goodsObj: {
      type: Object
    }
  },
  computed:{
    showimg(){
      
      return this.goodsObj.image || this.goodsObj.show.img
    }
  },
  methods: {
    imgload(){
      //console.log('img加载完');
      // this.$store.commit('changeImgstate',true);
      this.$bus.$emit('itemimageload')
    },
    godetaile(){
 
      this.$router.push('/detail/'+this.goodsObj.iid);
    }
  },
};
</script>

<style lang="scss" scoped>
.item > .item-img {
  width: 100%;
  border-radius: 5px;
}
.item > .title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--color-text);
}


.item-bd > .price {
  color: var(--color-hight-text);
  margin-right: 13px;
}

.item-bd > .collect {
  width: 20px;
  height: 20px;
  vertical-align: middle;
  
}
.item-bd {
    padding-left: 25px;
    //padding: 1px 40px;
}

</style>