<template>
  <section>
    <input type="text" placeholder="手机号">
    <input type="text" placeholder="短信验证码">
    <input type="text" placeholder="设置密码">
    <input class="reg" type="button" value="注册">
    <div class="agreement">点击注册意味着您同意<span>《万表用户协议》</span></div>
  </section>
</template>

<script>
    export default {
        name: "regSection"
    }
</script>

<style scoped>
  /* 内容 */
  section input{
    font-size:.12rem;
    color:#d5d5d5;
    border:0;
    outline: none;
    width:3.22rem;
    height:.33rem;
    display: block;
    border-bottom: 2px solid #f1f1f1;
    margin:0 auto;
    margin-bottom: .17rem;
    text-indent: .15rem;
  }
  .reg{
    height:.41rem;
    color:#fff;
    margin-top:.38rem;
  }
  .agreement{
    font-size:.12rem;
    margin-left:20%;
    margin-top:.3rem;
  }
  .agreement span{
    color:#cfae80;
  }
</style>
