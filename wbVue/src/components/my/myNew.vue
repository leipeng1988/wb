<template>

  <!-- 新用户 -->
  <header @scroll="show()">
    <div class="headerA">
      <div class="headerAleft">
        <img src="../../assets/img/my03.jpg" alt="">
      </div>
      <div class="headerAright">
        <div class="headerArightA">
          <span @click="reg">注册&nbsp/</span>
          <span @click="log">&nbsp登录</span>
        </div>
        <div class="headerArightB">
          <p>新用户注册送3500元现金券</p>
        </div>
      </div>

    </div>
    <div class="navA">
      <div class="nav">
        <span>￥ 0</span>
        <span>余额</span>
      </div>
      <div class="nav">
        <span> 0</span>
        <span>优惠券</span>
      </div>
      <div class="nav">
        <span>0</span>
        <span>积分</span>
      </div>
    </div>
  </header>
</template>

<script>
    export default {
        name: "myNew",
      methods:{
          reg(){
            this.$router.push("/wbReg");
          },
         log(){
            this.$router.push("/wbLogin");
         },
        show(){
          this.$emit("show","我的")
        }
      }
    }
</script>

<style scoped>
  .headerA{
    background: black;
    display: flex;
    padding-top:.17rem;
    height:1.3rem;
    position: relative;
  }
  .headerArightA{
    display: flex;
    margin-top:.14rem;
  }
  .headerAleft img{
    display: block;
    width:.69rem;
    height:.69rem;
    border-radius: 50%;
    margin-left:.28rem;
    margin-right:.18rem;
  }
  .headerArightA span{
    font-size:.14rem;
    color:#fff;
    display: block;
  }
  .headerArightB p{
    font-size:.1rem;
    color:#c6c4a3;
    border:1px solid #3e3e3e;
    border-radius: .21rem;
    width:1.59rem;
    height:.21rem;
    text-align: center;
    line-height: .21rem;
    margin-top:6px;
  }

  /* 金额 积分 */
  .navA{
    width:3.53rem;
    height:.62rem;
    border-radius: 6px;
    position: absolute;
    top:1.64rem;
    background: #fff;
    margin-left:10px;
    font-size:.11rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-shadow: #e5e5e5 6px 6px 6px;
  }
  .navA .nav span{
    display: block;
  }
  .navA .nav span:nth-of-type(1){
    font-weight: 700;
    text-align: center;
    margin-bottom: 10px;
  }

</style>
