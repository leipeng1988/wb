<template>
  <!-- 头部 -->
  <header>
    <img src="../../assets/img/detail02.jpg" alt="">
    <span>万表名匠手表维修保养</span>
  </header>
</template>

<script>
    export default {
        name: "protectHeader"
    }
</script>

<style scoped>
  /* 头部 */
  header{
    width:100%;
    height:.4rem;
    border-bottom: 2px solid #d8d8d8;
    display: flex;
    align-items: center;
  }

  header img{
    width:8px;
    height:.17rem;
    margin-left:.15rem;
    margin-right:.87rem;
  }
  header span{
    font-size:.14rem;
    display: block;
  }
</style>
