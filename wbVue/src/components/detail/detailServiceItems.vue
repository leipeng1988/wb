<template>
  <!-- 万表服务 -->
  <div class="serviceitem">
    <div class="serviceitemA">
      <p>万表服务</p>
      <div class="serviceitemB">
        <div class="serviceitemC">
          <span><img src="../../assets/img/detail06.jpg"></span>
          <div class="serviceitemD">
            <span>万表名匠</span>
            <span>手表维修诚信平台</span>
          </div>
        </div>
        <img class="serviceitemE" src="../../assets/img/detail07.jpg" alt="">
      </div>
      <div class="serviceitemB">
        <div class="serviceitemC">
          <span><img src="../../assets/img/detail06.jpg"></span>
          <div class="serviceitemD">
            <span>保底回收</span>
            <span>手表维修诚信平台</span>
          </div>
        </div>
        <img class="serviceitemE" src="../../assets/img/detail07.jpg" alt="">
      </div>
      <div class="serviceitemB">
        <div class="serviceitemC">
          <span><img src="../../assets/img/detail06.jpg"></span>
          <div class="serviceitemD">
            <span>共享租赁</span>
            <span>手表维修诚信平台</span>
          </div>
        </div>
        <img class="serviceitemE" src="../../assets/img/detail07.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "detailServiceItems"
    }
</script>

<style scoped>
  /* 万表服务 */
  .serviceitemB{
    display:flex;
    width:3.57rem;
    height:.65rem;
    align-items: center;
    margin:0 auto;
    border-radius: 4px;
    background: #fff;
    justify-content: space-between;
    border-bottom:1px solid #989898;
  }
  .serviceitemD{
    margin-left:.13rem;
  }
  .serviceitemD span:nth-of-type(1){
    font-size:.12rem;
    font-weight:700;
    display: block;
    margin-bottom:5px;
  }

  .serviceitemD span:nth-of-type(2){
    font-size:.1rem;
    display: block;
    color:#989898;
  }
  .serviceitem{
    background: #f1f1f1;
    width:100%;
    height:2.8rem;
  }
  .serviceitemA{
    width:3.57rem;
    height:.65rem;
    margin:0 auto;
    border-radius: 4px;
    background: #fff;
  }
  .serviceitemA p{
    font-size:.15rem;
    font-weight: 700;
    height:.56rem;
    border-bottom: 1px solid #efefef;
    line-height: .56rem;
    margin-left:.17rem;
  }
  .serviceitemC img{
    width:.42rem;
    height:.42rem;
  }
  .serPicA{
    width:8px;
    height:.21rem;
  }
  .serviceitemC{
    display: flex;
    margin-left:.16rem;
  }
  .serviceitemE{
    width:7px;
    height:.16rem;
    margin-right:.15rem;
  }

</style>
