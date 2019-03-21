<template>
  <!-- 轮播图 -->
  <div class="spic">
    <img :src="data.i" />
  </div>
</template>

<script>
    export default {
        name: "sharedSpic",
        props:["data"]
    }
</script>

<style scoped>
  /* 轮播图 */
  .spic{
    width:100%;
    height:2.09rem;
    background: #f1f1f1;
  }

  img{
    width:100%;
    height:2.09rem;
  }
</style>
