<template>
    <div>
        <navbar class="barmain">
            <span slot="left" class="iconfont icon-arrow-lift icon" @click="goback"></span>
            <div slot="center" class="conents" >
                <span v-for="(item,index) in detailsList" 
                :key="index" 
                :class="currentIndex===index? 'isactive' :''"
                @click="controldetail(index)">
                    {{item}}
                </span>
            </div>
        </navbar>
    </div>

</template>

<script>
import navbar from '@/component/common/navbar/navbar.vue'
export default {
    name:'bar',
    data() {
        return {
            detailsList:['商品','评论','参数','推荐'],
            currentIndex:0
           
        }
    },
    methods: {
        //切换商品 参数 评论 推荐
        controldetail(index){
             this.currentIndex=index;
             this.$emit('crorrespage',this.currentIndex);
        },
        //返回上一级
        goback(){
         this.$router.back()
        }
    },
    components:{
        navbar
    }
}
</script>

<style lang="scss" scoped>
.barmain .icon {
 padding-left: 18px;
}
.barmain {
    font-size: 15px;
    height: 44px;
    // border-bottom: 1px solid #cccccc;
    box-shadow: 0px 0.1px 2.5px #d1d0d0;
}
.conents {
    // text-align: left;
}
.conents span {
    padding: 0 5px;
}
.isactive{
    color: var( --color-hight-text);
}
 
</style>