<template>
  <!-- 订单    -->
  <div class="order">
    <div class="orderA">
      <span class="orderC">我的订单</span>
      <div class="orderB">
        <span>全部订单</span>
        <img src="../../assets/img/my04.jpg">
      </div>
    </div>
    <div class="orderList">
      <div class="orderListA">
        <img src="../../assets/img/my05.jpg">
        <span>待评价</span>
      </div>
      <div class="orderListA">
        <img src="../../assets/img/my05.jpg">
        <span>待评价</span>
      </div>
      <div class="orderListA">
        <img src="../../assets/img/my05.jpg">
        <span>待评价</span>
      </div>
      <div class="orderListA">
        <img src="../../assets/img/my05.jpg">
        <span>待评价</span>
      </div>
    </div>
    <div class="orderPic">
      <img src="../../assets/img/my06.jpg" alt="">
    </div>
  </div>
</template>

<script>
    export default {
        name: "myOrder"
    }
</script>

<style scoped>
  /* 我的订单 */
  .orderA{
    width:100%;
    height:.75rem;
    display: flex;
    justify-content: space-between;
    border-bottom:1px solid #f6f6f6;
  }
  .orderC{
    display: block;
    font-size:.11rem;
    margin-top:.5rem;
    margin-left:.12rem;
    font-weight: 800;
  }
  .orderB{
    display: flex;
    justify-content: space-between;
    margin-right:7px;
  }
  .orderB span{
    display: block;
    font-size:.1rem;
    color:#b6b6b6;
    margin-top:.5rem;
  }
  .orderB img{
    width:7px;
    height:.12rem;
    display: block;
    margin-top:.52rem;
    margin-left:8px;
  }

  .orderList{
    height:.74rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .orderListA span{
    font-size:.1rem;
    display: block;
    text-align: center;
  }

  .orderListA img{
    width:.22rem;
    height:.22rem;
    display: block;
    margin:0 auto;
  }
  .orderListA {
    width:.4rem;
    height:.5rem;
  }

  .orderPic{
    width:100%;
    height:.98rem;
    background: #f1f1f1;
    padding-top:.08rem;
  }
  .orderPic img{
    height:.9rem;
    width:100%;
    display:block;
  }

</style>
