<template>
  <div class="carList">
    <carts-goods @add="add" :data="goods" :pid="pid" :sid="sid" v-for="(goods,pid) in data"></carts-goods>
  </div>
</template>

<script>
  import cartsGoods from "./cartsGoods"
    export default {
        name: "cartsGoodslist",
      components:{
        cartsGoods
      },
      props:["data","sid"],
      methods:{
          add(sid,pid){
            console.log("2");
            this.$emit("add",sid,pid);
          }
      }
    }
</script>

<style scoped>
  .carList{
    display: flex;
    align-items: center;
    background: #fff;
    flex-wrap: wrap;
    margin-bottom:10px;
  }

</style>
