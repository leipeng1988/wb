<template>
  <div>
    <detail-section></detail-section>
    <detail-selected></detail-selected>
    <detail-service-items></detail-service-items>
    <detail-flagship></detail-flagship>
  </div>

</template>

<script>
    import detailSection from "./detailSection"
    import detailSelected from "./detailSelected"
    import detailServiceItems from "./detailServiceItems"
    import detailFlagship from "./detailFlagship"
    export default {
        name: "detailContent",
      components:{
        detailSection,
        detailSelected,
        detailServiceItems,
        detailFlagship
      }
    }
</script>

<style scoped>

</style>
