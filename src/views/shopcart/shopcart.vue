<template>
  <div>
    <!-- 导航栏 -->
    <carttabbar></carttabbar>
    <!-- 购物车列表 -->
    <div class="cart" v-for="(item,index) in cartlist" :key="index">
      <!-- 左侧是否选中 -->
      <div class="checkleft" @click="checkoutimg(index,item.checkout)">
        {{item.checkout}}
        <img src="@/assets/img/common/selected.png" v-show="item.checkout===true" />
        <img src="@/assets/img/common/unselect.png" v-show="item.checkout===false" />
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
    <!-- 
    底部计算栏目-->
    <div class="countbar">
      <div class="allcheckImg" @click="allcheckoutclick">
        <img src="@/assets/img/common/unselect.png" v-show="checkoutbtn===false" />
        <img src="@/assets/img/common/selected.png" v-show="checkoutbtn===true" />
        全选
      </div>

      <div>合计：{{summoney}}</div>
      <div class="gocount">去计算 ({{sumcount}}件)</div>
    </div>
  </div>
</template>
<script>
import carttabbar from "./childcomponents/carttabbar";
export default {
  name: "shopcart",
  data() {
    return {
      cartlist: [],
      checkoutlist: [], //被选中的商品数组
      checkoutbtn: false //全选按钮是否被选中
    };
  },
  methods: {
      /**
       * params: index checkout
       * 思路：1.每次点击item项时，先对选中状态进行取反
       *       2.2-1：判断该对象是否选中，如果选中 进一步判断checkoutlist选中数组是否有该对象，没有就push进
       *          2-2：如该对象未选中，进一步判断checkoutlist数组是否有该对象，如果有就删除
       *       3.每次执行该方法，在状态取反之后，判断购物车数组checkout属性是否都为true,
       *         3-1为true，则设置checkoutbtn为ture
       *         3-2 有一个为false,则设置checkoutbtn为false
       */
    checkoutimg(index, val) {
      //对当前选中状态取反
      this.cartlist[index].checkout = !val; 
     //临时变量 用来存储购物车数组是否全选中
      let isallchecktemp = true;
      //临时变量储存当前对象的iid 
       let myiid = this.cartlist[index].iid; 

      for (let item of this.cartlist) {
        console.log(item.checkout);
        //如果存在未选中，则全选按钮为false
        if (item.checkout === false) {
          this.checkoutbtn = false;
          isallchecktemp = false;
        }
      }
      if (isallchecktemp) {
        this.checkoutbtn = true;
      }

      //判断为选中状态
      if (this.cartlist[index].checkout === true) {
        if (
          //判断选中数组中是否有该对象,find方法没找到返回undefined
          this.checkoutlist.find(function(x) {
            return x.iid === myiid;
          }) === undefined
        ) {
          //没有就加入到选中数组中
          this.checkoutlist.push(this.cartlist[index]);
        }
        //判断当前选项为没选中的状态
      } else {
        if (
          //判断没选中时   选中数组中是否有该对象
          this.checkoutlist.find(function(x) {
            return x.iid === myiid;
          }) !== undefined
        ) {
          //如果有 就删除该对象
          this.checkoutlist = this.checkoutlist.filter(
            item => item.iid !== myiid
          );
        }
      }
    },
    //点击全选按钮
    allcheckoutclick() {
      this.checkoutbtn = !this.checkoutbtn;
      //当全选按钮被选中时
      if (this.checkoutbtn) {
        this.checkoutlist = [];
        for (let item of this.cartlist) {
          item.checkout = true;
        }
        this.checkoutlist = this.cartlist;
      }else{
          this.checkoutlist = [];
          for (let item of this.cartlist) {
          item.checkout = false;
        }
      }
    }
  },
  components: {
    carttabbar
  },
  computed: {
    //合计
    summoney() {
      let sum = 0;
      for (let item of this.checkoutlist) {
        sum += item.count * item.price;
      }
      return sum;
    },
    //去计算
    sumcount() {
      return this.checkoutlist.length;
    }
  },
  created() {
    this.cartlist = this.$store.state.projectlist;
    //给所有对象加上checkout属性
    for (let item of this.cartlist) {
      this.$set(item, "checkout", false);
    }
  }
};
</script>

<style lang="scss" scoped>
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
  width: 5%;
}
.gocount {
  color: white;
  padding: 0 5px;
  margin-right: 15px;
  background-color: #f2270c;
  border-radius: 20px;
}
</style>