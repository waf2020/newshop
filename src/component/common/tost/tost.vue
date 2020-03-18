<template>
    <div class="tost">
        <span v-show="showtost">{{message}}</span>
    </div>
</template>

<script>
export default {
    name:'tost',
    props:{
        message:{
            type:String,
            default:'这个一个tost '
        },
        showtost:{
            type:Boolean,
            default:false
        }
    }
}
</script>

<style lang="scss" scoped>
.tost {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
</style>