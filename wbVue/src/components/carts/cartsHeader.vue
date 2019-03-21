<template>
  <header>
        <span>
            购物袋
        </span>
    <span>
            编辑
        </span>
  </header>

</template>

<script>
    export default {
        name: "cartsHeader"
    }
</script>

<style scoped>
  /* 头部 */
  header{
    height:.45rem;
    border-bottom:1px solid #e3e2da;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  header span:nth-of-type(1){
    font-size:.13rem;
    display: block;
    margin-left:40%;
  }
  header span:nth-of-type(2){
    font-size:.12rem;
    display: block;
    margin-right:9px;
  }
</style>
