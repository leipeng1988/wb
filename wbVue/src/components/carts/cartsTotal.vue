<template>
  <!-- 结算 -->
  <div class="total">
    <div class="totalLeft">
      <input type="checkbox" v-model="data.checked" @change="cartsChecked">
      <span>全选</span>
    </div>
    <div class="totalRight">
      <div class="totalRightA">
        <span>合计：￥{{data.price}}</span>
        <span>总额：￥{{data.totalPrice}}</span>
      </div>
      <div class="totalRightB">
        <span>结算(0)</span>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "cartsTotal",
      props:["data"],
      methods:{
        cartsChecked(){
          this.$emit("cartsChecked");
        }
      }
    }
</script>

<style scoped>
  /* 结算 */
  .total{
    display: flex;
    height:.45rem;
    align-items: center;
    position: fixed;
    bottom:.61rem;
    border-top:1px solid #dcdcdc;
    width:100%;
    justify-content: space-between;
  }
  .totalLeft{
    display: flex;
    margin-left:.15rem;
  }
  .totalLeft span{
    font-size:.11rem;
    margin-left:8px;
  }
  .totalRight{
    display: flex;
    align-items: center;
  }
  .totalRightA span:nth-of-type(1){
    font-size:.11rem;
    display: block;
  }
  .totalRightA span:nth-of-type(2){
    font-size:8px;
    display: block;
    color:#9c9c9c;
  }
  .totalRightB span {
    display: block;
    width:.84rem;
    height:.45rem;
    background: #cccccc;
    color:#fff;
    font-size:.11rem;
    text-align: center;
    line-height: .45rem;
    margin-left:9px;
  }

</style>
