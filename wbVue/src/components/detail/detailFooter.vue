<template>
  <!-- 底部 -->
  <footer>
    <div class="footerLeft">
      <div class="footerLeftA">
        <img src="../../assets/img/server.jpg" alt="">
        <span>客服</span>
      </div>
      <div class="footerLeftA">
        <img src="../../assets/img/footer04.jpg" alt="">
        <span>购物袋</span>
      </div>
    </div>
    <div class="footerRight">
      <span>加入购物袋</span>
      <span>立即购买</span>
    </div>
  </footer>
</template>

<script>
    export default {
        name: "detailFooter"
    }
</script>

<style scoped>
  /* 底部 */
  footer{
    width:100%;
    height:.63rem;
    border-top:1px solid #d9d9d9;
    display: flex;
    justify-content: space-between;
  }
  .footerLeftA{
    width:.4rem;
    text-align: center;
  }

  .footerLeftA img{
    margin:0 auto;
    display: block;
    width:.22rem;
    height:.18rem;
  }
  .footerLeftA span{
    margin:0 auto;
    display: block;
    font-size:9px;
  }
  .footerLeft{
    height:.63rem;
    display: flex;
    align-items: center;
    width:.9rem;
    justify-content: space-between;
    margin-left:.2rem;
  }
  .footerRight{
    display: flex;
    align-items: center;
    margin-right:.11rem;
  }
  .footerRight span{
    display: block;
    width:1.05rem;
    height:.32rem;
    font-size:.13rem;
    color:#fff;
    text-align: center;
    line-height: .32rem;
  }
  .footerRight span:nth-of-type(1){
    background: #777371;
    border-bottom-left-radius: 2px;
    border-top-left-radius: 2px;
  }
  .footerRight span:nth-of-type(2){
    background: #e45b5b;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
  }
</style>
