<template>
  <div>
    <reg-header></reg-header>
    <reg-section></reg-section>
  </div>
</template>

<script>
    import regHeader from "../components/reg/regHeader"
    import regSection from "../components/reg/regSection"
    export default {
        name: "wbReg",
      components:{
        regHeader,
        regSection
      }
    }
</script>

<style scoped>

</style>
