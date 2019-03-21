<template>
  <div class="content">
    <div class="sectionC">
      <div class="sectionA">
        <input type="checkbox" v-model="data.checked" @change="shopAllSelected(sid)">
        <span>{{data.shopName}}</span>
      </div>
      <span class="sectionB">领券</span>
    </div>
    <carts-goodslist @add="add" :data="data.products" :sid="sid"></carts-goodslist>
  </div>

</template>

<script>
  import cartsGoodslist from "./cartsGoodslist"
    export default {
        name: "cartsShop",
      components:{
        cartsGoodslist
      },
      props:["data","sid"],
      methods:{
        shopAllSelected(sid){
          console.log(sid);
          this.$emit("shopChecked",sid)
        },
        add(sid,pid){
          console.log("2");
          this.$emit("add",sid,pid);
        }
      }
    }
</script>

<style scoped>
  .sectionA input{
    display:block;
  }
  .sectionA{
    display: flex;
    justify-content: space-between;
    width:1.72rem;
  }
  .section input{
    display: block;
    margin-left:.18rem;
    margin-top:3px;
  }
  .section span{
    font-size:.13rem;
    display: block;
  }
  .sectionB{
    font-size:.11rem;
    color:#d52b2b;
    display: block;
    margin-right:.17rem;
  }
  .sectionC{
    display: flex;
    justify-content: space-between;
    height:.38rem;
    align-items: center;
    background: #fff;
    border-bottom:1px solid #eee;
  }

</style>
