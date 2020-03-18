<template>
<div class="tabcontrol">
    <div v-for="(item,index) in titles" :key="index" class="tab-item" @click="clicktabitem(index)">
      <span :class="index===currectIndex? 'isActive' :''"> {{item}}</span>
    </div>
    </div>
</template>

<script>
export default {
    name:'tabControl',
    props:{
        titles:{
            type:Array
        }
    },
    data() {
        return {
            currectIndex:0
        }
    },
    methods: {
        clicktabitem(index){
            this.currectIndex=index;
            this.$emit('checktab',this.currectIndex);
           // console.log(item);
        }
    },
}
</script>

<style lang="scss" scoped>
 .tabcontrol{
     display: flex;
    //  margin-top: 5px;
     height: 44px;
     line-height: 44px;
     
    
 }
 
 .tab-item {
text-align: center;
     flex: 1;
     letter-spacing:1px;
 }

 .isActive{
    color: var(--color-hight-text);
    border-bottom: 2px solid var(--color-hight-text);
    padding: 4px 0px;
 }
</style>