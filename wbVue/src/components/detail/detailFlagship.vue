<template>
  <div>
  <!-- 旗舰店 -->
  <div class="flagship">
    <div class="flagshipB">
      <div class="flagshipC">
        <span><img src="../../assets/img/detail08.jpg"></span>
        <div class="flagshipE">
          <span>瑞士爱宝石官方旗舰店</span>
        </div>
      </div>
      <img class="flagshipF" src="../../assets/img/detail07.jpg" alt="">
    </div>
    <div class="flagshipG">
      <div class="fans">
        <span>1.4万</span>
        <span>粉丝数</span>
      </div>
      <div class="fans">
        <span>1.4万</span>
        <span>粉丝数</span>
      </div>
      <div class="fans">
        <span>1.4万</span>
        <span>粉丝数</span>
      </div>
    </div>
  </div>
  <!-- 上拉查看详情 -->
  <div class="pull">
    <div class="pullA">
      <img src="../../assets/img/detail09.jpg" alt="">
      <span>上拉查看详情</span>
    </div>
  </div>
  </div>
</template>

<script>
    export default {
        name: "detailFlagship"
    }
</script>

<style scoped>
  /* 旗舰店 */
  .flagshipB{
    display: flex;
    background: #fff;
    width:3.56rem;
    margin: 0 auto;
    justify-content: space-between;
  }
  .flagshipC{
    display: flex;
    margin-left:.16rem;
  }
  .flagship{
    background: #f1f1f1;
    width:100%;
    height:1.88rem;
  }
  .flagshipE{
    margin-top:.2rem;
    font-size:.12rem;
    color:black;
    margin-left:.12rem;
  }
  .flagshipC img{
    width:.59rem;
    height:.57rem;
  }
  .flagshipF{
    width:8px;
    height:.16rem;
    margin-top:.2rem;
    margin-right:.16rem;
  }
  .flagshipG{
    display: flex;
    justify-content: space-around;
    background: #fff;
    width:3.56rem;
    margin: 0 auto;
    padding-top:.11rem;
    padding-bottom: .12rem;
  }
  .fans span:nth-of-type(1){
    font-size:.14rem;
    font-weight:800;
    color:#dec9aa;
    display: block;
  }
  .fans span:nth-of-type(2){
    font-size:.1rem;
    color:#868686;
    display: block;
  }


  /* 上拉查看详情 */
  .pull{
    width:100%;
    background: #f1f1f1;
  }
  .pullA{
    display: flex;
    margin-left:1.4rem;
  }
  .pullA img{
    width:.14rem;
    height:.15rem;
    display: block;
  }
  .pullA span{
    display: block;
    font-size:.1rem;
    color:#4e4e4e;
  }

</style>
