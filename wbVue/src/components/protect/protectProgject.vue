<template>
  <!-- 服务项目 -->
  <div class="project">
    <div class="projectA">
      <div class="projectB">
        <span></span>
        <span>服务项目</span>
      </div>
    </div>
    <div class="fser">
      <div class="fserA">
        <img src="../../assets/img/project05.jpg" alt="">
        <span>快速服务</span>
        <span>截表带，表扣松弛</span>
      </div>
      <div class="fserA">
        <img src="../../assets/img/project05.jpg" alt="">
        <span>快速服务</span>
        <span>截表带，表扣松弛</span>
      </div>
      <div class="fserA">
        <img src="../../assets/img/project05.jpg" alt="">
        <span>快速服务</span>
        <span>截表带，表扣松弛</span>
      </div>
      <div class="fserA">
        <img src="../../assets/img/project05.jpg" alt="">
        <span>快速服务</span>
        <span>截表带，表扣松弛</span>
      </div>
      <div class="fserA">
        <img src="../../assets/img/project05.jpg" alt="">
        <span>快速服务</span>
        <span>截表带，表扣松弛</span>
      </div>

    </div>
  </div>
</template>

<script>
    export default {
        name: "protectProgject"
    }
</script>

<style scoped>
  /* 服务项目 */
  .project{
    background: #f1f1f1;
    padding-top:.14rem;
    padding-bottom: .14rem;
  }
  .projectA{
    background: #fff;
  }
  .projectB{
    height:.35rem;
    display: flex;
    align-items: center;
  }
  .projectB span:nth-of-type(1){
    display: block;
    width: 4px;
    height:.15rem;
    border-radius: 2px;
    background:#cbaf94;
    margin-right:.12rem;
  }
  .projectB span:nth-of-type(2){
    font-size: .14rem;
    font-weight: 800;
    display: block;
  }
  .fser{
    display: flex;
    overflow-x: auto;
    background: #fff;
  }
  .fserA{
    width:1.25rem;
    height:1.35rem;
    border:1px solid #ededed;
    border-radius: 6px;
    margin-left:.15rem;
    flex-shrink: 0;
  }
  .fserA img{
    width:.54rem;
    height:.54rem;
    border-radius: 50%;
    margin:0 auto;
    margin-top:10px;
    margin-bottom:12px;
  }
  .fserA span{
    text-align: center;
  }
  .fserA span:nth-of-type(1){
    display: block;
    font-size:.13rem;
    margin-bottom:10px;
  }
  .fserA span:nth-of-type(2){
    display: block;
    font-size:.11rem;
    color:#6e6e6e;
  }

</style>
