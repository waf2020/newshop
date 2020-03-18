import {basequest} from './request'

export function getdetailByiid(data){
 return basequest(
     {
     url:'/detail',
     params:{
         iid:data}

     }
 )
    }

    export function getCommends(){
        return basequest({
            url:'/recommend'
        })
    }

   