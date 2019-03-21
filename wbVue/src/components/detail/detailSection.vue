<template>
  <!-- 商品详情 -->
  <section>
    <div class="prodet">
      <p><img src="../../assets/img/detail01.jpg" alt=""></p>
      <div class="proDats">
        <div class="proData">
          <span class="proDataA">￥5770</span>
          <span class="proDataB">￥9300</span>
        </div>
        <div class="proDataR">
          <img src="../../assets/img/detail04.jpg" alt="">
          <span>收藏</span>
        </div>
      </div>
    </div>
    <div class="goods">
      <p>瑞士爱宝石情感，机械男表</p>
      <p><span>万表自营&nbsp &nbsp/</span><span>&nbsp &nbsp竭尽繁华，保留腕表原有的魅力 渐变太阳纹表盘 简约不简单</span></p>
    </div>
    <div class="post">
      <span>顺丰包邮</span><span>销量(4997)</span>
    </div>
  </section>
</template>

<script>
    export default {
        name: "detailSection"
    }
</script>

<style scoped>
  /* 商品详情 */
  .prodet img{
    margin:0 auto;
    display: block;
    width:2.22rem;
    height:4.2rem;
  }
  .proData{
    display:flex;
  }
  .proData span:nth-of-type(1){
    font-size:.16rem;
    color:#cc9951;
    display: block;
    margin-left:.2rem;
  }
  .proData span:nth-of-type(2){
    font-size:.11rem;
    color:#8d8d8d;
    text-decoration: line-through;
    display: block;
    margin-top:.05rem;
    margin-left:7px;
  }
  .prodet .proDataR img{
    display: block;
    width:.2rem;
    height:.14rem;
  }
  .prodet .proDataR span{
    font-size:.09rem;
    display: block;
  }
  .proDats{
    display: flex;
    justify-content: space-between;
    margin-bottom:.14rem;
  }
  .proDataR{
    margin-right:.2rem;
  }
  .goods p:nth-of-type(1){
    font-size:.14rem;
    font-weight: 700;
  }
  .goods p:nth-of-type(2) span:nth-of-type(1){
    font-size:.11rem;
    color:#8f8f8f;
    display: block;
    width:.8rem;
  }
  .goods p:nth-of-type(2) span:nth-of-type(2){
    font-size:.11rem;
    color:#c78e40;
    display: block;
  }
  .goods p:nth-of-type(2){
    display: flex;
    margin-top:.1rem;
  }
  .goods{
    margin-left:.18rem;
    margin-right:.3rem;
  }
  .post{
    display: flex;
    justify-content: space-between;
    margin:.12rem .2rem .2rem .2rem;
  }
  .post span{
    font-size:.1rem;
    color:#838383;
  }

</style>
