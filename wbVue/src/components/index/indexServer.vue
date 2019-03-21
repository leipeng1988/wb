<template>
  <div class="server">
    <span>尊享服务</span>
    <span></span>
    <img src="../../assets/img/server01.jpg" alt="">
  </div>
</template>

<script>
    export default {
        name: "indexServer"
    }
</script>

<style scoped>
  .server img{
    width:100%;
    height:1.2rem;
    margin-bottom:.2rem;
  }
  .server span:nth-of-type(1){
    font-size:.14rem;
    display: block;
    text-align: center;
    margin-top:.38rem;
    margin-bottom: .13rem;

  }

  .server span:nth-of-type(2){
    display: block;
    width:.24rem;
    height:2px;
    background: #c9a673;
    margin:0 auto;
    margin-bottom:.11rem;
  }

</style>
