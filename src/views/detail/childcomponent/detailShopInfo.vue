<template>
    <div class="detailshopmain">
        <div class="logodesc">
            <img class="logo" :src="shopbaseInfo.logo"/>
            <span>{{shopbaseInfo.name}}</span>
        </div>

        <div class="shopldesc" >

            <div class="selldescleft">
                <div class="selldescleft-main">
                <div class="selldes-left-num">
                    <span>5.2万</span>
                    <span>202</span>
                </div>

                <div class="selldes-left-text">
                    <span>总销量</span>
                    <span>全部宝贝</span>
                </div>
                </div>
            </div>

            <div class="selldescright">
                <div v-for="(item,index) in shopbaseInfo.score" :key="index" class="selldescright-item">
                 <span>{{item.name}}</span>
                 <span  :class="item.isBetter ? 'isred' :'isgreen'">  {{handlescore(item.score)}}</span>
                 
                  <span v-if="item.isBetter" class="hierarchys redtop" >高</span>
                  <span v-else class="hierarchys greenlow" >低</span>
                </div>
            </div>

        </div>

        <div class="goshop">
        <div>进店逛逛</div>
    </div>
    </div>
</template>

<script>
export default {
    name:'detailShopInfo',
    props:{
        shopbaseInfo:{
            type:Object
        }
    },
    computed:{
        handlescore(){
            return function (param) {
                return (param+'').indexOf('.') !==-1 ? param :param +'\xa0\xa0\xa0\xa0\xa0'
            }
        }
    }

}
</script>

<style lang="scss" scoped>
 .logodesc img {
     width: 50px;
     height: 50px;
     border-radius: 50%;
     vertical-align: middle;
 }
  .logodesc {
      
      padding: 18px 8px;
      color: var(--color-text);
  }
  .logodesc span {
      padding-left: 6px;
      font-weight: #333333;
  }
  .shopldesc {
      display: flex;
     
  }
   .shopldesc >div {
        flex: 1;
   }
  .selldescleft-main{
      position: absolute;
      top: 50%;
 border-right: 1px solid #cccccc;
 transform:translateY(-50%);
 padding:0px 10px;
  }
   .selldescleft {
       position: relative;
     
      
   }
   .selldes-left-num{
       padding-bottom: 3px;
   }
  .selldes-left-num,.selldes-left-text {
      display: flex;
      
     justify-content: center;
  }
  .selldes-left-num span {
    flex:1;
    text-align: center;
  
  }
  .selldes-left-text span:last-child {
        padding-left: 20px;
  }

  
  .selldescright {
      padding-left: 20px;
    
  }
  
  .selldescright-item span {
    //   padding: 0 6px;
  }

  .selldescleft-main{
    vertical-align: middle;
    
  }
 
.selldescright-item {
    padding-bottom: 4px;
}
 .isgreen {
     color: #5D9036;
 }
 .isred {
     color: #ff5777;
 }

 .redtop {
      
background-color:  #ff5777;;
 }
 .greenlow {
     
     background-color: #5D9036;
 }
 .hierarchys{
color: white;
text-align: center;
 }
.goshop{
 display: flex;
 justify-content:center;
 padding-top: 9px;
}
 .goshop >div{

     height: 30px;
     width: 40%;
     background-color: #F2F5FC;
     border-radius: 40px;
    
     text-align: center;
     line-height: 30px;
     color: var(--color-text);
 }

 .detailshopmain{
     border-bottom: 4px solid #F7F6F7;
     padding-bottom: 15px;
 }
</style>