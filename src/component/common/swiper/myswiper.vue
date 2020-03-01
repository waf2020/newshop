<template>
    <div class="box">
      <swiper :options="swiperOption" class="swiper-container">
        <!-- slides -->
        <swiper-slide class="swiper-item" v-for="item of bannerlist" :key="item.id">
          <a :href="item.link">
            <img class="swiper-img" :src="item.image" alt />
          </a>
        </swiper-slide>
        <!-- Optional controls ,显示小点-->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
    name:'myswiper',
    props:{
        bannerlist:{
            type:Array
        },
        swiperOption:{
            type:Object
        }
    },
    components:{
        swiper,
        swiperSlide
    },
    mounted() {
        console.log("bannerlist:"+this.bannerlist);
    },
}
</script>
<style  scoped>
.swiper-pagination >>> .swiper-pagination-bullet-active {
    background: #fff;
  }
  .box{
    height: 100%;
  }
  .box img {
    width: 100%;
    height: 100%;
  }
</style>