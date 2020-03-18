<template>
  <div>
   
    <!-- 导航栏 -->
    <carttabbar></carttabbar>
     <div v-if="$store.getters.cartlistlen>0">
    <!-- 购物车列表 -->
    <cartlist></cartlist>
    <!-- 
    底部计算栏目-->
   <bottombar></bottombar>
   </div>
   <div v-else>购物车空空如也</div>
  </div>
</template>
<script>
import carttabbar from "./childcomponents/carttabbar";
import cartlist from "./childcomponents/cartlist"
import bottombar from './childcomponents/bottombar'

export default {
  name: "shopcart2",
  data() {
    return {
      cartlist: [],
      checkoutlist: [], //被选中的商品
      checkoutbtn: false //全选按钮是否被选中
    };
  },
  methods: {
     
    
    } 
  ,
  components: {
    carttabbar,
    cartlist,
    bottombar
  },
  computed: {
  
  },
  created() {
    
  }
};
</script>

<style lang="scss" scoped>


</style>