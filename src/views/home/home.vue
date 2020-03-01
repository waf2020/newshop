<template>
  <div id="home">
    <!-- 导航栏 -->
    <navbar class="nav">
      <div slot="center">小可爱的购物街</div>
    </navbar>
    <srcoll ref="srcoll" @getpositiony="mygetpositiony" :isprobeType='3'>
      <!-- 轮播图 -->
      <myswiper :swiperOption="swiperOption" :bannerlist="bannerlist.list" class="myswiper"></myswiper>
      <!-- 每日推荐 -->
      <recommend :recommendlist="recommendlist.list" class="recommend"></recommend>
      <!-- 本周流行 -->
      <div class="week-pop">
        <img src="@/assets/img/home/recommend_bg.jpg" />
      </div>
      <!-- tabControl选项卡 -->
      <tabControl :titles="['流行','新款','精选']" @checktab="getgoodstype"></tabControl>
      <!-- 商品列表 -->

      <goodlist :goods="goods[goodstype].list" class="goodlist"></goodlist>
    </srcoll>
    <!-- 回到顶部按钮 -->
    <div class="totop" @click="gettotop" v-show="positiony > 670">
      <img src="@/assets/img/common/top.png" />
    </div>
  </div>
</template>
<script>
import { getMultidata, getGoods } from "@/network/home";
import navbar from "@/component/common/navbar/navbar.vue";
import myswiper from "@/component/common/swiper/myswiper.vue";
import recommend from "@/component/conent/home/recommend.vue";

import tabControl from "@/component/conent/home/tabControl.vue";
import goodlist from "@/component/conent/home/goodlist/goodlist.vue";
import srcoll from "@/component/common/srcoll/srcoll.vue";

export default {
  name: "home",
  data() {
    return {
      bannerlist: "",
      recommendlist: "",
      swiperOption: {
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
      },
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      goodstype: "pop",
      positiony: 0
    };
  },
  created() {
    this.getMultdata();
    this.getGoodsList("pop");
    this.getGoodsList("new");
    this.getGoodsList("sell");
  },

  methods: {
    //获取首页轮播图和推荐数据
    getMultdata() {
      getMultidata().then(res => {
        if (res.status != 200) {
          console.log("获取数据失败");
        } else {
          this.bannerlist = res.data.data.banner;
          this.recommendlist = res.data.data.recommend;
          //console.log(res);
        }
      });
    },

    getGoodsList(type) {
      const page = this.goods[type].page + 1;
      //console.log(page);
      getGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.data.list);
        this.goods[type].page = page;
        //console.log(res);
      });
    },
    //得到当前的点击的type
    getgoodstype(value) {
      this.gettype(value);
      console.log(this.goodstype);
    },

    //根据文字获取其type
    gettype(val) {
      switch (val) {
        case "流行":
          this.goodstype = "pop";
          break;
        case "新款":
          this.goodstype = "new";
          break;
        case "精选":
          this.goodstype = "sell";
          break;
      }
    },

    //回到顶部
    gettotop() {
      console.log(this.$refs.srcoll.message);
      this.$refs.srcoll.gettotop(0, 0, 1000);
      //console.log(this.$refs.srcoll);
    },
    //监听滚动的位置
    mygetpositiony(val) {
    
      this.positiony = Math.abs(val);
     // console.log(this.positiony>660);
    }
  },

  components: {
    navbar,
    myswiper,
    recommend,
    tabControl,
    goodlist,
    srcoll
  }
};
</script>

<style  scoped>
#home {
  position: relative;
  background-color: #fff;
}
.nav {
  color: #fff;
  font-size: var(font-size);
  text-align: center;
  background-color: var(--color-tint);
}
/* .myswiper{
    height: 300px;
} */
.week-pop {
  width: 100%;
}
.week-pop img {
  width: 100%;
}
.goodlist {
  margin-top: 16px;
}
.recommend {
  background-color: #fff;
}
.wrapper {
  /* //height: 500px; */
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}

.totop {
  position: fixed;
  right: 5px;
  bottom: 45px;
}
.totop img {
  height: 55px;
  width: 55px;
}
</style>