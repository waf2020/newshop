<template>
  <div class="baseinfo" v-if="Object.keys(goodsbaseInfo).length!==0">

    <div class="basedesc">
      <div class="titles">{{goodsbaseInfo.title}}</div>
      <div class="price">
        <span class="newprice">{{goodsbaseInfo.newPrice}}</span>
        <span class="oldprice">{{goodsbaseInfo.oldPrice}}</span>
        <button class="discount">{{goodsbaseInfo.discount}}</button>
      </div>
    </div>

    <div class="clomndesc">
        <div class="clomndesc-item">
            <span>{{goodsbaseInfo.columns[0]}}</span>
            <span>{{goodsbaseInfo.columns[1]}}</span>
            <span>{{goodsbaseInfo.services[goodsbaseInfo.services.length-1].name}}</span>

        </div>
    </div>

    <div class="servicedesc">
        <div class="servicedesc-item" v-for="index in goodsbaseInfo.services.length-1" :key="index">
           <img src="//s11.mogucdn.com/p1/160607/upload_ie4tkmbtgqztomjqhezdambqgqyde_44x44.png"/>
           <span>{{goodsbaseInfo.services[index-1].name}}</span>
        </div>
    </div>

    


  </div>
</template>

<script>
export default {
  name: "detailBaseInfo",
  props: {
    goodsbaseInfo: {
      type: Object
    }
  }
};
</script>

<style lang="scss" scoped>
.baseinfo {
    margin-top: 5px;
}
.basedesc {
  padding-left: 5px;
}
.basedesc .titles {
    letter-spacing: 1px;
  font-size: 16px;
  line-height: 24px;
  color: #333;
  font-weight: 400;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}
.price {
  padding: 8px 0px;
}
.price .newprice {
  font-size: 20px;
  color: var(--color-hight-text);
}
.price .oldprice {
  text-decoration: line-through;
  color: var(--color-text);
  margin-left: 8px;
  font-size: var(--font-size);
}
.discount{
    outline: none;
    border: 1px solid transparent;
    margin: 0;
    padding: 2;
    border-radius: 35px;
    color: white;
     font-size: var(--font-size);
    background-color: var(--color-hight-text);
}
.clomndesc {
    
    padding: 8px 0;
    // border-bottom:0.1px solid #cccccc;
    box-shadow: 0 0.4px 0px #cccccc;
} 

.clomndesc-item{
    display: flex;
     flex: 1;
     text-align: center;
      color: var(--color-text);
       font-size: var(--font-size);
}
.clomndesc-item span {
    flex: 1;
}
.clomndesc-item :first-child{
    text-align: left;
    padding-left: 5px;
}

.servicedesc {
    display: flex;
  height: 60px;
  line-height: 60px;
  padding-left: 5px;
  border-bottom: 4px solid #F5F3F9;
}
.servicedesc :first-child{
text-align: left;
}
.servicedesc-item {
    flex: 1;
     font-size: 12px;
     text-align: center;
}
.servicedesc-item img {
    height: 15px;
    width: 15px;
     vertical-align: middle;
     padding-right: 2px;
}


</style>