<template>
  <div class="goodlist">
    <goodlistitem v-for="item in goods" :key="item.title" :goodsObj="item" class="goodlist-item"></goodlistitem>
  </div>
</template>

<script>
import goodlistitem from "./goodlistitem.vue";
export default {
  name: "goodlist",
  props: {
    goods: {
      type: Array
    }
  },
  mounted() {
    //console.log('goodlist',this.goods);
  },
  components: {
    goodlistitem
  }
};
</script>


<style lang="scss" scoped>
.goodlist {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-around;
  background-color: #fff;
}
.goodlist-item {
  width: 48%;
}
</style>