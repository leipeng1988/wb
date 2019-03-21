<template>
  <div class="faddish">
    <span>本月爆款</span>
    <span></span>
    <div class="faddishA">
      <img src="../../assets/img/faddish01.jpg" alt="">
    </div>
  </div>
</template>

<script>
    export default {
        name: "indexFaddish"
    }
</script>

<style scoped>
  .faddish span:nth-of-type(1){
    font-size:.14rem;
    display: block;
    text-align: center;
    margin-top:.15rem;
    margin-bottom: .13rem;
  }
  .faddish span:nth-of-type(2){
    display: block;
    width:.24rem;
    height:2px;
    background: #c9a673;
    margin:0 auto;
    margin-bottom:.11rem;
  }
  .faddishA img{
    width:100%;
    height:1.78rem;
  }

</style>
