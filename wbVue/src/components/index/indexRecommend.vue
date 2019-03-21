<template>
  <div class="recommend">
    <div class="recommendA">
      <span></span>
      <span>为您推荐</span>
      <span></span>
    </div>
    <div class="recommendPic">
      <div class="recommendPicA" :key="index" v-for="(i,index) of recos">
        <img :src="i.cimg">
        <p><span>{{i.ctitle}}</span><span>{{i.cdetail}}}</span></p>
        <p>力洛克</p>
        <p>￥{{i.cpri}}</p>
      </div>
    </div>
    <div class="recommendSp">
    </div>
  </div>
</template>

<script>
    export default {
        name: "indexRecommend",
      props:["recos"]
    }
</script>

<style scoped>
  .recommendA{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: .28rem;
  }
  .recommendA span:nth-of-type(1){
    display: block;
    width:1.35rem;
    height:1px;
    background: #e9e9e9;
  }

  .recommendA span:nth-of-type(2){
    width:.73rem;
    font-size:.11rem;
    color:#acacac;
    display: block;
    text-align: center;
  }
  .recommendA span:nth-of-type(3){
    display: block;
    width:1.35rem;
    height:1px;
    background: #e9e9e9;
  }
  .recommendPic{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-bottom:.15rem;
  }
  .recommendPicA{
    width:1.45rem;
    text-align: center;
  }
  .recommendPicA img{
    display: block;
    width:1.35rem;
    height:2.31rem;
    margin:0 auto;
  }

  .recommendPicA p{
    font-size:.11rem;
    line-height: .2rem;
  }
  .recommendSp{
    width:100%;
    height:.29rem;
    background: #f1f1f1;
  }

</style>
