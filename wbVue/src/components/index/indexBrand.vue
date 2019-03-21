<template>
  <div class="brand">
    <div class="brandA">
      <span>品牌</span>
      <span></span>
      <img src="../../assets/img/brand01.jpg" alt="">
    </div>
    <div class="brandB">
      <div class="brandC">
        <span>浪琴</span>
        <span>LONGINES</span>
      </div>
      <div class="brandC">
        <span>浪琴</span>
        <span>LONGINES</span>
      </div>
      <div class="brandC">
        <span>浪琴</span>
        <span>LONGINES</span>
      </div>
      <div class="brandC">
        <span>浪琴</span>
        <span>LONGINES</span>
      </div>
      <div class="brandC">
        <span>浪琴</span>
        <span>LONGINES</span>
      </div>
      <div class="brandC">
        <span>浪琴</span>
        <span>LONGINES</span>
      </div>
      <div class="brandC">
        <span>浪琴</span>
        <span>LONGINES</span>
      </div>
      <div class="brandC">
        <span>浪琴</span>
        <span>LONGINES</span>
      </div>
      <div class="brandC">
        <span>浪琴</span>
        <span>LONGINES</span>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "indexBrand"
    }
</script>

<style scoped>
  .brandA span:nth-of-type(1){
    display: block;
    font-size:.15rem;
    text-align: center;
  }
  .brandA span:nth-of-type(2){
    display: block;
    width:.23rem;
    height:2.5px;
    background: #ccaa7a;
    margin:0 auto;
    margin-top: .14rem;
  }
  .brandA img{
    width:100%;
    height:2.5rem;
    display: block;
    margin-top: .11rem;
    border-top:1px sold #898888;
    border-bottom:1px sold #898888;
  }
  .brandC{
    width:1.22rem;
    height:.55rem;
    background:-webkit-linear-gradient(top,#f6f6f6,#f9f9f9,#fcfcfc);
    text-align: center;
    padding-top:.21rem;
    border-radius: 3px;
    margin-bottom: 3px;
  }
  .brandC span:nth-of-type(1){
    font-size:.13rem;
    display: block;
  }
  .brandC span:nth-of-type(2){
    font-size:5px;
    color:#b1b1b1;
    display: block;
    margin-top: 6px;
  }
  .brandB{
    padding-top:3px;
    display: flex;
    flex-wrap: wrap;
    justify-content:space-around;
  }

</style>
