<template>
    <div class="tab-item" @click="getpath" >
        <div v-if="isActive!==true">
            <slot name="imgsrc"></slot>
            </div>
            <div v-else><slot name="active-imgsrc"></slot></div>
            
           <div :style="isactivestyle"> <slot name="title"></slot>  </div> 
    </div>
</template>

<script>

export default {
    data() {
        return {
           
        }
        
    },
    props:{
           path:{
              type:String
           },
           activecolor:{
                type:String,
                default:'red'
           } 
        },
computed: {
    isActive(){
        
        return this.$route.path.indexOf(this.path)!==-1;
    },

    isactivestyle(){
             return  this.isActive ? {color:this.activecolor} : ""
    }
},
    methods: {
        getpath(){
         //   console.log("点击");
           // console.log(this.path)
            this.$router.replace(this.path);
        }
    },
}
</script>

<style lang="scss" scoped>
  .tab-item {
      flex: 1;
      
     height: 49px;
     text-align: center;
     font-size: 14px;
  }
  .title {
      text-align: center;
  }
  
  
   
  

</style>