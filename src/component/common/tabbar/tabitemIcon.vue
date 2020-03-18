<template>
  <div @click="gopage" :style="isactivestyle">
    <div>
      <slot name="icon"></slot>
    </div>
    <div>
      <slot name="text"></slot>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "tabitemIcon",
  props: {
    path: {
      type: String,
      default: "/home"
    },
    activecolor: {
      type: String,
      default: 'red'
    }
  },
  computed: {
      isactive(){
         
          return this.$route.path.indexOf(this.path) ===-1 ? false : true
      },

      isactivestyle(){
         return this.isactive ? {color:this.activecolor} :''
      }
  },
  methods: {
    //进行路由跳转
    gopage() {
      this.$router.push(this.path);
    }
  }
};
</script>
<style lang="scss" scoped>
</style>