<template>
  <div v-if="Object.keys(content).length>0">
    <div class="contentNum">
      <div>
        <span>买家评价 {{content.cRate}}</span>
        <span>|</span>
        <span>销量 {{content.cRate}}</span>
      </div>
      <div>
        <span>更多</span>
      </div>
    </div>
    <div class="contenttags">
      <div class="contenttags-item">
        <span>有图片(36)</span>
      </div>
      <div class="contenttags-item">
        <span>质量很好(5)</span>
      </div>
      <div class="contenttags-item">
        <span>料子很不错(9)</span>
      </div>
      <div class="contenttags-item">
        <span>性价比高(11)</span>
      </div>
      <div class="contenttags-item">
        <span>款式好(11)</span>
      </div>
    </div>
    <div class="userdesc">
      <img :src="content.list[0].user.avatar" />
      <span>{{content.list[0].user.uname}}</span>
    </div>
    <div class="contents">{{content.list[0].content}}</div>
    <div class="contenttime">
      <span>{{content.list[0].created | myformatDate}}</span>
      <span>{{content.list[0].style}}</span>
    </div>
    <div class="info-imgs">
     <img :src="item" v-for="(item,index) in content.list[0].images" :key
     ="index">
    </div>
  </div>
</template>


<script>
import { formatDate } from "@/util/time";
export default {
  name: "detailGoodsContent",
  props: {
    content: {
      type: Object
    }
  },
  filters: {
    myformatDate(value) {
     // console.log(value);
      // 1.将时间戳转化为data对象
      const time = new Date(value*1000);
      return formatDate(time, "yyyy-MM-dd hh:mm:ss");
    }
  }
};
</script>
<style lang="scss" scoped>
.contentNum {
  display: flex;
  justify-content: space-between;
  color: #999999;
  font-size: 13px;
  margin: 8px 8px;
}
.contentNum > div {
}
.contenttags {
  // display: flex;

  margin: 5px 5px;
}
.contenttags .contenttags-item {
  display: inline-block;
  color: #ff2255;
  background-color: #ffe8ee;
  height: 25px;
  font-size: 13px;
  border-radius: 13px;
  line-height: 25px;
  margin: 3px 3px;
}
.contenttags-item span {
  padding: 0 6px;
}
.userdesc {
  margin: 3px 5px;
  color: #424242;
}
.userdesc span {
  padding-left: 5px;
  font-size: 15px;
}
.userdesc img {
  height: 45px;
  width: 45px;
  border-radius: 50%;
  vertical-align: middle;
}
.contents,
.contenttime {
  color: #727272;
  font-size: 14px;
  margin: 10px 8px;
}
.contenttime span:last-child{
    padding-left: 7px;
}

.info-imgs{
    width: 60px;
    height: 60px;
    margin: 8px 8px;
}
.info-imgs img {
    width: 100%;
    height: 100%;
}
</style>