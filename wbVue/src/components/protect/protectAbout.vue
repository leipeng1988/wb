<template>
  <!-- 关于我们 -->
  <div class="about">
    <div class="projectA">
      <div class="projectB">
        <span></span>
        <span>关于我们</span>
      </div>
      <img src="../../assets/img/about01.jpg" alt="">
    </div>
  </div>
</template>

<script>
    export default {
        name: "protectAbout"
    }
</script>

<style scoped>
  /* 关于我们 */
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
  .projectA img{
    width:3.45rem;
    height:1.22rem;
    display: block;
    margin:0 auto;
  }
</style>
