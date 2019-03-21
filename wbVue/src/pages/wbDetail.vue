<template>
    <div>
      <detail-header></detail-header>
      <detail-content></detail-content>
      <detail-footer></detail-footer>
    </div>
</template>

<script>
    import detailHeader from "../components/detail/detailHeader"
    import detailContent from "../components/detail/detailContent"
    import detailFooter from "../components/detail/detailFooter"

    export default {
        name: "wbDetail",
      components:{
        detailHeader,
        detailContent,
        detailFooter
      }
    }
</script>

<style scoped>

</style>
