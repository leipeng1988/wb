<template>
  <!-- 头部 -->
  <header>
    <span>X</span>
    <span>注册</span>
  </header>
</template>

<script>
    export default {
        name: "loginHeader"
    }
</script>

<style scoped>
  /* 头部 */
  header{
    display: flex;
    justify-content: space-between;
    margin-top:.16rem;
    padding-left: .2rem;
    padding-right:.2rem;
    margin-bottom:.46rem;
  }
  header span{
    display: block;
    font-size:.12rem;
    color:#fff;
    opacity: .5;
  }
</style>
