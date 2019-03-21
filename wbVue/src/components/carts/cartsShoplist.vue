<template>

  <section>
    <div class="section">
      <carts-shop @add="add"  @shopChecked="shopChecked" :data="shopItem" :sid="sid" v-for="(shopItem,sid ) in data"></carts-shop>
    </div>
  </section>

</template>

<script>
  import cartsShop from "./cartsShop"
    export default {
        name: "cartsShoplist",
      components:{
        cartsShop
      },
      props:["data"],
      methods:{
        shopChecked(sid){
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
  /* 内容 */
  section{
    background: #f1f1f1;
    padding-top: .39rem;
  }

</style>
