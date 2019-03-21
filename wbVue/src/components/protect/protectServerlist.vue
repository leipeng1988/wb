<template>
  <!-- 服务列表 -->
  <div class="ser">
    <div class="serverlist">
      <div class="serverlistA">
        <img src="../../assets/img/protect03.jpg" alt="">
        <span>服务指南</span>
      </div>
      <div class="serverlistA">
        <img src="../../assets/img/protect03.jpg" alt="">
        <span>服务指南</span>
      </div>
      <div class="serverlistA">
        <img src="../../assets/img/protect03.jpg" alt="">
        <span>服务指南</span>
      </div>
      <div class="serverlistA">
        <img src="../../assets/img/protect03.jpg" alt="">
        <span>服务指南</span>
      </div>
    </div>
    <div class="serA">
      <div class="serAleft">
        <div class="serAleftA">
          <span>顺丰上门取件</span>
          <span>足不出户，上门报销</span>
        </div>
        <img src="../../assets/img/protect04.jpg" alt="">
      </div>
      <div class="serAleft">
        <div class="serAleftA">
          <span>顺丰上门取件</span>
          <span>足不出户，上门报销</span>
        </div>
        <img src="../../assets/img/protect04.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "protectServerlist"
    }
</script>

<style scoped>
  /* 服务指南 */
  .serverlist{
    display: flex;
    justify-content: space-around;
  }
  .serverlistA{
    width:.55rem;
  }
  .serverlistA img{
    display: block;
    width:.38rem;
    height:.38rem;
    margin:0 auto;
  }
  .serverlistA span{
    display: block;
    font-size:.13rem;
    text-align: center;
    margin-top:.2rem;
  }
  .serA{
    display: flex;
    justify-content: space-around;
    margin-bottom: .15rem;
  }
  .serAleft{
    display: flex;
    width:1.66rem;
    height:.77rem;
    align-items: center;
    justify-content: space-between;
    border-radius: 5px;
    border:1px solid #f2f2f2;
    margin-top:.56rem;
  }
  .serAleftA{
    margin-left:.12rem;
  }
  .serAleftA span:nth-of-type(1){
    font-size:.12rem;
    display: block;
  }
  .serAleftA span:nth-of-type(2){
    font-size:.11rem;
    display: block;
    color:#7f7f7f;
    margin-top:8px;
  }
  .serAleft img{
    display: block;
    width:.32rem;
    height:.32rem;
    border-radius: 50%;
  }
</style>
