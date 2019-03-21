<template>
  <footer>
    <div class="footer">
      <router-link to="/"><img src="../../assets/img/footer01.jpg" alt=""></router-link>
      <span>首页</span>
    </div>
    <div class="footer">
      <router-link to="/wbMagazine"><img src="../../assets/img/footer02.jpg" alt=""></router-link>
      <span>杂志</span>
    </div>
    <div class="footer">
      <router-link to="wbChoose"><img src="../../assets/img/footer03.jpg" alt=""></router-link>
      <span>选表</span>
    </div>
    <div class="footer">
      <router-link to="wbCarts"><img src="../../assets/img/footer04.jpg" alt=""></router-link>
      <span>购物袋</span>
    </div>
    <div class="footer">
      <router-link to="wbMy"><img src="../../assets/img/footer05.jpg" alt=""></router-link>
      <span>我的</span>
    </div>
  </footer>
</template>

<script>
    export default {
        name: "magazineFooter"
    }
</script>

<style scoped>
  footer{
    height:.47rem;
    background: #fff;
    display: flex;
    justify-content: space-around;
    padding-bottom:5px;
    padding-top:5px;
  }
  .footer{
    width:.4rem;
    text-align: center;
  }
  .footer span{
    display: block;
    font-size:.08rem;
  }
  .footer img{
    margin:0 auto;
    display: block;
    width:.24rem;
    height:.21rem;
    margin-top:6px;
    margin-bottom:5px;
  }
</style>
