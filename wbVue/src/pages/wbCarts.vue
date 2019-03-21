<template>
    <div>
      <carts-header></carts-header>
      <carts-shoplist  @add="addNum" @shopChecked="shopAllChecked" v-if="cartsData.shops" :data="cartsData.shops"></carts-shoplist>
      <carts-total :data="cartsData" @cartsChecked="cartsAllChecked"></carts-total>
      <carts-footer></carts-footer>
    </div>
</template>

<script>
  import cartsHeader from "../components/carts/cartsHeader"
  import cartsShoplist from "../components/carts/cartsShoplist"
  import cartsFooter from "../components/carts/cartsFooter"
  import cartsTotal from "../components/carts/cartsTotal"
  import wbCartsApi from "../apis/wbCarts"
    export default {
        name: "wbCarts",
      components:{
        cartsHeader,
        cartsShoplist,
        cartsFooter,
        cartsTotal
      },
      data(){
          return{
            cartsData:{}
          }
      },
      methods:{

          _initData(){
            wbCartsApi.getwbCartsInfo(data=>{
              console.log(data);
              this.cartsData=data;
              //页面刷新时计算总价
              this._counteTotalmoney();
            })
          },

        _counteTotalmoney(){
            let totalPrice=0;
            let price=0;
              this.cartsData.shops.forEach((shop,sid)=>{
                shop.products.forEach((goods,pid)=>{
                  if(goods.checked){
                    totalPrice+=goods.nprice*goods.attrs.numbers;
                    price+=goods.oprice*goods.attrs.numbers;
                  }
                })
              })
          this.cartsData.totalPrice=totalPrice;
          this.cartsData.price=price;
        },

        shopAllChecked(sid){
          console.log(sid);
          let checked=this.cartsData.shops[sid].checked;
          this.cartsData.shops[sid].products.forEach((goods,pid)=>{
              goods.checked=checked;
          })
        },

        cartsAllChecked(){
          let checked=this.cartsData.checked;
          this.cartsData.shops.forEach((shop,sid)=>{
            shop.checked=checked;
            shop.products.forEach((goods,pid)=>{
                goods.checked=checked;
            })
          })
        },

        addNum(sid,pid){
            console.log(sid,pid);
            this.cartsData.shops[sid].products[pid].attrs.numbers++;
        }

      },


      created(){
          this._initData();
      },


      watch:{
          cartsData:{
            deep:true,
            handler: function(n,o){
                this._counteTotalmoney();
                }
          }
      },


    }
</script>

<style scoped>

</style>
