<template>
  <div class="wrapper" ref="wrapper" >
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "srcoll",
  props:{
   isprobeType:{ //是否监听滚动位置
       type:Number,
       default:0,
       
   }
  },
  data() {
    return {
      bscroll: null,
      message:'第三季度是大街上'
    };
  },
  mounted() {
      //console.log(this.$refs.wrapper)
      //console.log("srcoll组件里的message"+this.message);
    this.bscroll = new BScroll(this.$refs.wrapper, {
      probeType: this.isprobeType,
      pullUpLoad: true, //允许上拉加载，
      click: true //允许可滚动区域内有点击事件发生
    });

    //console.log(this.bscroll);

     //监听滚动位置
        this.bscroll.on('scroll',(position=>{
            //console.log(position.y);
            this.$emit('getpositiony',position.y)
        }));
//回到顶部
        

        // 监听上拉加载更多
        this.bscroll.on('pullingUp',()=>{
           // console.log('上来加载更多');
           this.bscroll.finishPullUp();

            this.$emit('pullup');
          //可以多次执行上拉加载，没有这段代码上拉只会加载一次
        })
  },
  methods: {
      //回到顶部方法
      gettotop(x,y,time){
         this.bscroll.scrollTo(x,y,time);
      },
      //刷新refresh
      getrefresh(){
      
        this.bscroll.refresh();
      }
  },
  
};
</script>

<style lang="scss" scoped>
</style>