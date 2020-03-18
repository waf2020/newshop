<template>
<div>
<srcoll class="cartcontent" >
    <div class="cart" v-for="(item,index) in cartlists" :key="index">
        
      <!-- 左侧是否选中 -->
      <div class="checkleft" @click="switchselect(index)">
        
        <img src="@/assets/img/common/selected.png" v-show="item.checkout===true" /> 
        <img src="@/assets/img/common/unselect.png"  v-show="item.checkout===false"/>
      </div>
      <div class="carright">
        <div class="imgmain">
          <img :src="item.imageMain" /> 
        </div>
        <div class="context">
          <div class="title">{{item.title}}</div>
          <div class="desc">{{item.desc}}</div>
          <div class="price">
            <span>{{item.price}}</span>
            <span>x {{item.count}}</span>
          </div>
        </div>
      </div>
    </div>
    </srcoll>
    </div>
</template>

<script>
//导入store中的计算属性getters
import {mapGetters} from 'vuex';
import srcoll from '@/component/common/srcoll/srcoll.vue'
export default {
    name:'cartlist',
    computed:{
        ...mapGetters(['cartlists'])
    },
    components:{
        srcoll
    },
    methods:{
        switchselect(index){
           this.$store.commit('switcCheck',index)
        }
    }
}
</script>

<style lang="scss" scoped>
.cartcontent{
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 49px;
    overflow: hidden;
}
.cart {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 6px 6px;
  box-sizing: border-box;
  border-bottom: 2px solid var(--color-border);
}
.checkleft {
  width: 5%;
}

.checkleft img,
.allcheckImg img {
  width: 100%;
  height: 18px;
}
.carright {
  width: 95%;
  display: flex;
  //justify-content: space-between;
}
.imgmain img {
  width: 93px;
  height: 117px;
  border-radius: 5%;
  margin-left: 5px;
}
.context .title,
.context .desc {
  overflow: hidden;
  width: 100%;
  text-overflow: ellipsis;
  //word-break: break-all;
  white-space: nowrap;
  margin-bottom: 28px;
}
.context {
  flex: 1;

  width: 240px;
  padding-left: 8px;
}
.price span:last-child {
  float: right;
}
</style>


