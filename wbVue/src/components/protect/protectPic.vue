<template>
  <!-- 轮波图 -->
  <div class="pic">
    <video :src="data.vid" controls='controls' autoplay loop></video>
  </div>
</template>

<script>
    export default {
        name: "protectPic",
        props:["data"]
    }
</script>

<style scoped>
  /* 轮波图 */
  video{
    width:100%;
    height:1.44rem;
  }
  .pic{
    width:100%;
    height:1.44rem;
    background: #d8d8d8;
    margin-bottom: .39rem;
  }
</style>
