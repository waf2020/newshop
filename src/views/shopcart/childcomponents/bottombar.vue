<template>
  <div>
    <div class="countbar">
      <div class="allcheckImg" @click="allcheckout">
        <img src="@/assets/img/common/unselect.png" v-show="isallcheckout===false" />
        <img src="@/assets/img/common/selected.png" v-show="isallcheckout===true" />
        <span>全选</span>
      </div>

      <div>合计:{{sumcount}} 元</div>
      <div class="gocount">去计算({{checkoutlength}}件)</div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "bottombar",
  methods:{
allcheckout(){
    //当全选为true 点击要变为全不选
    if(this.isallcheckout){
         this.$store.commit('switcCheckAll',false)
    }else{
         this.$store.commit('switcCheckAll',true)
    }
   
}
  },
  computed: {
    ...mapGetters(["cartlists"]),
    isallcheckout() {
      let isall = true;
      for (let item of this.cartlists) {
        if (item.checkout === false) {
          isall = false;
        }
      }
      return isall;
    },
    checkoutlength(){
        return this.cartlists.filter(item=>item.checkout===true).length
    },
    sumcount(){
     let sum=0;
     for(let i of this.cartlists){
         if(i.checkout===true){
             sum+=i.count*i.price
         }
     }
     return sum;
    }
  }
};
</script>
<style lang="scss" scoped>
.countbar {
  display: flex;
  position: fixed;
  justify-content: space-between;
  left: 0;
  right: 0;
  bottom: 49px;
  height: 40px;
  line-height: 40px;
}
.allcheckImg {
 
}
.allcheckImg img {
  width: 20px;
  height: 20px;
  vertical-align: middle;
}
.gocount {
  color: white;
  padding: 0 5px;
  margin-right: 15px;
  background-color: #f2270c;
  border-radius: 20px;
}
</style>