<template>
  <div class="cho">
    <choose-nav></choose-nav>
    <choose-section></choose-section>
    <choose-footer></choose-footer>
  </div>

</template>

<script>
    import chooseNav from "../components/choose/chooseNav"
    import chooseSection from "../components/choose/chooseSection"
    import chooseFooter from "../components/choose/chooseFooter"
    export default {
        name: "wbChoose",
        components:{
          chooseNav,
          chooseSection,
          chooseFooter
        }
    }
</script>

<style scoped>
  .cho{
    height:100%;
    display: flex;
    flex-direction: column;
  }
</style>
