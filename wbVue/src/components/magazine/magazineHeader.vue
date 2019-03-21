<template>
  <header>
    <span>玩表时间</span>
    <span>每日一毒</span>
    <span>腕表资讯</span>
  </header>

</template>

<script>
    export default {
        name: "magazineHeader"
    }
</script>

<style scoped>
  header{
    width:100%;
    height:.41rem;
    display: flex;
    justify-content: space-around;
    line-height: .41rem;
    margin-left:10px;
  }

  header span{
    display: block;
    font-size:.12rem;
    color:#8e8e8e;
  }
</style>
