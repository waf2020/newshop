export class GoodsInfo {
    constructor(itemInfo, columns, services) {
        this.title = itemInfo.title;
        this.desc = itemInfo.desc;
        this.newPrice = itemInfo.price;
        this.oldPrice = itemInfo.oldPrice;
        this.discount = itemInfo.discountDesc;
        this.columns = columns;
        this.services = services;
        this.realPrice = itemInfo.lowNowPrice;
    }
}

export class shopInfo{
    constructor(shopinfo){
         this.logo=shopinfo.shopLogo;
         this.name=shopinfo.name;
         this.fans=shopinfo.cFans;
         this.sells=shopinfo.cSells;
         this.score=shopinfo.score;
         this.goodsCount=shopinfo.cGoods
    }
}

export class GoodsParam{
    constructor(info,rule){
     this.image=info.image ?info.images[0] :'';
     this.infos=info.set;
     this.sizes=rule.tables;
    }
}