<template>
    <div class="box">
      <protect-nav></protect-nav>
      <protect-pic :data="data"></protect-pic>
      <protect-serverlist></protect-serverlist>
      <protect-progject></protect-progject>
      <protect-about></protect-about>
    </div>
</template>

<script>
  import protectNav from "./protectNav"
  import protectPic from "./protectPic"
  import protectServerlist from "./protectServerlist"
  import protectProgject from "./protectProgject"
    export default {
        name: "protectContent",
        components:{
          protectNav,
          protectPic,
          protectServerlist,
          protectProgject
        },
        props:["data"]
    }
</script>

<style scoped>
    .box{
      flex: 1;
      overflow-y: auto;
    }
</style>
