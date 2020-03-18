export default {
    addcartsA(context, temp) {
        return new Promise((resolve, reject) => {
            if (context.state.projectlist.length > 0) {

                let isindex = null;
                for (let i = 0; i < context.state.projectlist.length; i++) {
                    if (context.state.projectlist[i].iid === temp.iid) {
                        isindex = i;
                        break;
                    }
                }

                if (isindex !== null) {

                    context.commit('addcount', isindex);
                    resolve('商品数量加1')
                } else {
                    context.commit('addcart', temp)
                    resolve('添加到购物车成功')
                }


            } else {
                context.commit('addcart', temp)
                resolve('添加到购物车成功')
            }
            reject('222')
        })


    }
}