<template>
  <!-- 头部 -->
  <header>
    <div class="header">
      <img @click="back" src="../../assets/img/reg01.jpg" alt="">
      <p>注册万表会员</p>
      <p>有账号？<span>去登陆</span></p>
    </div>
  </header>
</template>

<script>
    export default {
        name: "regHeader",
      methods:{
          back(){
            this.$router.push("/wbMy")
          }
      }
    }
</script>

<style scoped>
  /* 头部 */
  .header img{
    display: block;
    width:.11rem;
    height:.17rem;
    margin-top:.15rem;
    margin-left:.15rem;
    margin-bottom: .44rem;
  }
  .header p{
    text-align: center;
    font-size:.2rem;
    margin-bottom: .2rem;
  }
  .header p:nth-of-type(2){
    font-size:.11rem;
    margin-bottom:.32rem;
  }
  .header span{
    font-size:.11rem;
  }

</style>
