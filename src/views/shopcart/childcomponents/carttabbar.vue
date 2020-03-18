<template>
    <div>
        <navbar>
            <span slot="center">购物车{{cartlistlen}}</span>
        </navbar>
    </div>
</template>
<script>
import navbar from '@/component/common/navbar/navbar'
import {mapGetters} from 'vuex'
export default {
    name:'carttabbar',
    components:{
        navbar
    },
    computed:{
        ...mapGetters(['cartlistlen'])
    }
}
</script>