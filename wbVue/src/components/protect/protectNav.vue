<template>
  <!-- 导航 -->
  <nav>
    <div class="nav">
      <img src="../../assets/img/protect01.jpg" alt="">
      <span>未知</span>
      <img src="../../assets/img/my04.jpg" alt="">
    </div>
    <span class="navA">万表名匠</span>
    <img class="navB" src="../../assets/img/prttect02.jpg" alt="">
  </nav>
</template>

<script>
    export default {
        name: "protectNav"
    }
</script>

<style scoped>
  /* 导航栏 */
  nav{
    width:100%;
    height:.41rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom:.19rem;
  }
  .nav img:nth-of-type(1){
    width:.12rem;
    height:.13rem;
    display: block;
    margin-right: 6px;
  }
  .nav span{
    display: block;
    font-size:.12rem;
    margin-right: 6px;
  }
  .nav img:nth-of-type(2){
    display: block;
    width:6px;
    height:.1rem;
  }
  .nav{
    display: flex;
    width:.61rem;
    align-items:center;
    margin-left:9px;
  }
  .navA{
    display: block;
    font-size: .18rem;
    color:#794821;
    font-weight:700;
  }
  .navB{
    display: block;
    width:.35rem;
    height:.35rem;
    border-radius: 50%;
    margin-right:7px;
  }

</style>
