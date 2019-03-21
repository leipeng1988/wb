<template>
    <div>
      <shared-search></shared-search>
      <shared-spic :data="data"></shared-spic>
      <shared-list :data="data.list"></shared-list>
    </div>
</template>

<script>
    import sharedSearch from "./sharedSearch"
    import sharedSpic from "./sharedSpic"
    import sharedList from "./sharedList"
    export default {
        name: "sharedContent",
        components:{
          sharedSearch,
          sharedSpic,
          sharedList
        },
      props:["data"]
    }
</script>

<style scoped>

</style>
