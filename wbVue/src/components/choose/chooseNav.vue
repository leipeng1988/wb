<template>
  <!-- 搜索框 -->
  <nav>
    <input type="text" placeholder="搜索型号、系列、品牌">
    <img src="../../assets/img/headerB01.jpg" alt="">
  </nav>
</template>

<script>
    export default {
        name: "chooseNav"
    }
</script>

<style scoped>
  /* 头部 */
  nav{
    width:100%;
    height:.41rem;
    position: relative;
    border-bottom:1px solid #d7d7d7;
  }

  nav input{
    display: block;
    width:3.5rem;
    height:.3rem;
    border: 0;
    outline: none;
    font-size:.1rem;
    background: #f1f1f1;
    border-radius: .15rem;
    margin: 6px auto;
    text-indent: .26rem;
  }
  nav img{
    position: absolute;
    width:.12rem;
    height:.12rem;
    left:.2rem;
    top:.15rem;
  }
</style>
