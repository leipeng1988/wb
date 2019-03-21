<template>
  <div class="content">
      <div class="contentA" v-for="(i,index) of magCont">
        <img :src="i.mimg">
        <p>{{i.mword}}</p>
        <p>{{i.msp}}</p>
      </div>
  </div>
</template>

<script>
    export default {
        name: "magazineContent",
      props:["magCont"]
    }
</script>

<style scoped>
  .content{
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
  }
  .content .contentA{
    padding-bottom:.2rem;
    width:3.5rem;den
    margin-left:15px;
    border-radius: 5px;
    box-shadow: #eeeeee 5px 5px 10px;
  }
  .contentA img{
    width:3.5rem;
    height:2.06rem;
    margin:0 auto;
  }
  .contentA p:nth-of-type(1){
    font-size:.17rem;
    margin: .21rem .32rem;
    line-height: .28rem;
  }
  .contentA p:nth-of-type(2){
    font-size:.11rem;
    color:#626262;
    line-height: .32rem;
    margin: .21rem .32rem;
  }


</style>
