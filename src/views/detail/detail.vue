<template>
  <div id="detail">
    <!-- 导航栏 -->
    <bar class="detailnav" @crorrespage="crorrespage" ref="bar"></bar>
    <srcoll
      class="swipercontents"
      ref="detailscorll"
      :isprobeType="3"
      @getpositiony="minitorpositiony"
    >
      <!-- 轮播图 -->
      <myswiper :bannerlist="bannerlist" class="myswipers"></myswiper>
      {{this.$store.state.projectlist.length}}
      <!-- 商品基本信息 -->
      <detailBaseInfo :goodsbaseInfo="goodsbaseInfo"></detailBaseInfo>
      <!-- 商家信息展示 -->
      <detailShopInfo :shopbaseInfo="shopbaseInfo"></detailShopInfo>
      <!-- 商品评论信息 -->
      <detailGoodsContent :content="goodscontents" ref="contents"></detailGoodsContent>
      <!-- 商品详情 -->
      <detailGoodsInfo :productInfo="goodsdetailInfo" @detailimgload="minotorImg"></detailGoodsInfo>
      <!-- 商品参数信息 -->
      <detailGoodsParams :detailgoodparam="goodparams" ref="myparams"></detailGoodsParams>
      <!-- 商品推荐数据-->
      <goodlist :goods="goodrecommend" ref="mygoodlist"></goodlist>
    </srcoll>
    <!-- 回到顶部按钮 -->
    <div class="totop" v-show="positionY>745" @click="totop">
      <img src="@/assets/img/common/top.png" />
    </div>
    <!-- 底部导航栏 -->
    <tabbar @addcart="addcart"></tabbar>
<tost :message="message" :showtost="showtost"></tost>
    <!-- 回到顶部按钮 -->
  </div>
</template>

<script>
import myswiper from "@/component/common/swiper/myswiper.vue";
import srcoll from "@/component/common/srcoll/srcoll.vue";
import goodlist from "@/component/conent/home/goodlist/goodlist";
import tost from "@/component/common/tost/tost.vue";

import bar from "./childcomponent/bar";
import detailBaseInfo from "./childcomponent/detailBaseInfo";
import detailShopInfo from "./childcomponent/detailShopInfo";
import detailGoodsInfo from "./childcomponent/detailGoodsInfo";
import detailGoodsParams from "./childcomponent/detailGoodsParams";
import detailGoodsContent from "./childcomponent/detailGoodsContent";
import tabbar from "./childcomponent/tabbar";

import { getdetailByiid, getCommends } from "@/network/detail.js";

import { GoodsInfo, shopInfo, GoodsParam } from "@/util/detail.js";
export default {
  name: "detail",
  data() {
    return {
      iid: "",
      bannerlist: [],
      goodsbaseInfo: {}, //商品基本详情对象
      shopbaseInfo: {}, //店铺基本信息对象
      goodsdetailInfo: {},
      goodparams: {}, //商品参数信息
      positionY: 0, //滚动到何时显示回到顶部
      goodscontents: {}, //商品评论信息
      goodrecommend: [], //商品推荐数据
      crorrespageheight: [0, 0, 0, 0],
      message:'',
      showtost:false
    };
  },
  components: {
    myswiper,
    srcoll,
    goodlist,
    tost,
    bar,
    detailBaseInfo,
    detailShopInfo,
    detailGoodsInfo,
    detailGoodsParams,
    detailGoodsContent,
    tabbar
  },
  methods: {
    //添加购物车
    addcart() {
      const goods = {};
      goods.title = this.goodsbaseInfo.title;
      goods.imageMain = this.bannerlist[0];
      goods.price = this.goodsbaseInfo.realPrice;
      goods.desc = this.goodsbaseInfo.desc;
      goods.iid = this.iid;
      goods.count = 1;
      this.$store.dispatch("addcartsA", goods).then(res => {
        this.message=res;
        this.showtost=true;
        console.log(res);
        setTimeout(()=>{
          this.showtost=false;
        },3000)
      });
      //  this.$store.commit('addcart',goods);
    },
    //点击导航栏滚动到相应的页面
    crorrespage(val) {
      console.log(val);
      this.$refs.detailscorll.gettotop(0, -this.crorrespageheight[val], 1000);
    },
    //监听图片详情图是否加载完全
    minotorImg() {
      // console.log( this.$refs.detailscorll)
      this.$refs.detailscorll.getrefresh();

      this.crorrespageheight[1] = this.$refs.contents.$el.offsetTop;
      this.crorrespageheight[2] = this.$refs.myparams.$el.offsetTop;
      this.crorrespageheight[3] = this.$refs.mygoodlist.$el.offsetTop;
      console.log(this.crorrespageheight);
    },
    //监听滚动的位置
    minitorpositiony(positiony) {
      this.positionY = Math.abs(positiony);
      //判断滚动到哪里，并进行导航栏联动
      if (
        this.positionY > this.crorrespageheight[1] &&
        this.positionY < this.crorrespageheight[2]
      ) {
        this.$refs.bar.currentIndex = 1;
      } else if (
        this.positionY > this.crorrespageheight[2] &&
        this.positionY < this.crorrespageheight[3]
      ) {
        this.$refs.bar.currentIndex = 2;
      } else if (this.crorrespageheight[3] < this.positionY) {
        this.$refs.bar.currentIndex = 3;
      } else {
        this.$refs.bar.currentIndex = 0;
      }
    },
    //回到顶部
    totop() {
      this.$refs.detailscorll.gettotop(0, 0, 100);
    }
  },
  created() {
    this.iid = this.$route.params.iid;
    getdetailByiid(this.iid)
      .then(res => {
        //获取轮播图
        this.bannerlist = res.data.result.itemInfo.topImages;
        //获取商品base信息
        const goods = new GoodsInfo(
          res.data.result.itemInfo,
          res.data.result.columns,
          res.data.result.shopInfo.services
        );
        this.goodsbaseInfo = goods;
        //获取店铺信息
        const shops = new shopInfo(res.data.result.shopInfo);
        this.shopbaseInfo = shops;
        //获取商品详情信息
        this.goodsdetailInfo = res.data.result.detailInfo;
        //获取商品参数信息
        this.goodparams = new GoodsParam(
          res.data.result.itemParams.info,
          res.data.result.itemParams.rule
        );

        //获取商品评论信息
        this.goodscontents = res.data.result.rate;
        //console.log(res);
      })
      .catch(error => {
        console.log(error);
      });

    getCommends().then(res => {
      this.goodrecommend = res.data.data.list;
      // console.log(this.goodrecommend)
    });
  }
};
</script>

<style lang="scss" scoped>
.myswipers {
  height: 230px;
}
#detail {
  position: relative;
  height: 100vh;
  z-index: 3;
  background-color: #fff;
}
.swipercontents {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.detailnav {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;
  background-color: #fff;
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