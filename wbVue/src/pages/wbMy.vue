<template>
  <div class="mys">
    <my-header></my-header>
    <my-content @show="show()"></my-content>
    <my-footer></my-footer>
  </div>
</template>
<script>
  import myHeader from "../components/my/myHeader"
  import myContent from "../components/my/myContent"
  import myFooter from "../components/my/myFooter"

    export default {
        name: "wbMy",
        components:{
          myHeader,
          myContent,
          myFooter
        },
    }
</script>

<style scoped>
    .mys{
      height:100%;
      display: flex;
      flex-direction: column;
    }
</style>
