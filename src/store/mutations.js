export default {
    addcart(state, payload) {
        // let oldProduct=null;
        // for(let item of state.projectlist){
        //   if(item.iid===payload.iid){
        //     oldProduct=item;
        //   }
        // }
        // if(oldProduct){
        //   oldProduct.count+=1
        // }else{
        //   payload.count=1;
        //   state.projectlist.push(payload)
        // }
        //  if(state.projectlist.length>0){
        //   state.projectlist.forEach(function(value,index){
        //     console.log('value.iid='+value.iid);
        //     console.log('payload.iid='+payload.iid);
        //     if(value.iid===payload.iid){
        //       state.projectlist.projectlist[index].count++; 
        //     }
        //     else{
        //       state.projectlist.push(payload);
        //     }
        //   })
        //  }
        //  else{
        //   state.projectlist.push(payload);
        //  }
        payload.checkout=true;
        state.projectlist.push(payload);


    },
    addcount(state, index) {
        state.projectlist[index].count += 1;
    },
    //修改选中状态
    switcCheck(state,index){
        //console.log('进来mutation')
        state.projectlist[index].checkout=! state.projectlist[index].checkout;
    },
    //修改全选状态
    switcCheckAll(state,value){
         for(let item of  state.projectlist){
             item.checkout=value
         }
    }
}