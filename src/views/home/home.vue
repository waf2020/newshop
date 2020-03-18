<template>
  <div id="home">
    <!-- 导航栏 -->
    <navbar class="nav">
      <div slot="center">小可爱的购物街</div>
    </navbar>
     <tabControl :titles="['流行','新款','精选']"
     @checktab="getgoodstype"
      v-show="tabControlisshow"
      class="tabcontrolbottoms"
      ref="tabtoptrol"
      ></tabControl>
    <srcoll
      ref="srcoll"
      @getpositiony="mygetpositiony"
      :isprobeType="3"
      :pullUpLoad="true"
      @pullup="mypullup"
    >
   
      <!-- 轮播图 -->
      <myswiper  :bannerlist="bannerlist.list" class="myhomeswiper" @swiperimgload="monitorswiperimg" :includeObj="true"></myswiper>
      <!-- 每日推荐 -->
      <recommend :recommendlist="recommendlist.list" class="recommend"></recommend>
      <!-- 本周流行 -->
      <div class="week-pop">
        <img src="@/assets/img/home/recommend_bg.jpg" />
      </div>
      <!-- tabControl选项卡 -->
      <tabControl :titles="['流行','新款','精选']" 
      @checktab="getgoodstype" ref="tabcontrolbottom" ></tabControl>
      <!-- 商品列表 -->
{{goodstype}}
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
      positiony: 0,
      imgload: "",
      tabControlisshow:false,     //第二个tabcontrol是否显示
      offsetTop:0,//tabcontrol距离顶部父元素的高度
    };
  },
  created() {
    this.getMultdata();
    this.getGoodsList("pop");
    this.getGoodsList("new");
    this.getGoodsList("sell");
  },
  mounted() {
    if (this.$refs.srcoll) {
      const refresh = this.debanuce(this.$refs.srcoll.getrefresh, 500);
      //监听图片是否加载完，加载完刷新，重新计算高度
      this.$bus.$on("itemimageload", () => {
        refresh();
      });
    }
  },

  methods: {
    //封装防抖函数
    debanuce(func, deplay) {
      let timer = null;
      return function() {
        if (timer) {
          clearTimeout(timer);
       
        }
        timer = setTimeout(() => {
          func.apply(this);
        }, deplay);
      };
    },
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
     
      
    },

    //根据index获取其type
    gettype(val) {
      console.log(val)
      switch (val) {
        case 0:
          this.goodstype = "pop";
          break;
        case 1:
          this.goodstype = "new";
          break;
        case 2:
          this.goodstype = "sell";
          break;
      }
 
      this.$refs.tabtoptrol.currectIndex=val;
      this.$refs.tabcontrolbottom.currectIndex=val;
    },

    //回到顶部
    gettotop() {
      console.log(this.$refs.srcoll.message);
      this.$refs.srcoll && this.$refs.srcoll.gettotop(0, 0, 500);
      //console.log(this.$refs.srcoll);
    },
    //监听滚动的位置
    mygetpositiony(val) {
      //console.log(val);
      this.positiony = Math.abs(val);
     
      //滚动的y值大于顶部的高度 就显示
      if(this.offsetTop<this.positiony){
        this.tabControlisshow=true;
      }else{
         this.tabControlisshow=false;
      }
    },
    //监听上拉加载更多
    mypullup() {
      console.log("home上拉加载更多");
      this.getGoodsList(this.goodstype);
    },
    //监听轮播图加载完成
    monitorswiperimg(){
     
          this.offsetTop=this.$refs.tabcontrolbottom.$el.offsetTop ;
         
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

  height: 100vh;
}
.nav {
  color: #fff;
  font-size: var(font-size);
  text-align: center;
  background-color: var(--color-tint);
z-index: 2;
  position: fixed;
  top:0;
  right: 0;
  left: 0;
}
.myhomeswiper{
    height: 200px;
   width: 100%;
}
.week-pop {
  width: 100%;
}
.week-pop img {
  width: 100%;
}
.goodlist {
  margin-top: 10px;
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
.tabcontrolbottoms {
  position: fixed;
 top: 44px;
  left: 0;
  right: 0;
  z-index: 99;
  background-color: #fff;
}
</style>