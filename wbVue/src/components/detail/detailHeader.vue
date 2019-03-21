<template>
  <!-- 头部 -->
  <header>
    <img src="../../assets/img/detail02.jpg" alt="">
    <img src="../../assets/img/detail03.jpg" alt="">
  </header>
</template>

<script>
    export default {
        name: "detailHeader"
    }
</script>

<style scoped>
  /* 头部 */
  header{
    width:100%;
    height:.38rem;
    display: flex;
    position: fixed;
    justify-content: space-between;
    align-items: center;
  }
  header img:nth-of-type(1){
    display: block;
    height:.18rem;
    width:.13rem;
    margin-left:.14rem;
  }
  header img:nth-of-type(2){
    display: block;
    height:.17rem;
    width:.18rem;
    margin-right:.14rem;
  }
</style>
