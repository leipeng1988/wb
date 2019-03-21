<template>
  <header>
    <div class="headerA">
      <span class="iconfont icon-saoyisao"></span>
      <img src="../../assets/img/header01.jpg" alt="">
      <span class="iconfont icon-tongzhi"></span>
    </div>
    <div class="headerB">
      <input type="text" placeholder="搜索要找的商品">
      <img src="../../assets/img/headerB01.jpg" alt="">
    </div>
  </header>
</template>

<script>
    export default {
        name: "indexHeader"
    }
</script>

<style scoped>
  header{
    width: 100%;
    height: .83rem;
  }
  .headerA{
    width:100%;
    height:.35rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .headerA span:nth-of-type(1){
    margin-left: .1rem;
  }

  .headerA span:nth-of-type(2){
    margin-right: .12rem;
    transform: rotateZ(-40deg);
  }

  .headerA img{
    width:0.5rem;
    height:.2rem;
  }
  .headerB{
    height:.32rem;
    width:100%;
    position: relative;
    padding-top:8px;
    padding-bottom: .1rem;
  }
  .headerB input{
    display: block;
    width:3.5rem;
    height:.28rem;
    background: #f1f1f1;
    border:0;
    outline: none;
    margin:0 auto;
    border-radius: 3px;
    text-align: center;
    font-size:.1rem;
  }
  .headerB img{
    position: absolute;
    left:1.2rem;
    top:15px;
    width:.12rem;
    height:.11rem;
  }

</style>
