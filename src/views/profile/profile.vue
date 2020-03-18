<template>
    <div>
        <!-- {{$store.getters.agemore20}} -->
        <!-- {{$store.getters.moreAgeStu(20)}}
        --------
        {{$store.getters.more20stu}} -->


        <!-- {{$store.state.students}} -->
      
        {{$store.state.info}}
        <button @click="addstudents">添加属性</button>
    </div>
</template>
<script>
export default {
    name:'profile',
    methods: {
        addstudents(){
            // let stu={ id: 1, name: 'bbb', age: 19};
            // this.$store.commit('addstu',stu);
            let temp={height:'ss'}
            // this.$store.commit('updateInfo',temp)
            this.$store.dispatch('aupdateInfo',temp);
        }
    },
}
</script>

<style lang="scss" scoped>

</style>