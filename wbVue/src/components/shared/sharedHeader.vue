<template>
  <!-- 头部 -->
  <header>
    <img src="../../assets/img/detail02.jpg" alt="">
    <span>共享租赁</span>
  </header>
</template>

<script>
    export default {
        name: "sharedHeader"
    }
</script>

<style scoped>
  /* 头部 */
  header{
    width:100%;
    height:.47rem;
    display: flex;
    align-items: center;
  }

  header img{
    width:8px;
    height:.17rem;
    margin-left:.15rem;
    margin-right:.87rem;
  }
  header span {
    font-size: .14rem;
    display: block;
  }
</style>
