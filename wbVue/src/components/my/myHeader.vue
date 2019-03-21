<template>
  <!-- 头部 -->
  <div class="header">
    <img src="../../assets/img/my01.jpg" alt="">
    <span class="myA"></span>
    <img src="../../assets/img/my02.jpg" alt="">
  </div>
</template>

<script>
    export default {
        name: "myHeader",
        methods:{

        }
    }
</script>

<style scoped>
  /* 头部 */
  .header{
    width:100%;
    height:.48rem;
    background: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header span{
    font-size:.12rem;
    display: none;
    color:#fff;
  }
  .header img:nth-of-type(1){
    display: block;
    width:.16rem;
    height:.16rem;
    margin-left:.14rem;
  }
  .header img:nth-of-type(2){
    display: block;
    width:.2rem;
    height:.19rem;
    margin-right:.14rem;
  }
</style>
