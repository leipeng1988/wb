<template>
  <!-- 底部 -->
  <footer>
    <div class="footerA">
      <img src="../../assets/img/project09.jpg" alt="">
      <span>店铺</span>
    </div>
    <div class="footerA">
      <img src="../../assets/img/project09.jpg" alt="">
      <span>店铺</span>
    </div>
    <div class="footerA">
      <img src="../../assets/img/project09.jpg" alt="">
      <span>店铺</span>
    </div>
    <div class="footerA">
      <img src="../../assets/img/project09.jpg" alt="">
      <span>店铺</span>
    </div>
    <div class="footerA">
      <img src="../../assets/img/project09.jpg" alt="">
      <span>店铺</span>
    </div>
  </footer>
</template>

<script>
    export default {
        name: "sharedFooter"
    }
</script>

<style scoped>

  /* 底部 */
  footer{
    width:100%;
    height:.46rem;
    border-top:1px solid #6e6e6e;
    margin-top:.2rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .footerA{
    width:.27rem;
  }
  .footerA img{
    display: block;
    width:.22rem;
    height:.22rem;
  }
  .footerA span{
    font-size:8px;
    color:#bfbfbf;
    display: block;
  }
</style>
