<template>
  <!-- 搜索 -->
  <div class="search">
    <input type="text" placeholder="搜索">
    <img src="../../assets/img/headerB01.jpg" alt="">
  </div>
</template>

<script>
    export default {
        name: "sharedSearch"
    }
</script>

<style scoped>
  /* 搜索 */
  .search{
    height:.47rem;
    position: relative;
  }
  .search input{
    display: block;
    width:3.5rem;
    height:.28rem;
    background: #f1f1f1;
    border: 0;
    outline: none;
    border-radius: .14rem;
    text-align: center;
    margin:0 auto;
  }
  .search img{
    width:.13rem;
    height:.13rem;
    position: absolute;
    top:8px;
    left:41%;
  }
</style>
