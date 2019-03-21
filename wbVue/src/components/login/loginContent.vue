<template>
  <div>
    <div class="content">
      <span>万表</span>
      <span>尊迎阁下光临</span>
      <div class="contentA">
        <input type="text" placeholder="手机号码">
      </div>
      <input type="text" placeholder="验证码">
      <input id="contentB" type="button" value="登录">
    </div>
    <div class="logA">
      <span @click="back">注册账号</span>
      <span>-></span>
    </div>
  </div>

</template>

<script>
    export default {
        name: "loginContent",
      methods:{
          back(){
            this.$router.push("/wbReg");
          }
      }
    }
</script>

<style scoped>
  /* 内容 */
  .content{
    width:100%;
  }
  .content span:nth-of-type(1){
    font-size:.35rem;
    color:#ccaa7a;
    display: block;
    font-weight:700;
    text-align: center;
  }

  .content span:nth-of-type(2){
    font-size:.12rem;
    color:#ccaa7a;
    display: block;
    text-align: center;
    letter-spacing: .15rem;
    margin-top:.15rem;
    margin-bottom: .82rem;
  }
  .content input {
    width:2.9rem;
    height:.56rem;
    display: block;
    margin:0 auto;
    font-size:.13rem;
    color:#fff;
    background: #fff;
    border: 0;
    outline: none;
    border-radius:3px;
    opacity: .4;
    text-indent: .15rem;
    line-height: .56rem;
  }
  .content input:nth-of-type(1){
    margin-bottom: .19rem;
  }
  #contentB{
    background: #34281c;
    border-radius: .28rem;
    border:1px solid #fff;
    margin-top:.38rem;
  }
  .logA span:nth-of-type(1){
    font-size:.12rem;
    display: block;
  }
  .logA span:nth-last-of-type(1){
    font-size:.12rem;
    display: block;
  }

  .logA{
    display: flex;
    margin-left:70%;
    margin-top:.27rem;
  }

  .logA span{
    color:#b2b2b2
  }
</style>
