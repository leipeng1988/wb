<template>

  <div class="sale">
    <div class="saleA">
      <span>闪购</span>
      <span></span>
    </div>
    <img src="../../assets/img/sale01.jpg" alt="">
    <div class="saleC">
      <div class="saleB" :key="index" v-for="(i,index) of sales">
        <img :src="i.simg">
        <span>{{i.stitle}}</span>
        <span>闪购</span>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "indexSale",
      props:["sales"]
    }
</script>

<style scoped>
  .saleA span:nth-of-type(1){
    font-size:.14rem;
    display: block;
    text-align: center;
    margin-top:.15rem;
    margin-bottom: .13rem;
  }
  .saleA span:nth-of-type(2){
    display: block;
    width:.24rem;
    height:2px;
    background: #c9a673;
    margin:0 auto;
    margin-bottom:.11rem;
  }
  .sale img{
    height:2.5rem;
    width:100%;
  }
  .saleB{
    margin:0px .2rem;
    width:1.12rem;
    text-align: center;
  }
  .saleB img{
    margin-top:.35rem;
    width:1.12rem;
    height:1.15rem;
    display: block;
  }
  .saleB span:nth-of-type(1){
    font-size:.11rem;
    color:#c8312e;
    display: block;
    margin-top: .14rem;
    margin-bottom:7px;
  }
  .saleB span:nth-of-type(2){
    font-size:.11rem;
    color:#d15654;
    display: block;
    width:.32rem;
    height:.18rem;
    border:1px solid #d15654;
    text-align: center;
    line-height: .18rem;
    border-radius: 3px;
    margin:0 auto;
  }
  .saleC{
    display: flex;
    overflow-x: auto;
  }
</style>
