<template>
  <!-- 我的服务 -->
  <div class="mServer">
    <p>我的服务</p>
    <div class="mServerA">
      <div class="mserverB">
        <img src="../../assets/img/my07.jpg" alt="">
        <span>私人顾问</span>
      </div>
      <div class="mserverB">
        <img src="../../assets/img/my07.jpg" alt="">
        <span>私人顾问</span>
      </div>
      <div class="mserverB">
        <img src="../../assets/img/my07.jpg" alt="">
        <span>私人顾问</span>
      </div>
      <div class="mserverB">
        <img src="../../assets/img/my07.jpg" alt="">
        <span>私人顾问</span>
      </div>
      <div class="mserverB">
        <img src="../../assets/img/my07.jpg" alt="">
        <span>私人顾问</span>
      </div>
      <div class="mserverB">
        <img src="../../assets/img/my07.jpg" alt="">
        <span>私人顾问</span>
      </div>
      <div class="mserverB">
        <img src="../../assets/img/my07.jpg" alt="">
        <span>私人顾问</span>
      </div>
      <div class="mserverB">
        <img src="../../assets/img/my07.jpg" alt="">
        <span>私人顾问</span>
      </div>
      <div class="mserverB">
        <img src="../../assets/img/my07.jpg" alt="">
        <span>私人顾问</span>
      </div>
      <div class="mserverB">
        <img src="../../assets/img/my07.jpg" alt="">
        <span>私人顾问</span>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "myServer"
    }
</script>

<style scoped>
  /* 我的服务 */
  .mServer p{
    font-size:.12rem;
    font-weight: 600;
    height:.38rem;
    border-bottom: 1px solid #eee;
    line-height: .38rem;
    margin-left:.12rem;
  }
  .mserverB{
    width:.58rem;
    flex-shrink: 0;
    margin:0 .17rem;
  }
  .mserverB img{
    margin-top:.22rem;
    display: block;
    height:.33rem;
    width:.33rem;
    margin-bottom:.23rem;
  }
  .mserverB span{
    display: block;
    font-size:.1rem;
  }
  .mServerA{
    display: flex;
    flex-wrap: wrap;
  }
</style>
