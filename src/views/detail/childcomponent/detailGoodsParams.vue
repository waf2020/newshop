<template>
  <div v-if="Object.keys(detailgoodparam).length>0">
    <div class="size">
      <table>
        <tr class="size-tr" v-for="(item,index) in detailgoodparam.sizes[0]" :key="index">
          <td v-for="(item2,index2) in item" :key="index2">{{item2}}</td>
        </tr>
      </table>
    </div>

    <div class="infos">
        <table>
            <tr class="size-tr" v-for="(item,index) in detailgoodparam.infos" :key="index">
              <td>{{item.key}}</td>
              <td>{{item.value}}</td>
            </tr>
        </table>
    </div>
  </div>
</template>
<script>
export default {
  name: "detailGoodsParams",
  props: {
    detailgoodparam: {
      type: Object
    }
  }
};
</script>

<style lang="scss" scoped>
.size {
 margin:0 8px;
 padding-top: 16px;
 //border-top: 3px solid var(--color-border);
}
.infos{
    margin:0 8px;
    border-top: 1px solid var(--color-border);
}
table {
    color: var(--color-text);
    width: 100%;
   border-collapse:collapse;
   font-size: 13px;

}
.size-tr {
     height: 29px;
     border-bottom: 1px solid var(--color-border);
 }
  
  .infos td:last-child{
color: var(--color-hight-text);
  }
 .infos td:first-child{
     width: 20%;
 }
</style>