<template>
  <div class="box">
    <swiper :options="swiperOption" class="swiper-container">
      <!-- slides -->

      <template  v-if="includeObj">
      <swiper-slide class="swiper-item" v-for="item of bannerlist" :key="item.id" >
        <a :href="item.link">
          <img class="swiper-img" :src="item.image" alt @load="swiperload" />
        </a>
      </swiper-slide>
</template>

   <template v-else>
      <swiper-slide class="swiper-item" v-for="(item,index) of bannerlist" :key="index" >
        <a :href="item.link">
          <img class="swiper-img" :src="item" alt @load="swiperload" />
        </a>
      </swiper-slide>
      </template>

      <!-- Optional controls ,显示小点-->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "myswiper",
  data() {
    return {
      isload: false
    };
  },
  props: {
    bannerlist: {
      type: Array
    },

    includeObj:{
       type:Boolean,
       default:false
    },
    swiperOption: {
      type: Object,
      default(){
        return {
          //轮播图相关参数
        // 参数选项,显示小点
        pagination: {
          el: ".swiper-pagination"
        },
        //循环
        loop: true,
        //每张播放时长3秒，自动播放
        autoplay: 2000,
        //滑动速度
        speed: 1000
        // delay:1000
        }
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  mounted() {
    console.log("bannerlist:" + this.bannerlist);
  },
  methods: {
    swiperload() {
      if (this.isload) {
        return;
      } else {
        this.isload = true;
        this.$emit("swiperimgload");
      }
      
    }
  }
};
</script>
<style  scoped>
.swiper-pagination >>> .swiper-pagination-bullet-active {
  background: #fff;
}

.swiper-container{
  width: 100%;
  height: 100%;
}
.swiper-container  img {
  width: 100%;
  height: 100%;
}


</style>