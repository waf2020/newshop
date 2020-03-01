import {basequest} from './request.js'

export function getMultidata(){
    return basequest({
        url:'/home/multidata'
    })
}

//商品数据
export function getGoods(type,page){
    return basequest({
        url:'/home/data',
        params:{
            type:type,
            page:page
        }
    })
}